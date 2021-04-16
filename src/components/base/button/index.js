import React from 'react'
import style from './button.module.css'

function Button({ className, title, onClick, type }) {
    return (
        <button className={style[`${className}`]} type={type} onClick={onClick}>{title}</button>
    )
}

export default Button
