import React from 'react'
import styles from '../../styles/Profile.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import Navbar from '../../src/components/module/Navbar'
import Footer from '../../src/components/module/Footer'

function Profile() {
    return (
        <>
            <Navbar />
            <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
                <div className={[["container"], styles["cont-home"]].join(' ')}>
                    <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                        <div className="col-3">
                            <HomeTab />
                        </div>
                        <div className={[["col-9"], styles["col-profile"]].join(' ')}>
                            <img src="/user.png" alt="" />
                            <div className={styles["btn-edit"]}>
                            <img src="/pencillogo.png" alt=""/>
                            <button>edit</button>
                            </div>
                            <h2>Rober chandler</h2>
                            <p>+9018209381</p>
                            <div className={styles["card-profile"]}>
                                <h3>Personal Information</h3>
                                <img src="/arrow-left.png" alt="" />
                            </div>
                            <div className={styles["card-profile"]}>
                                <h3>Change Password</h3>
                                <img src="/arrow-left.png" alt="" />
                            </div>
                            <div className={styles["card-profile"]}>
                                <h3>Change PIN</h3>
                                <img src="/arrow-left.png" alt="" />
                            </div>
                            <div className={styles["card-profile"]}>
                                <h3>Log out</h3>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile
