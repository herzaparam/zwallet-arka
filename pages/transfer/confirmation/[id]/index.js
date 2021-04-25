import styles from '../../../../styles/Transfer.module.css'
import { useEffect, useState } from 'react'
import HomeTab from '../../../../src/components/module/HomeTab'
import axios from 'axios'
import Navbar from '../../../../src/components/module/Navbar'
import Footer from '../../../../src/components/module/Footer'
import Button from '../../../../src/components/base/button'
import { useRouter } from 'next/router'
import axiosApiInstance from '../../../../helpers/axios'
import moment from 'moment'
import Swal from 'sweetalert2'
import Modals from '../../../../src/components/module/Modal'

export default function TransferId() {
    const urlImage = process.env.URL_API_IMAGE;
    const api = process.env.URL_API_V1;
    const router = useRouter();
    const idReceiver = router.query.id;

    const [authenticated, setAuthenticated] = useState(null)
    const [userSender, setUserSender] = useState([])
    const [userReceiver, setUserReceiver] = useState([])
    const [transfer, setTransfer] = useState({
        amount: 0,
        date: null,
        note: ""
    })

    useEffect(() => {
        setTransfer({
            amount: localStorage.getItem("amount"),
            date: localStorage.getItem("date"),
            note: localStorage.getItem("note")
        })
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
                                <h3>Transfer To</h3>
                            </div>
                            <div className={[styles["trans-confirm-card"], styles["conf-profile"]].join(' ')}>
                                <img src={`${urlImage}${userReceiver.image}`} alt="" />
                                <div className={styles["trans-user-conf"]}>
                                    <h3>{userReceiver.username}</h3>
                                    <p>+ {userReceiver.phone_number}</p>
                                </div>
                            </div>
                            <div className={styles["trans-confirm-title"]}>
                                <h3>Details</h3>
                            </div>
                            <div className={styles["trans-confirm-card"]}>
                                <p>Amount</p>
                                <h3>Rp. {transfer.amount}</h3>
                            </div>
                            <div className={styles["trans-confirm-card"]}>
                                <p>Balance Left</p>
                                <h3>{userSender.balance}</h3>
                            </div>
                            <div className={styles["trans-confirm-card"]}>
                                <p>Date & Time</p>
                                <h3>{moment(transfer.date).format('LL')} - {moment(transfer.date).format('LT')}</h3>
                            </div>
                            <div className={styles["trans-confirm-card"]}>
                                <p>Notes</p>
                                <h3>{transfer.note}</h3>
                            </div>
                            <div className={styles["trans-conf-btn"]}>
                                {/* <Button className="blue" title="Continue" onClick={submitTransfer} /> */}
                                <Modals onClick="openModal" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

