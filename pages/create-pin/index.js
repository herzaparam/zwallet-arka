import React, { useState } from 'react'
import styles from '../../styles/CreatePin.module.css'
import Button from '../../src/components/base/button'
import OtpInput from 'react-otp-input'
import axiosApiInstance from '../../helpers/axios';
import { Router, useRouter } from 'next/router'
import Swal from 'sweetalert2'

const focusStyle = {
    outlineColor: '#6379F4',
};
const containerStyle = {
    justifyContent: 'space-evenly',
    margin: '3em 0'
};
const inputStyle = {
    width: '40px',
    height: '50px',
    borderRadius: '10px',
    boxShadow: '0px 10px 75px rgba(147, 147, 147, 0.1)',
    border: '1px solid rgba(169, 169, 169, 0.6)',
    fontSize: '28px'
};
const errorStyle = {
    border: '1px solid red'
}
const customStyles = {
    content: {
        width: '35%',
        height: '55%',
        borderRadius: '24px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function CreatePin() {
    const api = process.env.URL_API_V1;
    const router = useRouter();

    const [otp, setOtp] = useState(null)
    const [hasErrored, setHasErrored] = useState(false)

    const handleChange = otp => setOtp(otp);


    const handleConfirm = (e) => {
        e.preventDefault();
        const params = new URLSearchParams()
        params.append('pin', otp)
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axiosApiInstance.put(`${api}users/insert-pin`, params, config)
            .then(async (res) => {
                await Swal.fire(
                    'insert pin succes!',
                    `${res.data.message}`,
                    'success'
                )
                router.push("/home")
            })
            .catch((err) => {
                Swal.fire(
                    'insert pin failed!',
                    `please make sure your pin`,
                    'error'
                )
            })
    }

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
                <div className={[["container"], styles["cont-side-right"]].join(' ')}>
                    <h3 className={styles["heading-black"]}>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h3>
                    <p>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
                    <div className={styles["passcode-wrapper"]}>
                        <OtpInput
                            value={otp}
                            onChange={handleChange}
                            numInputs={6}
                            separator={<span>{'\xa0'}</span>}
                            isInputNum={true}
                            isInputSecure={true}
                            focusStyle={focusStyle}
                            containerStyle={containerStyle}
                            inputStyle={inputStyle}
                            hasErrored={hasErrored}
                            errorStyle={errorStyle}
                        />
                    </div>
                    <Button className="grey" title="Confirm" onClick={handleConfirm} />
                </div>
            </div>
        </div>
    )
}

export default CreatePin
