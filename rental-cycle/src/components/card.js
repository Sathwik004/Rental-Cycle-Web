import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Homepage.module.css';


export default function Card({data}) {
    console.log('data in card',data); 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        
    };

  return (
    <div className={styles.cardcontainer}>
        <div className={styles.cardstarts}>
            {data.map((item)=>(
                    <div className={styles.card}>
                            <h2>{item.location_name}</h2>
                            <p>{item.lot_count} cycles available</p>
                            
                                <button className={styles.bookbutton}>Book Now</button>
                    </div>
                ))}
        </div>
                
        </div>
  );
}