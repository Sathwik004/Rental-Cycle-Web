import styles from '../components/Profile.module.css';
import React, { PureComponent } from 'react';
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
        <div className={styles.profile}>
            <div className={styles.firstcol}>
                <div className={styles.name1}><div>NAME : </div> </div>  
                <div className={styles.loginid1}><div>LOGIN ID :  </div></div>
                <div className={styles.Balance}><div>BALANCE : </div></div>
            </div>
            <div>
                <span className={styles.money}>{profile_data[0].name}</span>
                <span className={styles.money}>{profile_data[0].value}</span>
                <span className={styles.money}>{profile_data[0].balance}</span>
            </div>
            <div>

            </div>
        </div>

        <div  className={styles.chart1}>
            <ResponsiveContainer className={styles.cont}>
            <AreaChart
                data={data2}
                margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="white" fill="lightgreen" />
            </AreaChart>
            </ResponsiveContainer>
        </div>

        </>
    )
};

export default Profile