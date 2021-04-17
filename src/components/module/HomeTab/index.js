import React from 'react'
import Link from 'next/link'
import styles from './HomeTab.module.css'

function HomeTab() {
    return (
        <div className={styles["home-tab"]}>
            <Link href="/home">
                <button><img src="/grid.png" alt="" />Dashboard</button>
            </Link>
            <Link href="/transfer">
                <button><img src="/arrow-up.png" alt="" />Transfer</button>
            </Link>
            <Link href="/top-up">
                <button><img src="/plus.png" alt="" />Top Up</button>
            </Link>
            <Link href="/profile">
                <button><img src="/userlogo.png" alt="" />Profile</button>
            </Link>
            <button className={styles["btn-tabs-home"]}><img src="/log-out.png" alt="" />Log out</button>
        </div>
    )
}

export default HomeTab
