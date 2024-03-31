import styles from '../components/Landing.module.css';
import React from 'react';
import gif from '../assets/Ride a bicycle.gif';


function Landing() {
    return(
        <header className={styles.all}>
            <nav className={styles.navbar}>
                <div className={styles.navdiv}>
                    <div className={styles.logo}><a href=" ">SALAD</a></div>
                    <ul>
                        <li className={styles.link}>
                            <button className={styles.button1}>About Us</button>
                        </li>
                        <li className={styles.link}><a href=" ">Login</a>   </li>
                        <li className={styles.link}><a href=" "><div className={styles.link1}>Get Started</div></a>  </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.midarea}>
                <p className={styles.para1}>GET AROUND THE CAMPUS THE <span className={styles.wordcolor}>EASY</span> AND <span className={styles.wordcolor}>ECO-FRIENDLY</span> WAY!</p>
                <img src={gif} className={styles.pagegif} />
            </div>
            <p className={styles.para2}>Reduce carbon footprint and<p>embrace a healthy life-style</p> </p>

        </header>
    );
}
export default Landing
