import React from 'react'
import styles from './Graph.module.css'

function Graph() {
    return (
        <div className={styles.graph}>
            <div className={styles["graph-top"]}>
                <div className="graph-top-income">
                    <img src="/arrow-up-green.png" alt="" />
                    <p>Income</p>
                    <h3>Rp.2.000.000</h3>
                </div>
                <div className="graph-top-outcome">
                    <div className="graph-top-income">
                        <img src="/arrow-up-red.png" alt="" />
                        <p>Outcome</p>
                        <h3>Rp.5.000.000</h3>
                    </div>
                </div>
            </div>
            <div className="graph-bot">
                <h1>graphics</h1>
            </div>
        </div>
    )
}

export default Graph
