import styles from '../components/Homepage.module.css';
import React, { useState, useEffect } from 'react';
import img from '../assets/logout.jpg';
import img1 from '../assets/homepageimg.jpg'
import supabase from '../database/client';
import getAvailableBicycles from '../database/database';
import Card from '../components/card';
import { useNavigate } from 'react-router';

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAvailableBicycles().then((data) => setData(data));
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

    return (
        <>
            <header>
                <nav className={styles.navdiv}>
                    <div className={styles.title}>Cyclehub</div>
                    <div>
                        <button className={styles.navbutton}>Profile</button>
                        <button className={styles.navbutton} onClick={logout}><img src={img} className={styles.imgicon}></img>Logout</button>
                    </div>
                </nav>
            </header>


            <div className={styles.body}>
                <img src={img1} className={styles.midimg}></img>
                <div className={styles.whole}>
                    <p className={styles.para1}><span className={styles.wordcolor}>Skip</span> the hassle of owning and maintaining a bike.  <span className={styles.wordcolor}>Rent one </span>whenever you need it!</p>
                    <p className={styles.para2}>Book Your Cycle Now</p>
                </div>
            </div>

            <Card data={data} />

            <footer>
                <div>About us</div>
                <div>Terms and Condition</div>
                <div>Help</div>
            </footer>
        </>
    );
}
export default Home;