import styles from '../../../styles/Transfer.module.css'
import HomeTab from '../../../src/components/module/HomeTab'
import axios from 'axios'
import Navbar from '../../../src/components/module/Navbar'
import Footer from '../../../src/components/module/Footer'
import Button from '../../../src/components/base/button'

export default function TransferId({ user }) {
    const urlImage = process.env.URL_API_IMAGE

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
                                <img src={`${urlImage}${user.image}`} alt="" />
                                <div className={styles["trans-user-conf"]}>
                                    <h3>{user.username}</h3>
                                    <p>+ {user.phone_number}</p>
                                </div>
                            </div>
                            <div className={styles["trans-confirm-title"]}>
                                <h3>Details</h3>
                            </div>
                            <div className={styles["trans-confirm-card"]}>
                                <p>Amount</p>
                                <input type="number" placeholder="amount of transfer do you want" />
                            </div>
                            <div className={styles["trans-confirm-card"]}>
                                <p>Balance Left</p>
                                <h3></h3>
                            </div>
                            <div className={styles["trans-confirm-card"]}>
                                <p>Date & Time</p>
                                <h3>May 11, 2020 - 12.20</h3>
                            </div>
                            <div className={styles["trans-confirm-card"]}>
                                <p>Notes</p>
                                <h3>For buying some socks</h3>
                            </div>
                            <div className={styles["trans-conf-btn"]}>
                                <Button className="blue" title="Continue" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export const getServerSideProps = async (context) => {
    const api = process.env.URL_API_V1
    const res = await axios.get(`${api}users/find-byid/${context.params.id}`)
    const user = await res.data.data[0]

    return {
        props: {
            user
        }
    }
}