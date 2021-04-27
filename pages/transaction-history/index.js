import React, { useEffect, useState } from 'react'
import styles from '../../styles/History.module.css'
import HomeTab from '../../src/components/module/HomeTab'
import axiosApiInstance from '../../helpers/axios'
import Pagination from '../../src/components/module/Pagination'
import moment from 'moment'
import Link from 'next/link'



export default function TransactionHistory() {
    const urlImage = process.env.URL_API_IMAGE
    const api = process.env.URL_API_V1

    const [userSender, setUserSender] = useState([])
    const [history, setUserHistory] = useState([])
    const [orderBy, setOrderBy] = useState("created_at")
    const [sortBy, setSortBy] = useState("DESC")

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(5)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axiosApiInstance.get(`${api}users/find-one`)
                .then((res) => {
                    const data = res.data.data[0]
                    setUserSender(data)
                    axiosApiInstance.get(`${api}transaction/history?page=1&perPage=50&orderBy=${orderBy}&sort=${sortBy}`)
                        .then((res) => {
                            const dataHistory = res.data.data
                            setUserHistory(dataHistory)
                        })
                        .catch((err) => {
                            alert('error history')
                        })
                })
                .catch((err) => {
                    alert("error find onee")
                })
        }
    }, [orderBy, sortBy])

    const changeSort = (e) => {
        setSortBy(e.target.value);
    }
    const changeOrder = (e) => {
        setOrderBy(e.target.value);
    }

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirsPost = indexOfLastPost - postPerPage;
    const currentHistory = history.slice(indexOfFirsPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
            <div className={[["container"], styles["cont-home"]].join(' ')}>
                <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                    <div className={[["col-3"], styles["col-3-resp"]].join(" ")}>
                        <HomeTab />
                    </div>
                    <div className={[["col-9"], styles["col-9-resp"]].join(" ")}>
                        <div className={styles["transaction"]}>
                            <div className={styles["trans-history-title"]}>
                                <h5>Transaction History</h5>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Order By</label>
                                </div>
                                <select className="custom-select" id="inputGroupSelect01" onChange={changeOrder} value={orderBy}>
                                    <option value="created_at">Date</option>
                                    <option value="transfer">Amount of transfer</option>
                                </select>
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Sort</label>
                                </div>
                                <select className="custom-select" id="inputGroupSelect01" onChange={changeSort} value={sortBy}>
                                    <option value="ASC">ascending</option>
                                    <option value="DESC">descending</option>
                                </select>
                            </div>
                            {currentHistory.map((item) => {
                                return (
                                    <Link href={`/transaction-history/${item.historyID}`} key={item.historyID}>
                                        <div className={styles["trans-history"]} >
                                            {item.id_sender == userSender.id ?
                                                <>
                                                    <div className={styles["item1"]}>
                                                        <img src={`${urlImage}${item.image_receiver}`} alt="" />
                                                    </div>
                                                    <div className={styles["item2"]}>
                                                        <h5>{item.username_receiver}</h5>
                                                        <p>Transfer {moment(`${item.created_at}`).startOf('day').fromNow()}</p>
                                                    </div>
                                                    <h4 className={[styles["item3"], styles["red"]].join(' ')}>-Rp. {item.transfer}</h4>
                                                </>
                                                :
                                                <>
                                                    <div className={styles["item1"]}>
                                                        <img src={`${urlImage}${item.image}`} alt="" />
                                                    </div>
                                                    <div className={styles["item2"]}>
                                                        <h5>{item.username}</h5>
                                                        <p>Receive {moment(`${item.created_at}`).startOf('day').fromNow()}</p>
                                                    </div>
                                                    <h4 className={styles["item3"]}>+Rp. {item.transfer}</h4>
                                                </>
                                            }

                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <Pagination postPerPage={postPerPage} totalPost={history.length} paginate={paginate} />
                    </div>
                </div>

            </div>
        </div>
    )
}
