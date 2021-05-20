import React from 'react'
import Chart from '../../base/chart'
import styles from './Graph.module.css'

function Graph() {
    return (
        <div className={styles.graph}>
            <div className={styles["graph-top"]}>
                <div className="graph-top-income">
                    <img src="/arrow-up-green.png" alt="" />
                    <p>Income</p>
                    <h3>-</h3>
                </div>
                <div className="graph-top-outcome">
                    <div className="graph-top-income">
                        <img src="/arrow-up-red.png" alt="" />
                        <p>Outcome</p>
                        <h3>-</h3>
                    </div>
                </div>
            </div>
            <div className="graph-bot">
                <Chart />
            </div>
        </div>
    )
}

export default Graph
