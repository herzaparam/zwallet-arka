import React from 'react'
import styles from '../../styles/Transfer.module.css'
import HomeTab from '../../src/components/module/HomeTab'

function Transfer() {
    return (
        <div className={[["container-fluid"], styles["cont-fluid"]].join(' ')}>
            <div className={[["container"], styles["cont-home"]].join(' ')}>
                <div className={[["row"], styles["cont-row-home"]].join(' ')}>
                    <div className="col-3">
                        <HomeTab />
                    </div>
                    <div className="col-9">
                        <h5>Search Receiver</h5>
                        <div class="input-group flex-nowrap">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="addon-wrapping"><img src="/search-bar.png" alt="" /></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className={styles["trans-history"]}>
                            <div className={styles["item1"]}>
                                <img src="/user.png" alt="" />
                            </div>
                            <div className={styles["item2"]}>
                                <h5>Samuel Suhi</h5>
                                <p>+628130564</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Transfer
