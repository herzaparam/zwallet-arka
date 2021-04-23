import React,{useState} from 'react'
import styles from './AddPhone.module.css'
import Input from '../../base/input'
import Button from '../../base/button'
import axiosApiInstance from '../../../../helpers/axios'
import Swal from 'sweetalert2'

export default function AddPhoneNumber() {
    const api = process.env.URL_API_V1;

    const [phoneNumber, setPhoneNumber] = useState(null)
    
    const inputNumber = () => {
        axiosApiInstance.put(`${api}users/insert/phonenumber`, phoneNumber)
        .then((res)=>{
            Swal.fire(
                'congratulation!',
                'phone number succesfully updated!',
                'success'
              )
              location.reload();
        })
        .catch((err)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        })
    }
    const handleChange = (e) =>{
        setPhoneNumber({
            number: e.target.value
        })
    }

    return (
        <>
            <div className={styles["trans-confirm-title"]}>
                <h3>Add Phone Number</h3>
            </div>
            <div className={[styles["trans-confirm-card"], styles["conf-profile"]].join(' ')}>
                <p>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>

            </div>
            <div className={styles["input-group"]}>
                <div>
                    <span className={styles["input-span"]}><img src="/phoneicon.png" alt="" /></span>
                </div>
                <div>
                    <span className={styles["input-span"]}>+62 </span>
                </div>
                <input type="number" placeholder="enter your phone number here" onChange={handleChange} />
            </div>
            <div className={styles.btn}>
                <Button className="grey" title="Add Phone Number" onClick={inputNumber} />
            </div>
        </>
    )
}
