import React, { useState, useEffect } from 'react'
import styles from '../../styles/Transfer.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import Link from 'next/link'
import axios from 'axios'
import Navbar from '../../src/components/module/Navbar'
import Footer from '../../src/components/module/Footer'
import axiosApiInstance from '../../helpers/axios'
import { Router } from 'next/router'

export default function Transfer() {
    const urlImage = process.env.URL_API_IMAGE
    const api = process.env.URL_API_V1

    const [text, setText] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        axiosApiInstance.get(`${api}users/find-all?page=1&perPage=5&keyword=${text}`)
            .then((res) => {
                const newData = res.data.data;
                setData(newData)
            })
            .catch((err) => {
                console.log(err);
            });

    }, [text])

    return (
        <>
            <Navbar />
            <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
                <div className={[["container"], styles["cont-home"]].join(' ')}>
                    <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                        <div className={[["col-3"],styles["col-3-resp"]].join(" ")}>
                            <HomeTab />
                        </div>
                        <div className={[["col-9"], styles["main-col"]].join(' ')}>
                            <h5>Search Receiver</h5>
                            <div className={styles["input-group"]}>
                                <div>
                                    <span className={styles["input-span"]}><img src="/search-bar.png" alt="" /></span>
                                </div>
                                <input type="text" placeholder="Search receiver here" name="username" onChange={(e) => setText(e.target.value)} />
                            </div>
                            {data.map((user) => {
                                return (
                                    <Link href={`/transfer/${user.id}`} key={user.id}>
                                        <div className={styles["trans-history"]}  >
                                            <div className={styles["item1"]}>
                                                <img src={`${urlImage}${user.image}`} alt="" />
                                            </div>
                                            <div className={styles["item2"]}>
                                                <h5>{user.username}</h5>
                                                <p>+{user.phone_number}</p>
                                            </div>
                                        </div>
                                    </ Link >
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


