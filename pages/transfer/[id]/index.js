import React, { useState, useEffect } from 'react'
import styles from '../../../styles/Transfer.module.css'
import Navbar from '../../../src/components/module/Navbar'
import Footer from '../../../src/components/module/Footer'
import HomeTab from '../../../src/components/module/HomeTab'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import axiosApiInstance from '../../../helpers/axios'

export default function TransferId() {
    const urlImage = process.env.URL_API_IMAGE;
    const api = process.env.URL_API_V1;
    const router = useRouter();
    const idReceiver = router.query.id

    const [authenticated, setAuthenticated] = useState(null)
    const [userSender, setUserSender] = useState([])
    const [userReceiver, setUserReceiver] = useState([])
    const [transfer, setTransfer] = useState({
        amount: 0,
        date: null,
        note: ""
    })

    useEffect(() => {
        setAuthenticated(localStorage.getItem("token"))
        if (localStorage.getItem('token')) {
            axiosApiInstance.get(`${api}users/find-one`)
                .then((res) => {
                    const data = res.data.data[0]
                    setUserSender(data)
                })
                .catch((err) => {
                    alert('something went wrong with id sender token')
                })
        };
        axios.get(`${api}users/find-byid/${idReceiver}`)
            .then((result) => {
                setUserReceiver(result.data.data[0])
            })
            .catch((err) => {
                alert('something went wrong with id receiever')
            });
    }, [])

    const handleChange = (e) => {
        setTransfer({
            ...transfer,
            date: new Date(),
            [e.target.name]: e.target.value
        })

    }

    const handleContinue = () => {
        localStorage.setItem('amount', transfer.amount);
        localStorage.setItem('date', transfer.date);
        localStorage.setItem('note', transfer.note);
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
                            <h5>Transfer Money</h5>
                            <div className={styles["trans-history"]} >
                                <div className={styles["item1"]}>
                                    <img src={`${urlImage}${userReceiver.image}`} alt="" />
                                </div>
                                <div className={styles["item2"]}>
                                    <h5>{userReceiver.username}</h5>
                                    <p>+{userReceiver.phone_number}</p>
                                </div>
                            </div>
                            <div className={styles["inpt"]}>
                                <p>Type the amount you want to transfer and then<br /> press continue to the next steps.</p>
                                <div className={styles["inpt-sect"]}>
                                    <input type="number" name="amount" placeholder="0,00" onChange={handleChange} />
                                    <h3>Rp.{userSender.balance}</h3>
                                    <input type="text" name="note" placeholder="input note here" onChange={handleChange} />
                                </div>
                                <Link href={`/transfer/confirmation/${userReceiver.id}`}>
                                    <button onClick={handleContinue}>Continue</button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>



    )
}
