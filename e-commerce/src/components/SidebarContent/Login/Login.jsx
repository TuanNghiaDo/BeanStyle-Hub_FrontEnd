import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Link } from "react-router-dom"
import InputCommon from "@components/InputCommon/InputCommon"
import styles from "./Login.module.scss"
import Button from "@components/Button/Button"
import config from "@config/index"
function Login() {

    const [isRegister, setIsRegister] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Email không hợp lệ")
                .required("Email là bắt buộc"),
            password: Yup.string()
                .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
                .required("Mật khẩu là bắt buộc"),
        }),
        onSubmit: (values) => {
            console.log("Form submitted with values:", values);
        },
    })

    console.log(formik.errors)

    return (
        <div className={styles.wrapper}>
            <h2>Sign In</h2>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id="email"
                    label="Tên đăng nhập hoặc email"
                    type="text"
                    isRequired
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.id}
                    error={formik.errors.email && formik.touched.email ? formik.errors.email : undefined}
                />



                <InputCommon
                    id="password"
                    label="Mật khẩu"
                    type="password"
                    isRequired
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.id}
                    error={formik.errors.password && formik.touched.password ? formik.errors.password : undefined}
                />

                <div className={styles.rememberMe}>
                    <input type="checkbox" />
                    <span>Nhớ tài khoản và mật khẩu</span>
                </div>
                <Button
                    title="Đăng nhập"
                    className={styles.loginBtn}
                    type="submit"
                />
            </form>
            <Link
                to={config.routes.forgot_password}
                className={styles.forgotPassword}
            >
                <span>Quên mật khẩu?</span>
            </Link>
        </div>
    )
}

export default Login