import styles from '../components/Homepage.module.css';
import React from 'react';
import img from '../assets/logout.jpg';
import img1 from '../assets/homepageimg.jpg'

function Home() {
    return(
        <>
        <nav className={styles.navdiv}>
            <div className={styles.title}>SALAD</div>
            <div>
                <button className={styles.navbutton}>Profile</button>
                <button className={styles.navbutton}><img src={img} className={styles.imgicon}></img>Logout</button>
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