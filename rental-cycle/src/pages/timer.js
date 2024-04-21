import styles from '../components/timer.module.css';
import React, { useState, useEffect, } from 'react';

function Timer() {
    const [time, setTime] = useState(localStorage.getItem('time') ? parseInt(localStorage.getItem('time')) : 200);
    const [isRunning, setIsRunning] = useState(true);


    useEffect(() => {
        const timer = setInterval(() => {
            localStorage.setItem('time', time);
            if (isRunning) {
                
                setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
            }

        }, 1000);



        return () => clearInterval(timer); // This will clear Interval on component unmount
    }, [isRunning,time]);

    function onReturn() {
        setIsRunning(false);
        //onreturn supabase call

    }

    return (
        <div className={styles.box}>
            <div className={styles.timer}>
                <h1>{Math.floor(time / 60).toString()} : {(time % 60).toString()}</h1>
            </div>
            <div className={styles.progresscontainer}>
                <progress value={Math.floor(time / 3).toString()} max="100" />
            </div>
            <button onClick={onReturn}>Stop</button>

        </div>

    )
}

export default Timer;