import styles from '../components/Login.module.css';
import React from 'react';
import img from '../assets/loginpageimg.gif';
import getnames from '../database/database';
import supabase from '../database/client';
import { useState } from 'react';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signIn() {
        // supabase.auth.signIn({
        //     email: '',
        //     password: ''
        // })
        //window.location.href = '/home';
        console.log(email, password);  
    }

    function cancel() {
        window.location.href = '/';
    }

    return (
        <div className={styles.wholething}>

            <div className={styles.imgback}>
                <img src={img} className={styles.img}></img>
            </div>

            <form className={styles.right}>
                <label className={styles.title}>Login </label>
                <input type='text' placeholder='Registration' className={styles.info} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type='text' placeholder='Password' className={styles.info} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <div className={styles.password}>Forgot Password?</div>
                <input type='button' value='Login' className={styles.button1} onClick={signIn}></input>
                <input type='button' value='Cancel' className={styles.button2} onClick={cancel}></input>
            </form>

        </div>
    );
}

export default Login