import { useState, useEffect } from 'react'
import styles from '../../../styles/Transfer.module.css'
import HomeTab from '../../../src/components/module/HomeTab'
import Navbar from '../../../src/components/module/Navbar'
import Footer from '../../../src/components/module/Footer'
import Button from '../../../src/components/base/button'
import axiosApiInstance from '../../../helpers/axios'
import Swal from 'sweetalert2'
import AddPhoneNumber from '../../../src/components/module/AddPhoneNumber'

export default function PersonalInfo() {
    const urlImage = process.env.URL_API_IMAGE;
    const api = process.env.URL_API_V1;

    const [user, setUser] = useState([]);
    const [phoneInput, setphoneInput] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axiosApiInstance.get(`${api}users/find-one`)
                .then((res) => {
                    const data = res.data.data[0]
                    setUser(data)
                })
                .catch((err) => {
                    console.log('tes');
                })
        }
    }, []);

    const deletePhone = () => {
        Swal.fire({
            title: 'Do you want to delete your phone number?',
            text: 'Warning: you need to add your new phone number to access transfer',
            showConfirmButton: false,
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: `Delete!`,
        }).then(async(result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isDenied) {
                axiosApiInstance.put(`${api}users/del/phonenumber`)
                await Swal.fire('phone number has been deleted!', 'please add your phone number!', '')
                location.reload();
            }
        })
    }
    const showInput = () =>{
        setphoneInput(true)
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
                        <div className={[["col-9"], styles["col-conf"]].join(" ")}>
                            {phoneInput == true ? 
                            <AddPhoneNumber/>: 
                            <>
                            <div className={styles["trans-confirm-title"]}>
                                <h3>We Got Your Personal Information</h3>
                            </div>
                            <div className={[styles["trans-confirm-card"], styles["conf-profile"]].join(' ')}>
                                <p>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>

                            </div>

                            <div className={styles["trans-confirm-card"]}>
                                <p>First Name</p>
                                <h3>{user.first_name}</h3>
                            </div>
                            <div className={styles["trans-confirm-card"]}>
                                <p>Last name</p>
                                <h3>{user.last_name}</h3>
                            </div>
                            <div className={styles["trans-confirm-card"]}>
                                <p>Verified Email</p>
                                <h3>{user.email}</h3>
                            </div>
                            <div className={[styles["trans-confirm-card"], styles["del-phone"]].join(' ')}>
                                {user.phone_number !== 0 ?
                                    <>
                                        <div className={styles["trans-confirm-card"]}>
                                            <p>Phone Number</p>
                                            <h3>+{user.phone_number}</h3>
                                        </div>
                                        <button onClick={deletePhone}>delete</button>
                                    </> :
                                    <>
                                    <div></div>
                                    <button className={styles["button-add"]} onClick={showInput}>add phone number</button>
                               </>
                                }
                            </div>
                            </>
                            }
                            
                            
                            
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
