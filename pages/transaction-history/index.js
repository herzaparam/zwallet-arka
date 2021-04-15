import React from 'react'
import styles from '../../styles/Home.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import History from '../../src/components/module/HistoryHome'


function TransactionHistory() {
    return (
        <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
            <div className={[["container"], styles["cont-home"]].join(' ')}>
                <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                    <div className="col-3">
                        <HomeTab />
                    </div>
                    <div className="col-9">
                        <History title="Transaction History"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TransactionHistory
