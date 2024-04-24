import styles from '../components/Login.module.css';
import React, { useEffect } from 'react';
import img from '../assets/loginpageimg.gif';
import supabase from '../database/client';
import { useState } from 'react';
import { useAppContext } from '../context/context';
import { useNavigate } from 'react-router';


function SignUp() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { user } = useAppContext();


    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, []);

    const handleSignUp = async (event) => {
        console.log('event ', event);
        event.preventDefault();
        if (name === '' || email === '' || password === '') {
            alert('Please fill all the fields');
            return;
        }
        if (password !== confirmPassword) {
            alert('Password and Confirm Password should be same');
            return;
        }
        setLoading(true);



        await supabase.auth.signUp({
            email: email,
            password: password,
        }).then(async ({ data, error }) => {
            if (error) {
                console.log('error', error.message);
                alert(error.message);
                return;
            }
            const { user: { id } } = data;
            console.log('user in login', id);
            const { data: msg, error: err } = await supabase.from('Profiles').insert([{ userid: id, name: name, balance: 2000 }]);
            navigate('/home');
            if (err) {
                console.log('error', err.message);
                return;
            }
        }
        );





        setLoading(false);
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
            <form className={styles.right} onSubmit={handleSignUp}>
                <label className={styles.title}>Sign Up</label>
                <input type='text' placeholder='Name' className={styles.info} onChange={(e) => setName(e.target.value)} required></input>
                <input type='text' placeholder='Email' className={styles.info} value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <input type='password' placeholder='Password' className={styles.info} value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                <input type='password' placeholder='Confirm Password' className={styles.info} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required></input>
                <button type='submit' className={styles.button1} disabled={loading}>{loading ? 'Loading...' : 'Sign Up'}</button>
                <button type='button' className={styles.button2} onClick={cancel}>Cancel</button>
            </form>

        </div>
    );
}

export default SignUp;