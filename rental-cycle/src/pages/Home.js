import styles from '../components/Homepage.module.css';
import React, { useState, useEffect } from 'react';
import img from '../assets/logout.jpg';
import img1 from '../assets/homepageimg.jpg'
import supabase from '../database/client';
import {getAvailableBicycles, logout} from '../database/database';
import Card from '../components/card';
import { useNavigate } from 'react-router';
import { useAppContext } from '../context/context';
import Timer from './timer';

function Home() {
    const { source, setSource,locations,setLocations, rentedCycle } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        getAvailableBicycles().then((data) => setLocations(data));
    }, []);




    function handleBooking(location_name) {
        console.log('in handle booking', location_name);
        setSource(location_name);
        navigate('/booking');
    }

    return (
        <div>
            <header>
                <nav className={styles.navdiv}>
                    <div className={styles.title}>Cyclehub</div>
                    <div>
                        <button className={styles.navbutton} onClick={()=>navigate('/profile')}>Profile</button>
                        <button className={styles.navbutton} onClick={logout}><img src={img} className={styles.imgicon}></img>Logout</button>
                    </div>
                </nav>
            </header>


            <div className={styles.body}>
                <img src={img1} className={styles.midimg}></img>
                <div className={styles.whole}>
                    <p className={styles.para1}><span className={styles.wordcolor}>Skip</span> the hassle of owning and maintaining a bike.  <span className={styles.wordcolor}>Rent one </span>whenever you need it!</p>
                </div>
            </div>
            {rentedCycle ? (<Timer/>):
            <><p className={styles.para2}>Book Your Cycle Now</p><div className={styles.cardcontainer}>
                    <div className={styles.cardstarts}>

                        {locations.map((item) => <Card key={item.id} location_name={item.location_name} lot_count={item.lot_count} handleBooking={handleBooking} />)}

                    </div>
                </div></>
            }

            <footer>
                <div>About us</div>
                <div>Terms and Condition</div>
                <div>Help</div>
            </footer>
        </div>
    );
}
export default Home;