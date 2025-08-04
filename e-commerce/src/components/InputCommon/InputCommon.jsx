import { useState } from 'react'
import styles from './InputCommon.module.scss';
import { EyeIcon, EyeCloseIcon } from '@icons/Icons';
function InputCommon({ label, type, isRequired = false }) {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const inputType = showPassword && type === 'password' ? 'text' : type;  //Lưu ý chỗ này

    const isPassword = type === 'password';

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.label}
            >
                {label}
                {isRequired && <span>*</span>}
            </div>
            <div className={styles.wrapInput}>
                <input type={inputType} />
                {isPassword && (
                    <div
                        className={styles.icon}
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? <EyeIcon width="2.6rem" height="2.6rem" /> : <EyeCloseIcon width="2.6rem" height="2.6rem" />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;