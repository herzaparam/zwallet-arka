import React, { useEffect, useState } from 'react'
import styles from './Balance.module.css'
import axiosApiInstances from '../../../../helpers/axios'

function Balance() {
    
    const api = process.env.URL_API_V1
    const [user, setUser] = useState([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axiosApiInstances.get(`${api}users/find-one`)
                .then((res) => {
                    const data = res.data.data[0]
                    setUser(data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, []);

    return (
        <div className={styles["balance-home"]}>
            <div className={styles["balance"]}>
                <p>Balance</p>
                <h3>Rp.{user.balance}</h3>
                <p>+{user.phone_number}</p>
            </div>
            <div className={styles["btn-balance"]}>
                <button><img src="/arrow-up.png" alt="" /> Transfer</button>
                <button><img src="/plus.png" alt="" /> Top Up</button>
            </div>
        </div>
    )
}

export default Balance
