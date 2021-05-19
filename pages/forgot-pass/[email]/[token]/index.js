import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Button from "../../../../src/components/base/button"
import Input from "../../../../src/components/base/input"
import Swal from 'sweetalert2'
import styles from "../../../../styles/Login.module.css"
import axios from "axios"

export default function TokenPage() {
    const api = process.env.URL_API_V1;
    const router = useRouter()
    const { query } = useRouter()
    let email = query.email
    let token = query.token

    const [data, setData] = useState({
        password: "",
        confirmPassword: ""
    });

    const handleChange = (event) => {
        const dataNew = { ...data };
        dataNew[event.target.name] = event.target.value;
        setData(dataNew);
    };

    const validate = (e) => {
        e.preventDefault();
        if (data.password !== data.confirmPassword) {
            return Swal.fire(
                'Change password failed!',
                `please make sure your password same`,
                'error'
            )
        }


    }

    const handleReset = async (e) => {
        e.preventDefault()
        const valid = await validate(e)
        if (valid) {
            return
        }
        if (email !== null && token !== null) {
            axios.put(`${api}users/auth/reset-password?email=${email}&token=${token}`, { password: data.password })
                .then((res) => {
                    setData({
                        password: "",
                        confirmPassword: ""
                    });
                    Swal.fire({
                        title: "Success!",
                        text: res.data.data.message,
                        icon: "success",
                        confirmButtonText: "Ok",
                        confirmButtonColor: "#ffba33",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            router.push("/login");
                        } else {
                            router.push("/login");
                        }
                    });
                })
                .catch((err) => {
                    Swal.fire({
                        title: "Error!",
                        text: err.response.data.message,
                        icon: "error",
                        confirmButtonText: "Ok",
                        confirmButtonColor: "#6a4029",
                    });
                });
        } else {
            Swal.fire({
                title: "Error!",
                text: "Something wrong",
                icon: "error",
                confirmButtonText: "Ok",
                confirmButtonColor: "#6a4029",
            });
        }
    };



    return (
        <div className={styles["page-token"]}>
            <div className={styles["cont-token"]}>
                <Input
                    label=" new Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
                <Input
                    label="confirm new Password"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                />
                <Button
                    className="blue"
                    title="reset"
                    onClick={handleReset}
                />
            </div>
        </div>
    )
}
