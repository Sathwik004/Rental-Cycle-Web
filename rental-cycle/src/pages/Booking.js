import styles from '../components/Booking.module.css';
import img from '../assets/loginpageimg.gif';



function Booking() {
    
    return(
       <div className={styles.wholething}>
            <div className={styles.leftside}>
                <div className={styles.imgback}>
                    <img src={img} className={styles.img}></img>
                </div>
            </div>

            <form className={styles.right}>
                <label className={styles.title}>Booking Page </label>
                <input type='text' placeholder='Destination' className={styles.info} >
                </input>
                <input type='password' placeholder='Duration' className={styles.info} ></input>
                <div className={styles.paying}>
                    <button type='submit'  className={styles.button1} >Pay</button>
                    <button type='button'  className={styles.button2} >Cancel</button>
                </div>
            </form>

       </div> 
    )
}

export default Booking