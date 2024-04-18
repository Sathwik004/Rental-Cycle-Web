import styles from '../components/Profile.module.css';
import React, { PureComponent } from 'react';
import img from '../assets/logout.jpg';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




const profile_data=[
    {name: "Darshan", value:"darshannakshatri@gmail.com", balance:3000},
];
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];



function Profile(){
    const data2 = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return(
        <>
          <header>
                <nav className={styles.navdiv}>
                    <div className={styles.title}>CYCLE HUB</div>
                    <div>
                        <button className={styles.navbutton} >Home</button>
                        <button className={styles.navbutton} ><img src={img} className={styles.imgicon}></img>Logout</button>
                    </div>
                </nav>
            </header>
       

        

        </>
    )
};

export default Profile