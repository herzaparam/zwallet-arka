import React from 'react'
import styles from './HomeTab.module.css'

function HomeTab() {
    return (
        <div className={styles["home-tab"]}>
            <button><img src="/grid.png" alt="" /> Dashboard</button>
            <button><img src="/arrow-up.png" alt="" /> Transfer</button>
            <button><img src="/plus.png" alt="" /> Top Up</button>
            <button><img src="/userlogo.png" alt="" /> Profile</button>
            <button className={styles["btn-tabs-home"]}><img src="/log-out.png" alt="" /> Log out</button>
        </div>
    )
}

export default HomeTab
