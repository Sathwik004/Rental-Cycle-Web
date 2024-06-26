import styles from '../components/Profile.module.css';
import React, { PureComponent, useEffect, useState } from 'react';
import img from '../assets/logout.jpg';
import { useTable } from 'react-table';
import { getUserDetails, getUserTransactions, logout } from '../database/database';
import { useAppContext } from '../context/context';
import { useNavigate } from 'react-router';

const data = [
    { "datetime": "23", "sou": "AB1", "des": "Student Plaza", "dur": "10:21 min", "amt": "₹40" },
    { "datetime": "24", "sou": "AB2", "des": "Student Plaza", "dur": "30:21 min", "amt": "₹50" },
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
            getUserDetails(id).then((data) => setUserDetails(data[0]));
        } catch (error) {
            console.log('error in profile', error);
        }
        try {
            const { id } = user;
            getUserTransactions(id).then((data) => {setTransactions(data);console.log(data);});
        } catch (error) {
            console.log('error in profile', error);
        }


    }, [user]);

    const col = React.useMemo(() => [
        {
            Header: "Rental Time",
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
            Header: "Duration",
            accessor: "duration"
        },
        {
            Header: "Total Cost",
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
                                {headerGroup.headers.map((col, index) => (
                                    <th key={index} {...col.getHeaderProps()}>
                                        {col.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, rowIndex) => {
                            prepareRow(row);
                            return (
                                <tr key={rowIndex} {...row.getRowProps()}>
                                    {row.cells.map((cell, cellIndex) => {
                                        const value = cell.value;
                                        let cellClassName = '';
                                        
                                        if (cellIndex === 3) {
                                            cellClassName = parseFloat(value) < 11 ? styles.greenColumn : styles.redColumn;
                                        }
                                        
                                        return (
                                            <td key={cellIndex} {...cell.getCellProps()} className={cellClassName}>
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>


            </div>




        </>
    )
};

export default Profile