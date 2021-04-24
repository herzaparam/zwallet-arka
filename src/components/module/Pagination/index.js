import React from 'react'
import styles from './Pagination.module.css'

export default function Pagination({postPerPage, totalPost, paginate}) {
  
    const pageNumbers = [];
    for(let i= 1; i <= Math.ceil(totalPost/postPerPage); i++){
        pageNumbers.push(i)
    }
    
    return (
        <nav>
            <ul className={[["justify-content-center"],["pagination"],styles['pagination-style']].join(' ')}>
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <button onClick={()=>paginate(number)} className="page-link">{number}</button>
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}
