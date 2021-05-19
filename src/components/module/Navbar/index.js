import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import axiosApiInstances from '../../../../helpers/axios'

function Navbar() {
    const urlImage = process.env.URL_API_IMAGE
    const api = process.env.URL_API_V1

    const [authenticated, setAuthenticated] = useState(null)
    const [user, setUser] = useState([])

    useEffect(() => {
        setAuthenticated(localStorage.getItem("token"))
        if (localStorage.getItem('token')) {
            axiosApiInstances.get(`${api}users/find-one`)
                .then((res) => {
                    const data = res.data.data[0]
                    setUser(data)
                })
                .catch((err) => {

                })
        }
    }, []);

    if (!authenticated) {
        return (
            <nav className={[["navbar"], ["navbar-expand-lg"], ["navbar-light"], styles["nav-bar"]].join(' ')}>
                <Link href="/">
                    <h2 className={styles["logo-nav"]}>Zwallet</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    </ul>
                    <form className={[["form-inline"], ["my-2"], ["my-lg-0"]].join(' ')}>
                        <Link href="/register">
                            <button className={styles.blue} >Sign up</button>
                        </Link>
                        <Link href="/login">
                            <button className={styles.white} >Login</button>
                        </Link>
                    </form>
                </div>
            </nav>
        )
    }
    return (
        <nav className={[["navbar"], ["navbar-expand-lg"], ["navbar-light"], styles["nav-bar"]].join(' ')}>
            <Link href="/">
                <h2 className={styles["logo-nav"]}>Zwallet</h2>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                </ul>
                <form className={[["form-inline"], ["my-2"], ["my-lg-0"]].join(' ')}>
                    <div className={styles["profile-nav"]}>
                        <img src={`${urlImage}${user.image}`} alt="" />
                        <div className={styles["profile-sect"]}>
                            <h5>{user.username}</h5>
                            {user.phone_number ? <p>+{user.phone_number}</p> : <p>not set</p> }
                            
                        </div>
                        <div className={styles["pro-bell"]}>
                            <img src="/bell.png" alt="" />
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Navbar

