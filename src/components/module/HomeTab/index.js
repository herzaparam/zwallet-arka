import {useState} from 'react'
import Link from 'next/link'
import styles from './HomeTab.module.css'
import {useRouter} from 'next/router'

function HomeTab() {
    const router = useRouter();
    console.log();
    const handleLogout = (e) =>{
        e.preventDefault();
        localStorage.removeItem('token');
        router.push("/")
    }

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
            <button className={styles["btn-tabs-home"]} onClick={handleLogout}><img src="/log-out.png" alt="" />Log out</button>
        </div>
    )
}

export default HomeTab
