import styles from '../components/Profile.module.css';
import React from 'react';

profile_data=[
    {name: "Name", value:"John Doe"},
]


function Profile(){
    return(
        <>
        <div className={styles.profile}>
          <div className={styles.name1}>NAME : </div>  
          <div className={styles.loginid1}>LOGIN ID : </div>
          <div className={styles.Balance}>BALANCE : <span>{data[0].name}</span></div>

        </div>
        </>
    )
};

export default Profile