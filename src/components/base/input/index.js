import React from 'react'
import styles from './input.module.css'

function Input({ label, nameInput, type, placeholder }) {
    return (
        <div className={styles["input"]}>
            <label htmlFor={nameInput}>{label}</label>
            <input type={type} id={nameInput} name={nameInput} placeholder={placeholder} />
        </div>
    )
}

export default Input
