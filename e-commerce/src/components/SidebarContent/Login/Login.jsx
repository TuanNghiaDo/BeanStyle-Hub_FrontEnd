import { Link } from "react-router-dom"
import InputCommon from "@components/InputCommon/InputCommon"
import styles from "./Login.module.scss"
import Button from "@components/Button/Button"
import config from "@config/index"
function Login() {
    return (
        <div className={styles.wrapper}>
            <h2>Sign In</h2>
            <InputCommon label="Tên đăng nhập hoặc email" type="text" isRequired />
            <InputCommon label="Mật khẩu" type="password" isRequired />
            <div className={styles.rememberMe}>
                <input type="checkbox" />
                <span>Nhớ tài khoản và mật khẩu</span>
            </div>
            <Button
                title="Đăng nhập"
                className={styles.loginBtn}
            />
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