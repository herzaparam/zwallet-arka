import React from 'react'
import Link from 'next/link'
import styles from './History.module.css'

function HistoryHome({ title }) {
    return (
        <div className={styles["transaction"]}>
            <div className={styles["trans-history-title"]}>
                <h5>{title}</h5>
                <Link href="/transaction-history">
                    <a >See all</a>
                </Link>
            </div>
            <div className={styles["trans-history"]}>
                <div className={styles["item1"]}>
                    <img src="/user.png" alt="" />
                </div>
                <div className={styles["item2"]}>
                    <h5>Samuel Suhi</h5>
                    <p>Transfer</p>
                </div>
                <h4 className={styles["item3"]}>+50.000</h4>
            </div>



        </div>
    )
}

export default HistoryHome
