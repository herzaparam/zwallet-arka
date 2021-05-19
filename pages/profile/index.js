import React, { useState, useEffect } from 'react'
import styles from '../../styles/Profile.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import Navbar from '../../src/components/module/Navbar'
import Footer from '../../src/components/module/Footer'
import Link from 'next/link'
import axiosApiInstance from '../../helpers/axios'
import Input from '../../src/components/base/input'
import Swal from 'sweetalert2'
import axios from 'axios'

function Profile() {
    const urlImage = process.env.URL_API_IMAGE
    const api = process.env.URL_API_V1

    const [user, setUser] = useState([])
    const [update, setUpdate] = useState({
        username: "",
        image: null
    })

    const [show, setShow] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axiosApiInstance.get(`${api}users/find-one`)
                .then((res) => {
                    const data = res.data.data[0]
                    setUser(data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, []);

    const handleChange = (e) => {
        setUpdate({
            ...update,
            [e.target.name]: e.target.value
        })
    };
    const handleChangeImage = (e) => {
        setUpdate({
            ...update,
            image: e.target.files[0]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("username", update.username ? update.username : user.username)
        formData.append("image", update.image)
        axios.put(`${api}users/update-profile/${user.id}`, formData)
            .then(async (res) => {
                await Swal.fire(
                    'Good job!',
                    'update profile success!',
                    'success'
                )
                setUpdate({
                    username: "",
                    image: null
                })
                setShow(false)
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                })
            })
    }

    return (
        <>
            <Navbar />
            <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
                <div className={[["container"], styles["cont-home"]].join(' ')}>
                    <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                        <div className={[["col-3"], styles["col-3-resp"]].join(" ")}>
                            <HomeTab />
                        </div>
                        <div className={[["col-9"], styles["col-profile"]].join(' ')}>
                            
                            {show == false ?
                                <>
                                    <img src={`${urlImage}${user.image}`} alt="" />
                                    <div className={styles["btn-edit"]}>
                                        <img src="/pencillogo.png" alt="" />
                                        <button onClick={e => setShow(true)}>edit</button>
                                    </div>
                                    <h2>{user.username}</h2>
                                    {user.phone_number ? <p>+{user.phone_number}</p> : <p>not set</p>}
                                </>
                                :
                                <>
                                    <label className={styles.label}>
                                        <img src={`${urlImage}${user.image}`} alt="" />
                                        <input className={styles.disp} type="file" onChange={(e) => handleChangeImage(e)} />
                                    </label>
                                    <div className={styles["btn-edit"]}>
                                        <img src="/pencillogo.png" alt="" />
                                        <button onClick={handleSubmit}>edit</button>
                                    </div>
                                    <input name="username" className={styles.usernameInput} type="text" value={update.username} onChange={(e) => handleChange(e)} />
                                    {user.phone_number ? <p>+{user.phone_number}</p> : <p>not set</p>}
                                </>
                            }
                            <Link href={`/profile/personal-info/${user.id}`}>
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
