import styles from '../components/Homepage.module.css';
import React from 'react';
import img1 from '../assets/homepageimg.jpg'
import supabase from '../database/client';
import img from '../assets/logout.jpg';
import Card from '../components/card';


function Home() {

    console.log('In Home page');

    async function logout() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log('error', error.message);
            return;
        }
        window.location.href = '/login';
    }

    return (
        <main className={styles.wholething}>
            <header>
                <p className={styles.title}>SALAD</p>
                <nav>

                    <ul className={styles.unorderlist}>
                        <li className={styles.link}>Profile</li>
                        <li className={styles.link1} onClick={logout}>
                            <img src={img} className={styles.imgicon}></img>Logout
                        </li>{/*onClick={logout*/}
                    </ul>
                </nav>
            </header>


            <div className={styles.body}>
                <img src={img1} className={styles.midimg}></img>
                <div className={styles.whole}>
                    <h1 className={styles.para}><span className={styles.wordcolor}>Skip</span> the hassle of owning and maintaining a bike.  <span className={styles.wordcolor}>Rent one </span>whenever you need it!</h1>
                </div>
            </div>

            <div >
                <h1>Book Your Cycle Now</h1>
            </div>

            <Card />

            <div className={styles.footer}>
                <div>About us</div>
                <div>Terms and Condition</div>
                <div>Help</div>
            </div>
        </main>
    );
}
export default Home;