import styles from '../components/Landing.module.css';
import React from 'react';
import gif from '../assets/Ride a bicycle.gif';
import Timer from './timer';


function Landing() {
    function signIn() {
        window.location.href = '/login';
    }
    function signUp() {
        window.location.href = '/signup';
    }
    function aboutUs() {
        window.location.href = '/about';
    }
    return (
        <div>
            <header className={styles.all}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}><a href=" ">Cyclehub</a></div>
                        
                        <ul className={styles.navbuttons}>
                            <li className={styles.link}>
                                <button className={styles.button1} onClick={aboutUs}>About Us</button>
                            </li>
                            <li className={styles.link}>
                                <button className={styles.button1} onClick={signIn}>Login</button>
                            </li>
                            <li className={styles.link}>
                                <button className={styles.button2} onClick={signUp}>Sign Up</button>
                            </li>
                        </ul>
                </nav>
            </header>
            <div className={styles.midarea}>
                <p className={styles.para1}>GET AROUND THE CAMPUS THE <span className={styles.wordcolor}>EASY</span> AND <span className={styles.wordcolor}>ECO-FRIENDLY</span> WAY!</p>
                <img src={gif} className={styles.pagegif} />
            </div>
            <p className={styles.para2}>Reduce carbon footprint and<br /> embrace a healthy life-style</p>
        </div>



    );
}
export default Landing
