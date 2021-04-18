import React, { useState, useEffect } from 'react'
import styles from '../../styles/Transfer.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import Link from 'next/link'
import axios from 'axios'
import Navbar from '../../src/components/module/Navbar'
import Footer from '../../src/components/module/Footer'

export default function Transfer({users}) {
    const urlImage = process.env.URL_API_IMAGE

    const [text, setText] = useState("")

    const handleChange = (e) =>{
        const dataNew = { ...text };
        dataNew[e.target.name] = e.target.value;
        setText(dataNew)
    }
     
    return (
        <>
        <Navbar />
        <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
            <div className={[["container"], styles["cont-home"]].join(' ')}>
                <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                    <div className="col-3">
                        <HomeTab />
                    </div>
                    <div className={[["col-9"], styles["main-col"]].join(' ')}>
                        <h5>Search Receiver</h5>
                        <div className={styles["input-group"]}>
                            <div>
                                <span className={styles["input-span"]}><img src="/search-bar.png" alt="" /></span>
                            </div>
                            <input type="text" placeholder="Search receiver here" name="username" onChange={handleChange}/>
                        </div>
                        {users.map((user) => {
                            return (
                            <Link href={`/transfer/${user.id}`} key={user.id}>
                            <div className={styles["trans-history"]} >
                                <div className={styles["item1"]}>
                                    <img src={`${urlImage}${user.image}`} alt="" />
                                </div>
                                <div className={styles["item2"]}>
                                    <h5>{user.username}</h5>
                                    <p>+{user.phone_number}</p>
                                </div>
                            </div>
                            </Link>
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

export const getStaticProps = async()=>{
        const api = process.env.URL_API_V1
        const res = await axios.get(`${api}users/find-all?page=1&perPage=5&keyword=`)
        const users = await res.data.data
       
    return {
        props : {
            users
        }
    }
}
