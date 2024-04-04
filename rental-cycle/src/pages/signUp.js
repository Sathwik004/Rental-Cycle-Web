import styles from '../components/Login.module.css';
import React from 'react';
import img from '../assets/loginpageimg.gif';
import supabase from '../database/client';
import { useState } from 'react';
import { useAppContext } from '../context/context';


function SignUp() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useAppContext();
    

    const signUp = async (event) => {
        console.log('event ', event);
        event.preventDefault();
        if (email === '' || password === '') {
            return;
        }
        setLoading(true);

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });


        console.log('data', data);
        if (error) {
            console.log('error', error.message);
            return;
        }
        setUser(data?.user);

    }
    function cancel() {
        window.location.href = '/';
    }

    return (
        <div className={styles.wholething}>

            <div className={styles.imgback}>
                <img src={img} className={styles.img}></img>
            </div>
            <form className={styles.right} onSubmit={signUp}>
                <label className={styles.title}>Sign Up</label>
                <input type='text' placeholder='Email' className={styles.info} value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <input type='password' placeholder='Password' className={styles.info} value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                <div className={styles.password}>Forgot Password?</div>
                <button type='submit'  className={styles.button1} disabled={loading}>{loading? 'Loading...':'Sign Up'}</button>
                <button type='button'  className={styles.button2} onClick={cancel}>Cancel</button>
            </form>

        </div>
    );
}

export default SignUp;