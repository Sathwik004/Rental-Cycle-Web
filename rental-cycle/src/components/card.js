import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Homepage.module.css';


export default function Card() {
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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        
    };

  return (
    <div className={styles.cardstarts}>
            <div >
            <Slider {...settings}>
                <style>{`.slick-slide > div {margin: 0px 20px;}`}</style>
                {data.map((d)=>(
                    <div className={styles.card}>
                            <h2>{d.name}</h2>
                            <p>{d.review}</p>
                            <div className={styles.buttoncontainer}>
                                <button className={styles.buttonbook}>Book Now</button>
                            </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
  );
}