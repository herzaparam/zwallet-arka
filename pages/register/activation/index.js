import axios from 'axios'
import React,{useEffect} from 'react'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'
import styles from '../../../styles/Login.module.css'

export default function Register() {
    const api = process.env.URL_API_V1;
    const router = useRouter();

    const handleActivate = (e) => {
        e.preventDefault();
        if(router.query.email !== undefined || router.query.token !== undefined){
            axios.get(`${api}users/auth/verify?email=${router.query.email}&token=${router.query.token}`)
            .then((res)=>{
                Swal.fire(
                    'Activation succed!',
                    `${res.data.message}`,
                    'success'
                )
                router.push("/login")
            })
            .catch((err)=>{
                Swal.fire(
                    'activation failed!',
                    `please make sure your account`,
                    'error'
                )
            })
        } 
    }
    
    return (
        <div className={styles.activate}>
            <button onClick={handleActivate}>Activate</button>
        </div>
    )
}
