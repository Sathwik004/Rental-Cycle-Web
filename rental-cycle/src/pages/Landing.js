import styles from '../components/Landing.module.css';
import React from 'react';
import gif from '../assets/Ride a bicycle.gif';
import { useNavigate } from 'react-router';


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
    const navigate = useNavigate();

    return (
        <div>

            <div className={styles.toppart}>
                <div className={styles.title}><a href=" ">Cyclehub</a></div>
                <ul className={styles.list1}>
                    <li onClick={aboutUs}>About us</li>
                    <li className={styles.button2} onClick={signIn}>Login</li>
                    <li className={styles.button3} onClick={signUp}>Sign Up</li>
                </ul>
            </div> 

            <div className={styles.midarea}>
                <p className={styles.para1}>GET AROUND THE CAMPUS THE <span className={styles.wordcolor}>EASY</span> AND <span className={styles.wordcolor}>ECO-FRIENDLY</span> WAY!</p>
                <img src={gif} className={styles.pagegif} />
            </div>
            <p className={styles.para2}>Reduce carbon footprint and<br /> embrace a healthy life-style</p>
        </div> 



    );
}
export default Landing
