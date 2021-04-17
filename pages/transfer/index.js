import React, { useState, useEffect } from 'react'
import styles from '../../styles/Transfer.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import axiosApiInstance from '../../helpers/axios'
import Link from 'next/link'

function Transfer() {
    const urlImg = 'http://localhost:8000/'
    
    const [data, setData] = useState([])

    useEffect(() => {
        axiosApiInstance.get(`http://localhost:8000/api/v1/users/find-all?page=1&perPage=5&keyword=`)
            .then((res) => {
                const newData = res.data.data;
                setData(newData)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
            <div className={[["container"], styles["cont-home"]].join(' ')}>
                <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                    <div className="col-3">
                        <HomeTab />
                    </div>
                    <div className={[["col-9"], styles["main-col"]].join(' ')}>
                        <h5>Search Receiver</h5>
                        <div className={styles["input-group"]}>
                            <div>
                                <span className={styles["input-span"]}><img src="/search-bar.png" alt="" /></span>
                            </div>
                            <input type="text" placeholder="Search receiver here" />
                        </div>
                        {data.map((item) => {
                            return (
                            <Link href={`/transfer/${item.id}`} key={item.id}>
                            <div className={styles["trans-history"]} >
                                <div className={styles["item1"]}>
                                    <img src={`${urlImg}${item.image}`} alt="" />
                                </div>
                                <div className={styles["item2"]}>
                                    <h5>{item.username}</h5>
                                    <p>+{item.phone_number}</p>
                                </div>
                            </div>
                            </Link>
                            )
                        })}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Transfer
