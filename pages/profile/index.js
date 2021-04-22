import React, { useState, useEffect } from 'react'
import styles from '../../styles/Profile.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import Navbar from '../../src/components/module/Navbar'
import Footer from '../../src/components/module/Footer'
import Link from 'next/link'
import axiosApiInstance from '../../helpers/axios'

function Profile() {
    const urlImage = process.env.URL_API_IMAGE
    const api = process.env.URL_API_V1

    const [user, setUser] = useState([])

    useEffect(()=>{ 
        if (localStorage.getItem('token')) {
            axiosApiInstance.get(`${api}users/find-one`)
                .then((res) => {
                    const data = res.data.data[0]
                    setUser(data)
                })
                .catch((err) => {

                })
        }
    },[])    

    return (
        <>
            <Navbar />
            <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
                <div className={[["container"], styles["cont-home"]].join(' ')}>
                    <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                        <div className="col-3">
                            <HomeTab />
                        </div>
                        <div className={[["col-9"], styles["col-profile"]].join(' ')}>
                            <img src={`${urlImage}${user.image}`} alt="" />
                            <div className={styles["btn-edit"]}>
                                <img src="/pencillogo.png" alt="" />
                                <button>edit</button>
                            </div>
                            <h2>{user.first_name} {user.last_name}</h2>
                            <p>+{user.phone_number}</p>
                            <Link href="/profile/personal-info">
                                <div className={styles["card-profile"]}>
                                    <h3>Personal Information</h3>
                                    <img src="/arrow-left.png" alt="" />
                                </div>
                            </Link>
                            <Link href="/profile/change-pass">
                                <div className={styles["card-profile"]}>
                                    <h3>Change Password</h3>
                                    <img src="/arrow-left.png" alt="" />
                                </div>
                            </Link>
                            <Link href="/profile/change-pin">
                                <div className={styles["card-profile"]}>
                                    <h3>Change PIN</h3>
                                    <img src="/arrow-left.png" alt="" />
                                </div>
                            </Link>
                            <div className={styles["card-profile"]}>
                                <h3>Log out</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile
