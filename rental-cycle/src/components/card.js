import React from "react";
import styles from './Homepage.module.css';

export default function Card({location_name,lot_count, handleBooking }) {

    return (

        <div className={styles.card}>
            <h2>{location_name}</h2>
            <p className={styles.p}>{lot_count} cycles available</p>

            <button className={styles.bookbutton} onClick={() => {handleBooking(location_name) }}>Book Now</button>
        </div>
    );
}