import InputCommon from "@components/InputCommon/InputCommon";
import styles from "./Login.module.scss";
function Login() {
    return (
        <div className={styles.wrapper}>
            <h2>Sign In</h2>
            <InputCommon label="Tên đăng nhập hoặc email" type="text" isRequired />
            <InputCommon label="Mật khẩu" type="password" isRequired />
        </div>
    );
}

export default Login;