import styles from '../components/Booking.module.css';
import { useNavigate } from 'react-router';
import { useAppContext } from '../context/context';
import { useEffect, useState } from 'react';
import { getAvailableSlots, bookCycle } from '../database/database';

import ballimg from '../assets/homeball1.jpg';


function Booking() {
    const navigate = useNavigate();
    const {source, user, rentedCycle, setRentedCycle } = useAppContext();
    const [destination, setDestination] = useState(null);
    const [availableSlotsInDest, setAvailableSlotsInDest] = useState(0);
    const [availableSlots, setAvailableSlots] = useState([]);

    function cancel() {
        navigate('/');
    }

    function onPayement() {

        const id = user.id;
        bookCycle(id, source, destination).then(
            (data) => {
                console.log('data', data);
                setRentedCycle(data);
                navigate('/home');
            });
    }

    useEffect(() => {
        if (source === null) {
            navigate('/');
        }
        getAvailableSlots().then((data) => { setAvailableSlots(data.filter((location) => location.location_name !== source)); setDestination(availableSlots.location_name); });

    }, []);

    useEffect(() => {

        const destinationSlots = availableSlots.find((location) => location.location_name === destination);
        setAvailableSlotsInDest(destinationSlots?.lot_count);
    }, [destination]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('form data', source, " to ", destination);
        if (!destination) {
            alert('Select Destination');
            return;
        }
        localStorage.setItem('time', 300);

        onPayement();
    }


    return (
        <div className={styles.wholething}>
            <img src={ballimg} className={styles.ball1}></img>
            <img src={ballimg} className={styles.ball2}></img>
            <form className={styles.right} onSubmit={handleSubmit}>
                <label className={styles.title}>Booking Page </label>
                <select className={styles.selection} onChange={(e) => setDestination(e.target.value)}>
                    {availableSlots.map((item) => (
                        <option className={styles.selection1}>{item.location_name}</option>
                    ))}
                </select>
                <label className={styles.box}>{destination ? `${availableSlotsInDest} slots available at ${destination}` : 'Select Destination'}</label>
                <label className={styles.amount}>Total cost<p>₹40.00</p></label>
                <button type='submit' className={styles.button1}>Pay</button>
                <button type='button' className={styles.button2} onClick={cancel}>Cancel</button>
                
                

            </form>

        </div>
    )
}

export default Booking