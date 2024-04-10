import styles from '../components/Booking.module.css';
import img from '../assets/loginpageimg.gif';

const data1 = ['AB3', 'AB5', 'AB4','Library', 'AB2', 'Student Plaza','AB1', 'D-Block' ]
const time1=[1,2,3,4]

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
                <select className={styles.selection}>
                    <option className={styles.selection1}>{data1[0]}</option>
                    <option className={styles.selection1}>{data1[1]}</option>
                    <option className={styles.selection1}>{data1[2]}</option>
                    <option className={styles.selection1}>{data1[3]}</option>
                    <option className={styles.selection1}>{data1[4]}</option>
                    <option className={styles.selection1}>{data1[5]}</option>
                    <option className={styles.selection1}>{data1[6]}</option>
                    <option className={styles.selection1}>{data1[7]}</option>
                </select>
                <select className={styles.selection}>
                    <option className={styles.selection1}>{time1[0]}</option>
                    <option className={styles.selection1}>{time1[1]}</option>
                    <option className={styles.selection1}>{time1[2]}</option>
                    <option className={styles.selection1}>{time1[3]}</option>
                </select>
                <label className={styles.amount}>COST : <span>{}</span></label>
                <div className={styles.paying}>
                    <button type='submit'  className={styles.button1} >Pay</button>
                    <button type='button'  className={styles.button2} >Cancel</button>
                </div>
            </form>

       </div> 
    )
}

export default Booking