import styles from '../components/Login.module.css';
import React from 'react';
import img from '../assets/Loginpageimg.jpg'

function Login() {
    return(
        <div className={styles.wholething}>
            <div className={styles.imgback}>
                <img src={img} className={styles.img}></img>
            </div>
            <div>
                <h1 className={styles.title}>LOGIN</h1>
            </div>
        </div>
    );
}

export default Login