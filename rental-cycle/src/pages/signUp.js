import styles from '../components/Login.module.css';
import React, { useEffect, useState  } from 'react';
import img from '../assets/loginpageimg.gif';
import supabase from '../database/client';
import { useAppContext } from '../context/context';
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user, setUser, session} = useAppContext();
    

    useEffect(() => {
        if(user && session)
        {
            navigate('/home');
        }
    },[user]);
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

        setLoading(false);
        console.log('data', data);
        if (error) {
            alert(error.message, 'User already exists');
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