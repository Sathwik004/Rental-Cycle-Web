import styles from '../components/Profile.module.css';
import React, { PureComponent, useEffect, useState } from 'react';
import img from '../assets/logout.jpg';
import { useTable } from 'react-table';
import { getUserDetails, getUserTransactions, logout } from '../database/database';
import { useAppContext } from '../context/context';
import { useNavigate } from 'react-router';

const data = [
    { "datetime": "23", "sou": "AB1", "des": "Student Plaza", "dur": "10:21 min", "amt": "₹40" },
    { "datetime": "24", "sou": "AB2", "des": "Student Plaza", "dur": "10:21 min", "amt": "₹50" },
    { "datetime": "25", "sou": "AB3", "des": "Student Plaza", "dur": "10:21 min", "amt": "₹60" },
    { "datetime": "26", "sou": "AB4", "des": "Student Plaza", "dur": "10:21 min", "amt": "₹70" },
    { "datetime": "27", "sou": "AB5", "des": "Student Plaza", "dur": "10:21 min", "amt": "₹80" },
    { "datetime": "23", "sou": "AB1", "des": "Student Plaza", "dur": "10:21 min", "amt": "₹40" },
    { "datetime": "24", "sou": "AB2", "des": "Student Plaza", "dur": "10:21 min", "amt": "₹50" },
    { "datetime": "25", "sou": "AB3", "des": "Student Plaza", "dur": "10:21 min", "amt": "₹60" },
    { "datetime": "26", "sou": "AB4", "des": "Student Plaza", "dur": "10:21 min", "amt": "₹70" },
    { "datetime": "27", "sou": "AB5", "des": "Student Plaza", "dur": "10:21 min", "amt": "₹80" }
]


function Profile() {
    const [userDetails, setUserDetails] = useState({});
    const [transactions, setTransactions] = useState([]);
    const { user } = useAppContext();
    const navigate = useNavigate();

    
    useEffect(() => {
        
        try {
            const { id } = user;
            console.log(id);
            getUserDetails(id).then((data) => setUserDetails(data[0])).then(() => console.log('In profile',userDetails));
        } catch (error) {
            console.log('error in profile', error);
        }
        try {
            const { id } = user;
            getUserTransactions(id).then((data) => {console.log(data);setTransactions(data);});
        } catch (error) {
            console.log('error in profile', error);
        }


    }, [user]);


    const data1 = React.useMemo(() => data, []);
    const col = React.useMemo(() => [
        {
            Header: "Time Stamp",
            accessor: "rentaltime"
        },
        {
            Header: "Source",
            accessor: "source"
        },
        {
            Header: "Destination",
            accessor: "destination"
        },
        {
            Header: "Amount",
            accessor: "totalcost"
        },
    ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns: col, data: transactions });
    return (
        <>
            <header>
                <nav className={styles.navdiv}>
                    <div className={styles.title}>Cyclehub</div>
                    <div>
                        <button className={styles.navbutton} onClick={()=>navigate('/home')}>Home</button>
                        <button className={styles.navbutton} onClick={logout}><img src={img} className={styles.imgicon}></img>Logout</button>
                    </div>
                </nav>
            </header>

            <div className={styles.midpart}>
                <div className={styles.box1}>
                    <div className={styles.username1}>{userDetails.name}</div>
                    <div className={styles.email1}>{userDetails.email}</div>
                    <div className={styles.phDOB}>
                        <div>Phone No</div>
                        <div>Date of Birth</div>
                    </div>
                    <div className={styles.phDOB1}>
                        <div>{userDetails.phone}</div>
                        <div>{userDetails.dob}</div>
                    </div>
                </div>
                <div className={styles.box2}>
                    <div className={styles.balance1}>Balance</div>
                    <div className={styles.money1}>₹ {userDetails.balance}</div>
                </div>

            </div>

            <div className={styles.container}>
                <table {...getTableProps()}>
                    <thead className={styles.tabletitle}>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((col) => (
                                    <th {...col.getHeaderProps()}>
                                        {col.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {data.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    ))}

                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </div>




        </>
    )
};

export default Profile