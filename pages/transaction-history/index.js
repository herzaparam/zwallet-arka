import React, { useEffect,useState } from 'react'
import styles from '../../styles/Home.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import History from '../../src/components/module/HistoryHome'



export default function TransactionHistory({userSender}) {
   console.log(userSender);
    return (
        <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
            <div className={[["container"], styles["cont-home"]].join(' ')}>
                <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                    <div className="col-3">
                        <HomeTab />
                    </div>
                    <div className="col-9">
                    <div className={styles["trans-history"]} key={item.historyID}>
                        <div className={styles["item1"]}>
                            <img src="/user.png" alt="" />
                        </div>
                        <div className={styles["item2"]}>
                            <h5>username static</h5>
                            <p>Transfer</p>
                        </div>
                        {item.id_sender == userSender.id ?
                            <h4 className={[styles["item3"], styles["red"]].join(' ')}>-Rp. {item.transfer}</h4>
                            :
                            <h4 className={styles["item3"]}>+Rp. {item.transfer}</h4> 
                        }

                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
// export async function getServerSideProps(context) {
//     const api = process.env.URL_API_V1

//     if (localStorage.getItem('token')) {
//         const res = await axios.get(`${api}users/find-one`, {headers:{ authorization:`Bearer ${localStorage.getItem('token')}`}})
//         const userSender = await res.data.data[0]
//     }

//     return {
//       props: {
//           userSender
//       }, 
//     }
//   }