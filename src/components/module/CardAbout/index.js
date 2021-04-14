import React from 'react'
import styles from './CardAbt.module.css'

function CardAbout({pict,title,desc}) {
    return (
        <div className={styles["card-about"]}>
            <div className={styles["card-img"]}>
            <img src={pict} alt="" srcSet=""/>
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}

export default CardAbout
