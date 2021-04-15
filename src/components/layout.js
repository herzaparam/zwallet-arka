import React from 'react'
import styles from '../../styles/Layout.module.css'

function Layout({children}) {
    return (
        <>
        <div className={styles["container-fluid"]}>
            <main className={styles["main"]}>
                {children}
                </main>
        </div>
        </>
    )
}

export default Layout
