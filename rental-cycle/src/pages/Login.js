import styles from '../components/Login.module.css';
import React,{ useState } from 'react';
import img from '../assets/loginpageimg.gif';
import supabase from '../database/client';
<<<<<<< HEAD
=======
import { useState } from 'react';
import { useAppContext } from '../context/context';
>>>>>>> 1b50071fbf6fdeb9f1bcce5b0f7c0703ca891bae


function Login() {
    const { setUser } = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const signIn = async (event) => {
        console.log('event ', event);
        event.preventDefault();
        if (email === '' || password === '') {
            return;
        }
        setLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        
        console.log('data', data);
        if (error) {
            console.log('error', error.message);
            //If error is 'Invalid login credentials' then show error message then display this msg
            alert(error.message);
            setLoading(false);
            return;
        }
        setUser(data?.user);
    }


    function cancel() {
        window.location.href = '/';
    }

    return (
        <div className={styles.wholething}>
            <div className={styles.leftside}>
                <div className={styles.imgback}>
                    <img src={img} className={styles.img}></img>
                </div>
            </div>
            <form className={styles.right} onSubmit={signIn}>
                <label className={styles.title}>Login </label>
                <input type='text' placeholder='Registration' className={styles.info} value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <input type='password' placeholder='Password' className={styles.info} value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                <div className={styles.password}>Forgot Password?</div>
                <button type='submit' className={styles.button1} disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
                <button type='button' className={styles.button2} onClick={cancel}>Cancel</button>
            </form>

        </div>
    );
}

export default Login;