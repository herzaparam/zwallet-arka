import React from 'react'
import styles from '../../styles/Login.module.css'
import Button from '../../src/components/base/button'
import Input from '../../src/components/base/input'

function ResetPass() {
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
                        nameInput="password"
                        type="password"
                        placeholder="Enter you password"
                    />
                    <Button
                        className="grey"
                        title="Confirm"
                    />
                </div>
            </div>
        </div>
    )
}

export default ResetPass
