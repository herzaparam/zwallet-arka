import React from 'react'
import styles from '../../styles/Home.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import Navbar from '../../src/components/module/Navbar'
import Footer from '../../src/components/module/Footer'


function TopUp() {
    return (
        <>
        <Navbar />
        <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
            <div className={[["container"], styles["cont-home"]].join(' ')}>
                <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                <div className={[["col-3"],styles["col-3-resp"]].join(" ")}>
                        <HomeTab />
                    </div>
                    <div className={[["col-9"],styles["column-topup"]].join(' ')}>
                        <div className={styles["topup-card-title"]}>
                            <h3>How To Top Up</h3>
                        </div>
                        <div className={styles["topup-card-content"]}>
                            <h4><span className={styles["blue"]}>1.</span> Go to the nearest ATM or you can use E-Banking.</h4>
                        </div>
                        <div className={styles["topup-card-content"]}>
                            <h4><span className={styles["blue"]}>2.</span> Type your security number on the ATM or E-Banking.</h4>
                        </div>
                        <div className={styles["topup-card-content"]}>
                            <h4><span className={styles["blue"]}>3.</span> Select “Transfer” in the menu</h4>
                        </div>
                        <div className={styles["topup-card-content"]}>
                            <h4><span className={styles["blue"]}>4.</span> Type the virtual account number that we provide you at the top.</h4>
                        </div>
                        <div className={styles["topup-card-content"]}>
                            <h4><span className={styles["blue"]}>5.</span> Type the amount of the money you want to top up.</h4>
                        </div>
                        <div className={styles["topup-card-content"]}>
                            <h4><span className={styles["blue"]}>6.</span> Read the summary details</h4>
                        </div>
                        <div className={styles["topup-card-content"]}>
                            <h4><span className={styles["blue"]}>7.</span> Press transfer / top up</h4>
                        </div>
                        <div className={styles["topup-card-content"]}>
                            <h4><span className={styles["blue"]}>8.</span> You can see your money in Zwallet within 3 hours.</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Footer />
        </>
    )
}

export default TopUp
