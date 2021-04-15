import React from 'react'
import styles from '../../styles/CreatePin.module.css'
import Button from '../../src/components/base/button'
import Input from '../../src/components/base/input'

function CreatePin() {
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
                    <h3 className={styles["heading-black"]}>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h3>
                    <p>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
                    <div className={styles["passcode-wrapper"]}>
                    <input id="codeBox1" type="number" maxlength="1" onkeyup="onKeyUpEvent(1, event)" onfocus="onFocusEvent(1)" />
                    <input id="codeBox1" type="number" maxlength="2" onkeyup="onKeyUpEvent(2, event)" onfocus="onFocusEvent(2)" />
                    <input id="codeBox1" type="number" maxlength="3" onkeyup="onKeyUpEvent(3, event)" onfocus="onFocusEvent(3)" />
                    <input id="codeBox1" type="number" maxlength="4" onkeyup="onKeyUpEvent(4, event)" onfocus="onFocusEvent(4)" />
                    <input id="codeBox1" type="number" maxlength="5" onkeyup="onKeyUpEvent(5, event)" onfocus="onFocusEvent(5)" />
                    <input id="codeBox1" type="number" maxlength="6" onkeyup="onKeyUpEvent(6, event)" onfocus="onFocusEvent(6)" />
                    </div>
                    <Button styling="grey" title="Confirm" />
                </div>
            </div>
        </div>
    )
}

export default CreatePin
