import styles from '../components/Profile.module.css';
import React, { PureComponent } from 'react';
import img from '../assets/logout.jpg';




function Profile(){
    return(
        <>
          <header>
                <nav className={styles.navdiv}>
                    <div className={styles.title}>CYCLE HUB</div>
                    <div>
                        <button className={styles.navbutton} >Home</button>
                        <button className={styles.navbutton} ><img src={img} className={styles.imgicon}></img>Logout</button>
                    </div>
                </nav>
            </header>

            <div className={styles.midpart}>
                <div className={styles.box1}>
                    <div className={styles.username1}>USER NAME</div>
                    <div className={styles.email1}>darshannakshatri@gmail.com</div>
                    <div className={styles.phDOB}>
                        <div>Phone No</div>
                        <div>Date of Birth</div>
                    </div>
                    <div className={styles.phDOB1}>
                        <div>+9988766554</div>
                        <div>30-02-2004</div>
                    </div>
                </div>
                <div className={styles.box2}>
                  <div className={styles.balance1}>Balance</div>
                  <div className={styles.money1}>₹ 2000.00</div>
                </div>

            </div>

            <div className={styles.bottomlist}>

            </div>
       

        

        </>
    )
};

export default Profile