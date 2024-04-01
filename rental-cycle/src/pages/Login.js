import styles from '../components/Login.module.css';
import React,{ useState } from 'react';
import img from '../assets/loginpageimg.gif';
import getnames from '../database/database';
import supabase from '../database/client';
import { useState } from 'react';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const signIn = async() => {
        if (email === '' || password === '') {
            return;}
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password
            
        })
        console.log(data);
        if (error)
        {  
            console.log(error.message);
            return;
        }
    }

    // useState(async () => {

    //     const {data : authListner} = await supabase.auth.onAuthStateChange((event, session) => {
    //         console.log('session',session);
    //         if (event === 'SIGNED_IN') {
    //             window.location.href = '/home';
    //             setUser(session?.user)
    //         }
    //         else if (event === 'SIGNED_OUT')
    //         {
    //             console.log('Signed out');
    //             window.location.href = '/login';
    //             setUser(null);
    //         }
    //         console.log('event', event);
    //     });
    //     return () => {
    //         authListner.unsubscribe();
    //     }
    // })
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
            <form className={styles.right}>
                <label className={styles.title}>Login </label>
                <input type='text' placeholder='Registration' className={styles.info} value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <input type='password' placeholder='Password' className={styles.info} value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                <div className={styles.password}>Forgot Password?</div>
                <button type='submit'  className={styles.button1} onClick={signIn}>Login</button>
                <button type='button'  className={styles.button2} onClick={cancel}>Cancel</button>
            </form>

        </div>
    );
}

export default Login