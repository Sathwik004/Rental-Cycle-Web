import styles from '../components/Aboutus.module.css'
import React from 'react';

function AboutUs() {
    return (
        <div>
            <div className={styles.container1}>
                <h1>About CycleHub</h1>
                <p className={styles.text}>Welcome to CycleHub, your campus solution for sustainable transportation!</p>
                {/* Add your image here */}
            </div>
            <div className={styles.container2}>
                <h2>Our Vision</h2>
                <p>At CycleHub, our vision is to promote sustainable and healthy transportation solutions within our campus community by providing convenient and affordable access to bicycles, reducing carbon emissions, and encouraging an active lifestyle.</p>
                <h2>Our Mission</h2>
                <p>Our mission is to establish a user-friendly cycle rental platform that offers a seamless experience for students and staff, facilitating easy access to bicycles for commuting and recreational purposes.</p>
            </div>
            <div className={styles.container3}>
                <h2>Key Features</h2>
                <ul>
                    <li>User-friendly platform for browsing and renting cycles</li>
                    <li>Real-time availability updates and secure checkout process</li>
                    <li>Integration with smart parking solutions for hassle-free returns</li>
                    <li>Dedicated customer support for a smooth experience</li>
                </ul>
                <h2>Technology Stack</h2>
                <ul>
                    <li>React.js for the frontend</li>
                    <li>Node.js for backend services</li>
                    <li>PostgreSQL for database management using Supabase</li>
                    <li>Integration with smart devices for parking management</li>
                </ul>
            </div>
            <div className={styles.container4}>
                <h2>Meet the Team</h2>
                <ul>
                    <li>Sathwik Bhandarkar - Lead Developer</li>
                    <li>Darshan Nakshatri - Design architect</li>
                    <li>Lavanya G Prabhu - Database handler</li>
                </ul>
            </div>
            <div className={styles.container5}>
                <h2>Contact Us</h2>
                <p>For any queries or feedback, feel free to reach out to us at: <a href="mailto:info@cyclehub.com" className={styles.link1}>info@cyclehub.com</a>.</p>
            </div>
        </div>
    );
}

export default AboutUs;

