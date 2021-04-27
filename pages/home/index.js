import React from 'react'
import styles from '../../styles/Home.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import Balance from '../../src/components/module/Balance'
import Graph from '../../src/components/module/GraphHome'
import History from '../../src/components/module/HistoryHome'
import Navbar from '../../src/components/module/Navbar'
import Footer from '../../src/components/module/Footer'


function Home() {
    return (
        <>
            <Navbar />
            <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
                <div className={[["container"], styles["cont-home"]].join(' ')}>
                    <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                        <div className={[styles["col-3-resp"], ["col-3"]].join(' ')}>
                            <HomeTab />
                        </div>
                        <div className={[styles["col-9-resp"], ["col-9"]].join(" ")}>
                            <div className="row">
                                <Balance />
                            </div>
                            <div className={styles["btn-resp"]}>
                                <button className={styles["btn-resp-home"]}><img src="/arrow-up.png" alt="" /> Transfer</button>
                                <button className={styles["btn-resp-home"]}><img src="/plus.png" alt="" /> Top Up</button>
                            </div>
                            <div className={[["row"], styles["cont-row-graph"]].join(' ')}>
                                <div className={[styles["col-7-resp"], ["col-7"]].join(' ')}>
                                    <Graph />
                                </div>
                                <div className={[styles["col-5-resp"], ["col-5"]].join(" ")}>
                                    <History />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
