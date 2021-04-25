import { useState, useEffect } from 'react'
import styles from '../../../styles/Transfer.module.css'
import HomeTab from '../../../src/components/module/HomeTab'
import Navbar from '../../../src/components/module/Navbar'
import Footer from '../../../src/components/module/Footer'
import Input from '../../../src/components/base/input'
import Button from '../../../src/components/base/button'
import axios from 'axios'
import Swal from 'sweetalert2'
import axiosApiInstance from '../../../helpers/axios'
import { useRouter } from 'next/router'


export default function PersonalInfo() {
    const urlImage = process.env.URL_API_IMAGE
    const api = process.env.URL_API_V1
    const token = localStorage.getItem("token")
    const router = useRouter();
    
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams()
        params.append('email', user.email)
        params.append('password', user.password)
        params.append('token', token)

        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }

        if (user.password == user.confirmPassword) {
            axios.put(`${api}users/auth/reset-password`, params, config)
            .then((res) => {
                Swal.fire(
                    'Good job!',
                    'update password success!',
                    'success'
                )
                router.push("/profile")

            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'can not update profile right now!',
                })
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'make sure you type the same password',
            })
        }
        
    };

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
                            <div className={[styles["trans-confirm-card"], styles["change-pass"]].join(' ')}>
                                <Input name="email" type="text" placeholder="Current Password" onChange={handleChange} />
                                <Input name="password" type="password" placeholder="New Password" onChange={handleChange} />
                                <Input name="confirmPassword" type="password" placeholder="Repeat New Password" onChange={handleChange} />
                                <Button title="change password" className="grey" onClick={handleSubmit}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
