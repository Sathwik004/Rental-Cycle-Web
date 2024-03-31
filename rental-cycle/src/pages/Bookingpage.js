import React from 'react';
import styles from '../components/Bookingpage.module.css'
import img from '../assets/bookingpageimg.gif'
import boxes from '../assets/bookingpageinput.jpg'


function booking(){
    return(
        <>
        <div className={styles.all}>
            <div className={styles.title}>RIGHT PLACE TO BOOK YOUR JOURNEY</div>
            <div className={styles.midpart}>
                <img src={img} className={styles.gif}></img>
                <div className={styles.leftinput}>
                    <div className={styles.input1}>
                        <div className={styles.from}>From: <input className={styles.from1}></input></div>
                        <img src={boxes} className={styles.box1}></img>
                    </div>
                    <div className={styles.input2}>
                        <div className={styles.to}>To: <input className={styles.to1}></input></div>
                        <img src={boxes} className={styles.box2}></img>
                    </div>
                </div>
                <div className={styles.rightinput}>
                    <div className={styles.input1}>
                        <div className={styles.from}>Time: <input className={styles.from1}></input></div>
                        <img src={boxes} className={styles.box1}></img>
                    </div>
                    <div className={styles.input2}>
                        <div className={styles.to}>Duration: <input className={styles.to1}></input></div>
                        <img src={boxes} className={styles.box2}></img>
                    </div>
                </div>
            </div>
            <button className={styles.pay}>Pay Now</button>
        </div>
        </>
    );
}
export default booking