import styles from '../components/Terms.module.css'
import React from 'react';

function TandC() {
    return (
        <div>
            <div className={styles.container1}>
                <h2>Terms and Conditions</h2>
                <div className={styles.subheading}>Acceptance of Terms</div>
                <p>By using our website, you agree to the terms and conditions outlined in this agreement.</p>
                <div className={styles.subheading}>Privacy Policy</div>
                <p>We respect your privacy and commit to protecting your personal data. Please see our Privacy Policy for more information.</p>
                <div className={styles.subheading}>User Responsibilities</div>
                <p>Users are responsible for their own actions while using our website. Any misuse of the site or violation of these terms may result in termination of your account.</p>
                <div className={styles.subheading}>Intellectual Property Rights</div>
                <p>All content on our website is owned by us and protected by copyright laws.</p>
                <div className={styles.subheading}>Limitation of Liability</div>
                <p>We are not responsible for any errors or omissions on our website, or for any actions taken based on its content.</p>
                <div className={styles.subheading}>Termination</div>
                <p>We reserve the right to terminate any user's account at our discretion.</p>
                <div className={styles.subheading}>Changes to Terms</div>
                <p>We reserve the right to change these terms and conditions at any time. Any changes will be posted on this page.</p>
            </div>
        </div>
    );
}

export default TandC;