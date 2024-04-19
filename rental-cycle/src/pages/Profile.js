import styles from '../components/Profile.module.css';
import React, { PureComponent } from 'react';
import img from '../assets/logout.jpg';
import { useTable} from 'react-table';

const data = [
    {"datetime":"23" , "sou": "AB1", "des":"Student Plaza", "dur": "10:21 min", "amt": "₹40"},
    {"datetime":"24" , "sou": "AB2", "des":"Student Plaza", "dur": "10:21 min", "amt": "₹50"},
    {"datetime":"25" , "sou": "AB3", "des":"Student Plaza", "dur": "10:21 min", "amt": "₹60"},
    {"datetime":"26" , "sou": "AB4", "des":"Student Plaza", "dur": "10:21 min", "amt": "₹70"},
    {"datetime":"27" , "sou": "AB5", "des":"Student Plaza", "dur": "10:21 min", "amt": "₹80"},
    {"datetime":"23" , "sou": "AB1", "des":"Student Plaza", "dur": "10:21 min", "amt": "₹40"},
    {"datetime":"24" , "sou": "AB2", "des":"Student Plaza", "dur": "10:21 min", "amt": "₹50"},
    {"datetime":"25" , "sou": "AB3", "des":"Student Plaza", "dur": "10:21 min", "amt": "₹60"},
    {"datetime":"26" , "sou": "AB4", "des":"Student Plaza", "dur": "10:21 min", "amt": "₹70"},
    {"datetime":"27" , "sou": "AB5", "des":"Student Plaza", "dur": "10:21 min", "amt": "₹80"}
]


function Profile(){
    const data1 = React.useMemo(() => data, []);
    const col = React.useMemo(()=> [
        {
            Header: "Time Stamp",
            accessor: "datetime"
        },
        {
            Header: "Source",
            accessor: "sou"
        },
        {
            Header: "Destination",
            accessor: "des"
        },
        {
            Header: "Duration",
            accessor: "dur"
        },
        {
            Header: "Amount",
            accessor: "amt"
        },
    ],
    []
);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow}=useTable({columns: col, data: data1});
    return(
        <>
          <header>
                <nav className={styles.navdiv}>
                    <div className={styles.title}>Cyclehub</div>
                    <div>
                        <button className={styles.navbutton} >Home</button>
                        <button className={styles.navbutton} ><img src={img} className={styles.imgicon}></img>Logout</button>
                    </div>
                </nav>
            </header>

            <div className={styles.midpart}>
                <div className={styles.box1}>
                    <div className={styles.username1}>USER NAME</div>
                    <div className={styles.email1}>darshannakshatri@gmail.com</div>
                    <div className={styles.phDOB}>
                        <div>Phone No</div>
                        <div>Date of Birth</div>
                    </div>
                    <div className={styles.phDOB1}>
                        <div>+9988766554</div>
                        <div>30-02-2004</div>
                    </div>
                </div>
                <div className={styles.box2}>
                  <div className={styles.balance1}>Balance</div>
                  <div className={styles.money1}>₹ 2000.00</div>
                </div>

            </div>

            <div className={styles.container}>
                    <table {...getTableProps()}>
                        <thead className={styles.tabletitle}>
                            {headerGroups.map((headerGroup)=>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((col)=>(
                                    <th {...col.getHeaderProps()}>
                                        {col.render("Header")}
                                    </th>
                                ))}
                            </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row)
                                return(
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) =>(
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