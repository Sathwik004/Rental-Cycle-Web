import styles from '../components/Homepage.module.css';
import React, { useState } from 'react';
import img from '../assets/logout.jpg';
import img1 from '../assets/homepageimg.jpg'
import getbicycles from '../database/database';

function Home() {

    // const [bicycles, setBicycles] = useState('');
    // setBicycles(getbicycles().map((bicycle) => bicycle.model).join(', '));
    getbicycles();

    function logout(){
        window.location.href = '/login';
    }

    return(
        <>
        <nav className={styles.navdiv}>
            <div className={styles.title}>Cyclehub</div>
            <div>
                <button className={styles.navbutton}>Profile</button>
                <button className={styles.navbutton} onClick={logout}><img src={img} className={styles.imgicon}></img>Logout</button>
            </div>       
        </nav>

        <div className={styles.body}>
            <img src={img1} className={styles.midimg}></img>
            <div className={styles.whole}>
                <p className={styles.para1}><span className={styles.wordcolor}>Skip</span> the hassle of owning and maintaining a bike.  <span className={styles.wordcolor}>Rent one </span>whenever you need it!</p>
                <p className={styles.para2}>Book Your Cycle Now</p>
                <button className={styles.button}>Book now</button>
            </div>
        </div>
        <div className={styles.footer}>
            <div>About us</div>
            <div>Terms and Condition</div>
            <div>Help</div>
        </div>
        </>
    );
}
export default Home;