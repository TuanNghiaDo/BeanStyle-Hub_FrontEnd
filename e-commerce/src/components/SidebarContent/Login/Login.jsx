import { useState, useContext } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Link } from "react-router-dom"
import clsx from "clsx"

import { ToastContext } from "@contexts/index"
import InputCommon from "@components/InputCommon/InputCommon"
import styles from "./Login.module.scss"
import Button from "@components/Button/Button"
import config from "@config/index"
function Login() {

    const [isRegister, setIsRegister] = useState(false);

    const { toast } = useContext(ToastContext);

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Email không hợp lệ")
                .required("Email là bắt buộc"),
            password: Yup.string()
                .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
                .required("Mật khẩu là bắt buộc"),
            confirmPassword: isRegister ? Yup.string()
                .oneOf([Yup.ref('password'), null], 'Mật khẩu xác nhận không khớp')
                .required('Xác nhận mật khẩu là bắt buộc') : Yup.string().notRequired(),
        }),
        onSubmit: (values) => {
            console.log("Form submitted with values:", values);
        },
    })

    console.log(formik.errors)

    return (
        <div className={styles.wrapper}>
            <h2>{isRegister ? "Đăng ký" : "Đăng nhập"}</h2>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id="email"
                    label="Tên đăng nhập hoặc email"
                    type="text"
                    isRequired
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email && formik.touched.email ? formik.errors.email : undefined}
                />



                <InputCommon
                    id="password"
                    label="Mật khẩu"
                    type="password"
                    isRequired
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password && formik.touched.password ? formik.errors.password : undefined}
                />

                {isRegister && (
                    <InputCommon
                        id="confirmPassword"
                        label="Xác nhận mật khẩu"
                        type="text"
                        isRequired
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        error={formik.errors.confirmPassword && formik.touched.confirmPassword ? formik.errors.confirmPassword : undefined}
                    />
                )}

                {!isRegister && (<div className={styles.rememberMe}>
                    <input type="checkbox" />
                    <span>Nhớ tài khoản và mật khẩu</span>
                </div>)}
                <Button
                    title={isRegister ? "Đăng ký" : "Đăng nhập"}
                    className={styles.loginBtn}
                    type="submit"
                    onClick={() => {
                        toast.success(isRegister ? "Đăng ký thành công!" : "Đăng nhập thành công!");
                    }}
                />

            </form>
            <Button
                secondary
                title={isRegister ? "Đã có tài khoản?" : "Chưa có tài khoản?"}
                className={clsx(styles.loginBtn, styles.registerBtn)}
                onClick={handleToggle}
            />

            {!isRegister && (<Link
                to={config.routes.forgot_password}
                className={styles.forgotPassword}
            >
                <span>Quên mật khẩu?</span>
            </Link>)}
        </div>
    )
}

export default Login