import React from 'react'
import styles from '../../styles/Login.module.css'
import Button from '../../src/components/base/button'
import Input from '../../src/components/base/input'

function SignUp() {
    return (
        <div className="row">
            <div className="col-7">
                <div className={[["jumbotron"], ["jumbotron-fluid"], styles["jumbo-tron"]].join(' ')}>
                    <div className={[["container"], styles["cont-jumbo"]].join(' ')}>
                        <h3 className={styles["heading-white"]}>Zwallet</h3>
                        <img src="/twophone.png" alt="two phone" srcSet="" />
                        <h3 className={[["display-4"], styles["heading-white"]].join(' ')}>App That Covering Banking Needs.</h3>
                        <p className="lead">Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
                    </div>
                </div>
            </div>
            <div className="col-5">
                <div className={[["container"],styles["cont-side-right"]].join(' ')}>
                    <h3 className={styles["heading-black"]}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
                    <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                    <Input label="" nameInput="username" type="text" placeholder="Enter your username"/>
                    <Input label="" nameInput="email" type="text" placeholder="Enter your e-mail"/>
                    <Input label="" nameInput="password" type="password"placeholder="Enter you password"/>
                    <p className={styles["forg-pass"]}>Forgot Password?</p>
                    <Button styling="grey" title="Sign Up" />
                    <p className={styles["create-acc"]}>Already have an account? Let's <a href="">Login</a></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
