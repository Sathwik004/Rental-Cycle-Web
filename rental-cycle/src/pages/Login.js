import styles from '../components/Login.module.css';
import React from 'react';
import img from '../assets/loginpageimg.gif';


function Login() {

    function signIn(){
        console.log("send auth msg");
    } 

    function cancel(){ 
        window.location.href = '/';
    }

    return(
        <div className={styles.wholething}>
            <div className={styles.leftside}>
                <div className={styles.imgback}>
                    <img src={img} className={styles.img}></img>
                </div>
            </div>
            <div className={styles.rightside}>
                <h1 className={styles.title}>LOGIN</h1>
                <input type='text' placeholder='Registration' className={styles.info}></input>
                <input type='text' placeholder='Password' className={styles.info}></input>
                <div className={styles.password}>Forgot Password?</div>
                <p className={styles.boxes}>
                    <button className={styles.button1} onClick={signIn}>Sign In</button>
                    <button className={styles.button2} onClick={cancel}>Cancel</button>
                </p>

            </div>

        </div>
    );
}

export default Login