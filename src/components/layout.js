import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Layout.module.css'

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Zwallet</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={styles["container-fluid"]}>
                <main className={styles["main"]}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
