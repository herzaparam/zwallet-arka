import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Login.module.css'
import Button from '../../src/components/base/button'
import Input from '../../src/components/base/input'
import axios from 'axios'
import Swal from 'sweetalert2'

function SignUp() {
    const router = useRouter();

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const dataNew = { ...data };
        dataNew[event.target.name] = event.target.value;
        setData(dataNew);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/users/', data)
            .then((res) => {
                Swal.fire(
                    'Register succed!',
                    `${res.data.message}`,
                    'success'
                )
                router.push("/login")
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
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
                    <form>
                        <Input
                            label=""
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            value={data.username}
                            onChange={handleChange}
                        />
                        <Input
                            label=""
                            name="email"
                            type="text"
                            placeholder="Enter your e-mail"
                            value={data.email}
                            onChange={handleChange}
                        />
                        <Input
                            label=""
                            name="password"
                            type="password"
                            placeholder="Enter you password"
                            value={data.password}
                            onChange={handleChange}
                        />
                        <Button
                            className="grey"
                            title="Sign Up"
                            type="submit"
                            onClick={handleSubmit}
                        />
                    </form>
                    <p className={styles["create-acc"]}>Already have an account? Let's <Link href="/login"><a>Login</a></Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
