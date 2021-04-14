import React from 'react'
import style from './button.module.css'

function Button({ styling, title, onClick }) {
    return (
        <button className={style[`${styling}`]} onClick={onClick}>{title}</button>
    )
}

export default Button
