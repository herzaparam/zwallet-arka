import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Login.module.css'
import Button from '../../src/components/base/button'
import Input from '../../src/components/base/input'
import axios from 'axios'
import Swal from 'sweetalert2'

function Login() {
    const router = useRouter();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        const dataNew = { ...data };
        dataNew[e.target.name] = e.target.value;
        setData(dataNew)
    };
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/users/auth/login', data)
            .then((res) => {   
                Swal.fire(
                    'Login succed!',
                    `${res.data.message}`,
                    'success'
                )
                localStorage.setItem("token", res.data.data.token)
                router.push("/home")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="row">
            <div className="col-7">
                <div className={[["jumbotron"], ["jumbotron-fluid"], styles["jumbo-tron"]].join(' ')}>
                    <div className={[["container"], styles["cont-jumbo"]].join(' ')}>
                        <h3 className={styles["heading-white"]}>Zwallet</h3>
                        <img src="/twophone.png" alt="two phone" srcSet="" />
                        <h3 className={[["display-4"], styles["heading-white"]].join(' ')}>App That Covering Banking Needs.</h3>
                        <p className="lead">Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
                    </div>
                </div>
            </div>
            <div className="col-5">
                <div className={[["container"], styles["cont-side-right"]].join(' ')}>
                    <h3 className={styles["heading-black"]}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
                    <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                    <form >
                        <Input
                            label=""
                            name="email"
                            type="text"
                            placeholder="Enter your e-mail"
                            onChange={handleChange}
                        />
                        <Input
                            label=""
                            name="password"
                            type="password"
                            placeholder="Enter you password"
                            onChange={handleChange}
                        />
                        <Link href="/reset-pass">
                            <p className={styles["forg-pass"]}>Forgot Password?</p>
                        </Link>
                        <Button
                            className="grey"
                            title="Login"
                            onClick={handleLogin}
                        />
                    </form>
                    <p className={styles["create-acc"]}>Dont't have an account? Let's<Link href="/register"><a> Sign up</a></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
