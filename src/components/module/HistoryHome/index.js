import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './History.module.css'
import axiosApiInstance from '../../../../helpers/axios'
import axios from 'axios'


function HistoryHome() {
    const urlImage = process.env.URL_API_IMAGE
    const api = process.env.URL_API_V1

    const [userSender, setUserSender] = useState([])
    const [history, setUserHistory] = useState([])

    useEffect(() => {

        if (localStorage.getItem('token')) {
            axiosApiInstance.get(`${api}users/find-one`)
                .then((res) => {
                    const data = res.data.data[0]
                    setUserSender(data)
                    axios.get(`${api}transaction/history?page=1&perPage=5&idSender=${userSender.id}`)
                        .then((res) => {
                            const dataHistory = res.data.data
                            setUserHistory(dataHistory)
                        })
                        .catch((err) => {
                            alert('error history')
                        })
                })
                .catch((err) => {
                    alert("error find one")
                })
        }
    }, [])

    return (
        <div className={styles["transaction"]}>
            <div className={styles["trans-history-title"]}>
                <h5>Transaction History</h5>
                <Link href="/transaction-history">
                    <a >See all</a>
                </Link>
            </div>
            {history.map((item) => {
                return (
                    <div className={styles["trans-history"]} key={item.historyID}>
                        <div className={styles["item1"]}>
                            <img src={`${urlImage}${item.image}`} alt="" />
                        </div>
                        <div className={styles["item2"]}>
                            <h5>{item.username}</h5>
                            <p>Transfer</p>
                        </div>
                        {item.id_sender == userSender.id ?
                            <h4 className={[styles["item3"], styles["red"]].join(' ')}>-Rp. {item.transfer}</h4>
                            :
                            <h4 className={styles["item3"]}>+Rp. {item.transfer}</h4> 
                        }

                    </div>
                )
            })}
        </div>
    )
}

export default HistoryHome
