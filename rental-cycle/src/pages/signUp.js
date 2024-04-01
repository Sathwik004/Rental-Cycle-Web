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
        if (email === '' || password === '') {
            alert('Please fill all the fields');
            return;
        }
        // supabase.auth.signInwithPassword({
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
                <label className={styles.title}>Sign Up</label>
                <input type='text' placeholder='Email' className={styles.info} value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <input type='password' placeholder='Password' className={styles.info} value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                <div className={styles.password}>Forgot Password?</div>
                <button type='submit'  className={styles.button1} >SignUp</button>
                <button type='button'  className={styles.button2} onClick={cancel}>Cancel</button>
            </form>

        </div>
    );
}

export default Login