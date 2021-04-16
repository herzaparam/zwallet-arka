import React from 'react'
import styles from './input.module.css'

function Input({ label, name, type, placeholder, value, onChange }) {
    return (
        <div className={styles["input"]}>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export default Input
