import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import Button from '../../src/components/base/button'
import Input from '../../src/components/base/input'
import axios from 'axios'
import Swal from 'sweetalert2'

function ResetPass() {
    const api = process.env.URL_API_V1;

    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${api}/users/auth/forgot-password`, { email: email })
        .then((res)=>{
            Swal.fire(
                'find email succed!',
                `${res.data.message}`,
                'success'
            )
        })
        .catch((err)=>{
            Swal.fire(
                'find email failed!',
                `please make sure your account`,
                'error'
            )
        })
    }
    const handleChange = (e) => {
        e.target.name = e.target.value
        setEmail(e.target.name)
    }

    return (
        <div className={[styles["row-resp"], ["row"]].join(' ')}>
            <div className={[styles["col-left"], ["col-7"]].join(' ')}>
                <div className={[["jumbotron"], ["jumbotron-fluid"], styles["jumbo-tron"]].join(' ')}>
                    <div className={[["container"], styles["cont-jumbo"]].join(' ')}>
                        <h3 className={styles["heading-white"]}>Zwallet</h3>
                        <img src="/twophone.png" alt="two phone" srcSet="" />
                        <h3 className={[["display-4"], styles["heading-white"]].join(' ')}>App That Covering Banking Needs.</h3>
                        <p className="lead">Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
                    </div>
                </div>
            </div>
            <div className={[styles["col-5-resp"], ["col-5"]].join(' ')}>
                <h2>Zwallet</h2>
                <div className={[["container"], styles["cont-side-right"]].join(' ')}>
                    <h3 className={styles["heading-black"]}>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h3>
                    <p>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                    <Input
                        label=""
                        name="email"
                        type="text"
                        placeholder="Enter you email"
                        onChange={handleChange}
                    />
                    <Button
                        className="grey"
                        title="Confirm"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default ResetPass
