import styles from '../components/help.module.css'
import React from 'react';

function Help() {
    return (
        <div>
            <div className={styles.container1}>
                <h2>Support Center</h2>
                <p className={styles.text}>CycleHub is a bike-sharing platform designed to make commuting on campus easier, healthier, and more environmentally friendly. With CycleHub, you can find, rent, and return bikes using just your smartphone.</p>
                <h3>How It Works</h3>
                <p className={styles.text}>To start using CycleHub, simply go to our website, sign up for an account, and find a bike near you. Scan the QR code on the bike to unlock it, and you're ready to go! When you're done, just lock the bike and end your ride in the app.</p>
                <h3>Contact Us</h3>
                <p className={styles.text}>If you have any questions or need assistance, please don't hesitate to contact us at <a href="mailto:support@cyclehub.com">support@cyclehub.com</a>. We're here to help!</p>               
            </div>
        </div>
    );
}

export default Help;