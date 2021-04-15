import React from 'react'
import styles from '../../styles/Home.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import Balance from '../../src/components/module/Balance'
import Graph from '../../src/components/module/GraphHome'
import History from '../../src/components/module/HistoryHome'

function Home() {
    return (
        <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
            <div className={[["container"],styles["cont-home"]].join(' ')}>
                <div className={[["row"],styles["cont-row-home"]].join(' ')}>
                    <div className="col-3">
                        <HomeTab />
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <Balance />
                        </div>
                        <div className={[["row"],styles["cont-row-graph"]].join(' ')}>
                            <div className="col-7">
                                <Graph />
                            </div>
                            <div className="col-5">
                                <History />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
