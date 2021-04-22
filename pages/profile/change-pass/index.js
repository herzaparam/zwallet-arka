import { useState, useEffect } from 'react'
import styles from '../../../styles/Transfer.module.css'
import HomeTab from '../../../src/components/module/HomeTab'
import Navbar from '../../../src/components/module/Navbar'
import Footer from '../../../src/components/module/Footer'
import axiosApiInstance from '../../../helpers/axios'
import Input from '../../../src/components/base/input'
import Button from '../../../src/components/base/button'


export default function PersonalInfo() {
    const urlImage = process.env.URL_API_IMAGE
    const api = process.env.URL_API_V1

    const [user, setUser] = useState([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axiosApiInstance.get(`${api}users/find-one`)
                .then((res) => {
                    const data = res.data.data[0]
                    setUser(data)
                })
                .catch((err) => {

                })
        }
    }, [])
    return (
        <>
            <Navbar />
            <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
                <div className={[["container"], styles["cont-home"]].join(' ')}>
                    <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                        <div className="col-3">
                            <HomeTab />
                        </div>
                        <div className={[["col-9"], styles["col-conf"]].join(" ")}>
                            <div className={styles["trans-confirm-title"]}>
                                <h3>Change Password</h3>
                                <p>You must enter your current password and then type your new password twice.</p>
                            </div>
                            <div className={[styles["trans-confirm-card"],styles["change-pass"]].join(' ')}>
                                <Input type="password" placeholder="Current Password"  />
                                <Input type="password" placeholder="New Password" />
                                <Input type="password" placeholder="Repeat New Password" />
                                <Button title="change password" className="grey"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
