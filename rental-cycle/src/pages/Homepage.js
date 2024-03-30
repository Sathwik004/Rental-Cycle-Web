import styles from '../components/Homepage.module.css';
import React from 'react';
import img from '../assets/logout.jpg';
import img1 from '../assets/homepageimg.jpg'

function Homepage() {
    return(
        <>
        <nav className={styles.navdiv}>
            <div className={styles.title}>SALAD</div>
            <ul className={styles.unorderlist}>
                <li className={styles.link}>Profile</li>
                <li className={styles.link}><img src={img} className={styles.imgicon}></img>Logout</li>
            </ul>
        </nav>
        <div className={styles.paras}>
            <img src={img1} className={styles.midimg}></img>
            <div className={styles.whole}>
                <p className={styles.para1}><span className={styles.wordcolor}>Skip</span> the hassle of owning and maintaining a bike.  <span className={styles.wordcolor}>Rent one </span>whenever you need it!</p>
                <p className={styles.para2}>Book Your Cycle Now</p>
                <p className={styles.para3}><button className={styles.button}>Book now</button></p>
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
export default Homepage