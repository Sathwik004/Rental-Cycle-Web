import styles from '../components/timer.module.css';
import React, { useState, useEffect, } from 'react';
import { useAppContext } from '../context/context';
import { returnCycle } from '../database/database';

function Timer() {
    const [time, setTime] = useState(localStorage.getItem('time') ? parseInt(localStorage.getItem('time')) : 300);
    const [isRunning, setIsRunning] = useState(true);
    const {rentedCycle, setRentedCycle} = useAppContext();
    const maxtime = 300;


    useEffect(() => {
        if (time === 0 && isRunning) {
            setTime(maxtime);
        }
    },[]);

    useEffect(() => {
        const timer = setInterval(() => {
            localStorage.setItem('time', time);
            if (isRunning) {
                
                setTime(prevTime => prevTime  - 1);
            }

        }, 1000);



        return () => clearInterval(timer); // This will clear Interval on component unmount
    }, [isRunning,time]);

    function onReturn() {
        setIsRunning(false);
        returnCycle(rentedCycle.d_lotid,maxtime-time).then((data) => {console.log(data);localStorage.removeItem('time');});
        setRentedCycle(null);
        console.log('in return',rentedCycle.data);
    }

    return (
        <div className={styles.box}>
            <h2>Please collect your cycle from lot ID {rentedCycle ? rentedCycle.s_lotid:"00"} and park it at lot ID {rentedCycle ? rentedCycle.d_lotid : "00"}</h2>
            <div className={styles.timer}>
                <h1>{Math.floor(time / 60).toString()} : {(time % 60).toString()}</h1>
            </div>
            <div className={styles.progresscontainer}>
                <progress value={Math.floor(time*100 / maxtime).toString()} max="100" />
            </div>
            <button onClick={onReturn}>Stop</button>

        </div>

    )
}

export default Timer;