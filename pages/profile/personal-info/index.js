import {useState, useEffect} from 'react'
import styles from '../../../styles/Transfer.module.css'
import HomeTab from '../../../src/components/module/HomeTab'
import Navbar from '../../../src/components/module/Navbar'
import Footer from '../../../src/components/module/Footer'
import Button from '../../../src/components/base/button'
import axiosApiInstance from '../../../helpers/axios'

export default function PersonalInfo() {
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
                    <div className={[["col-9"], styles["col-conf"]].join(" ")}>
                        <div className={styles["trans-confirm-title"]}>
                            <h3>We Got Your Personal Information</h3>
                        </div>
                        <div className={[styles["trans-confirm-card"], styles["conf-profile"]].join(' ')}>
                            <p>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                        
                        </div>
                        
                        <div className={styles["trans-confirm-card"]}>
                            <p>First Name</p>
                            <h3>{user.first_name}</h3>
                        </div>
                        <div className={styles["trans-confirm-card"]}>
                            <p>Last name</p>
                            <h3>{user.last_name}</h3>
                        </div>
                        <div className={styles["trans-confirm-card"]}>
                            <p>Verified Email</p>
                            <h3>{user.email}</h3>
                        </div>
                        <div className={styles["trans-confirm-card"]}>
                            <p>Phone Number</p>
                            <h3>+{user.phone_number}</h3>
                        </div>
                        <div className={styles["trans-conf-btn"]}>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Footer />
    </>
    )
}
