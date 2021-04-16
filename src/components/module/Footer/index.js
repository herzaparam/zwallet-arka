import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles["footer-loggedin"]}>
            <div className={styles["sect-1"]}>
                <p>2020 Zwallet. All right reserved.</p>
            </div>
            <div className={styles["sect-2-3"]}>
            <div className={styles["sect-2"]}>
                <p>+62 5637 8882 9901</p>
            </div>
            <div className={styles["sect-3"]}>
                <p>contact@zwallet.com</p>
            </div>
            </div>
        </div>
    )
}

export default Footer
