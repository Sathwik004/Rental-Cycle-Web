import styles from '../components/Homepage.module.css';
import React from 'react';
import img1 from '../assets/homepageimg.jpg'
import supabase from '../database/client';
import img from '../assets/logout.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        name: "FIRST",
        review: 'this is going to be exiting'
    },
    {
        name: "SECOND",
        review: 'this was supposed to be exiting'
    },
    {
        name: "third",
        review: 'this is going to be exiting'
    },
    {
        name: "fourth",
        review: 'this was supposed to be exiting'
    },
    {
        name: "fifth",
        review: 'this is going to be exiting'
    }
]



function Home() {
    
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
        
    };
    console.log('In Home page');

    async function logout(){
        const {error} = await supabase.auth.signOut();
        if (error) {
            console.log('error',error.message);
            return;
        }
        window.location.href = '/login';
    }

    return(
        <main className={styles.wholething}>
        <nav className={styles.navdiv}>
            <div className={styles.title}>SALAD</div>
            <ul className={styles.unorderlist}>
                <li className={styles.link}>Profile</li>
                <li className={styles.link1} onClick={logout}>
                    <img src={img} className={styles.imgicon}></img>Logout
                    </li>{/*onClick={logout*/}
            </ul>
        </nav>

        <div className={styles.body}>
            <img src={img1} className={styles.midimg}></img>
            <div className={styles.whole}>
                <p className={styles.para1}><span className={styles.wordcolor}>Skip</span> the hassle of owning and maintaining a bike.  <span className={styles.wordcolor}>Rent one </span>whenever you need it!</p>           
            </div>
        </div>

        <div >
            <p className={styles.para2}>Book Your Cycle Now</p>
        </div>

        <div className={styles.cardstarts}>
            <div className={styles.inner1}>
            <Slider {...settings}>
                <style>{`.slick-slide > div {margin: 0px 20px;}`}</style>
                {data.map((d)=>(
                    <div className={styles.card_item}>
                        <div>  
                            <p className={styles.card_name}>{d.name}</p>
                        </div>
                        <div>
                            <p className={styles.review1}>{d.review}</p>
                            <button className={styles.buttonbook}>Book Now</button>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>

        

        <div className={styles.footer}>
            <div>About us</div>
            <div>Terms and Condition</div>
            <div>Help</div>
        </div>
        </main>
    );
}
export default Home;