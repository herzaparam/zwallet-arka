import React from 'react'
import styles from './Balance.module.css'

function Balance() {
    return (
        <div className={styles["balance-home"]}>
            <div className={styles["balance"]}>
                <p>Balance</p>
                <h3>Rp.120.000</h3>
                <p>0813123456</p>
            </div>
            <div className={styles["btn-balance"]}>
                <button><img src="/arrow-up.png" alt="" /> Transfer</button>
                <button><img src="/plus.png" alt="" /> Top Up</button>
            </div>
        </div>
    )
}

export default Balance
