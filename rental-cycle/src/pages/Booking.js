import styles from '../components/Booking.module.css';
import img from '../assets/loginpageimg.gif';
import { useNavigate } from 'react-router';
import { useAppContext } from '../context/context';
import { useEffect, useState } from 'react';
import { getAvailableSlots } from '../database/database';


function Booking() {
    const navigate = useNavigate();
    const { source} = useAppContext();
    const [destination, setDestination] = useState(null);
    const [availableSlotsInDest, setAvailableSlotsInDest] = useState(0);
    const [availableSlots, setAvailableSlots] = useState([]);

    function cancel() {
        navigate('/');
    }

    useEffect(() => {
        if (source === null) {
            navigate('/');
        }
        getAvailableSlots().then((data) =>
            setAvailableSlots(data.filter((location) => location.location_name !== source)));

    }, []);

    useEffect(() => {

        const destinationSlots = availableSlots.find((location) => location.location_name === destination);
        setAvailableSlotsInDest(destinationSlots?.lot_count);
    }, [destination]);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        console.log('form data', formData);
    }


    return (
        <div className={styles.wholething}>
            <div className={styles.leftside}>
                <div className={styles.imgback}>
                    <img src={img} className={styles.img}></img>
                </div>
            </div>

            <form className={styles.right} onSubmit={handleSubmit}>
                <label className={styles.title}>Booking Page </label>
                <select className={styles.selection} onChange={(e) => setDestination(e.target.value)}>
                    {availableSlots.map((item) => (
                        <option className={styles.selection1}>{item.location_name}</option>
                    ))}
                </select>
                <label className={styles.amount}>{destination?`${availableSlotsInDest} slots available at ${destination}` : 'Select Destination'  }</label>
                <label className={styles.amount}>COST : 40</label>
                <div className={styles.paying}>
                    <button type='button' className={styles.button2} onClick={cancel}>Cancel</button>
                    <button type='submit' className={styles.button1}>Pay</button>
                </div>
            </form>

        </div>
    )
}

export default Booking