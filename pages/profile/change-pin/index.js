import { useState, useEffect } from 'react'
import styles from '../../../styles/Transfer.module.css'
import HomeTab from '../../../src/components/module/HomeTab'
import Navbar from '../../../src/components/module/Navbar'
import Footer from '../../../src/components/module/Footer'
import axiosApiInstance from '../../../helpers/axios'
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
                        <div className={[["col-3"], styles["col-3-resp"]].join(" ")}>
                            <HomeTab />
                        </div>
                        <div className={[["col-9"], styles["col-conf"]].join(" ")}>
                            <div className={styles["trans-confirm-title"]}>
                                <h3>Change Pin</h3>
                                <p>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
                            </div>
                            <div className={styles["trans-confirm-card"]}>
                                <div className={styles["passcode-wrapper"]}>
                                    <input id="codeBox1" type="number" maxlength="1" onkeyup="onKeyUpEvent(1, event)" onfocus="onFocusEvent(1)" />
                                    <input id="codeBox1" type="number" maxlength="2" onkeyup="onKeyUpEvent(2, event)" onfocus="onFocusEvent(2)" />
                                    <input id="codeBox1" type="number" maxlength="3" onkeyup="onKeyUpEvent(3, event)" onfocus="onFocusEvent(3)" />
                                    <input id="codeBox1" type="number" maxlength="4" onkeyup="onKeyUpEvent(4, event)" onfocus="onFocusEvent(4)" />
                                    <input id="codeBox1" type="number" maxlength="5" onkeyup="onKeyUpEvent(5, event)" onfocus="onFocusEvent(5)" />
                                    <input id="codeBox1" type="number" maxlength="6" onkeyup="onKeyUpEvent(6, event)" onfocus="onFocusEvent(6)" />
                                </div>
                                <div className={styles["pad-8"]}>
                                    <Button className="grey" title="Continue" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
