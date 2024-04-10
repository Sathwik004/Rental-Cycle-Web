import styles from '../components/Login.module.css';
import React, { useEffect } from 'react';
import img from '../assets/loginpageimg.gif';
import supabase from '../database/client';
import { useState } from 'react';
import { useAppContext } from '../context/context';
import { useNavigate } from 'react-router';


function Login() {
    const navigate = useNavigate(); 
    const { user, setUser ,session} = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            navigate('/home');
        }},[user]);
            

    const signIn = async (event) => {
        event.preventDefault();
        if (email === '' || password === '') {
            return;
        }
        setLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        

        if (error) {
            console.log('error', error.message);
            //If error is 'Invalid login credentials' then show error message then display this msg
            alert(error.message);
            setLoading(false);
            return;
        }
        //setUser(data?.user);
    }


    function cancel() {
        navigate('/');
    }

    return (
        <div className={styles.wholething}>

            <div className={styles.imgback}>
                <img src={img} className={styles.img}></img>
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