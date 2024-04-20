import styles from '../components/Homepage.module.css';
import React, { useState, useEffect } from 'react';
import img from '../assets/logout.jpg';
import img1 from '../assets/homepageimg.jpg';
import ballimg from '../assets/homeball1.jpg'
import supabase from '../database/client';
import {getAvailableBicycles} from '../database/database';
import Card from '../components/card';
import { useNavigate } from 'react-router';
import { useAppContext } from '../context/context';

function Home() {
    const { source, setSource,locations,setLocations } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        getAvailableBicycles().then((data) => setLocations(data));
    }, []);


    async function logout() {
        supabase.auth.signOut().then(({ error }) => {
            if (error) {
                console.log('error in logout', error);
            }
            else {
                navigate('/');
            }
        });
    }

    function handleBooking(location_name) {
        console.log('in handle booking', location_name);
        setSource(location_name);
        navigate('/booking');
    }

    return (
        <div>
            <div className={styles.pageback}>
            <img src={ballimg} className={styles.ball1}></img>
            <img src={ballimg} className={styles.ball2}></img>
            </div>
            <div className={styles.pagefront}>
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

            <p className={styles.para2}>Book Your Cycle Now</p>

            <div className={styles.cardcontainer}>
                <div className={styles.cardstarts}>

                    {locations.map((item) => <Card key={item.id} location_name={item.location_name} lot_count={item.lot_count} handleBooking={handleBooking} />)}

                </div>
            </div>

            <footer>
                <div>About us</div>
                <div>Terms and Condition</div>
                <div>Help</div>
            </footer>
        </div>
        </div>
    );
}
export default Home;