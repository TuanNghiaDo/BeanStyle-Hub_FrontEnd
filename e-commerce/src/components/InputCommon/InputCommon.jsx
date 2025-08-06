import { useState } from 'react'
import clsx from 'clsx'

import styles from './InputCommon.module.scss';
import { EyeIcon, EyeCloseIcon } from '@icons/Icons';
function InputCommon({ label, type, isRequired = false, error, ...props }) {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const inputType = showPassword && type === 'password' ? 'text' : type;  //Lưu ý chỗ này

    const isPassword = type === 'password';

    return (
        <div className={clsx(styles.wrapper, { [styles.error]: error })}>
            <div
                className={styles.label}
            >
                {label}
                {isRequired && <span>*</span>}
            </div>
            <div className={styles.wrapInput}>
                <input type={inputType} {...props} />
                {isPassword && (
                    <div
                        className={styles.icon}
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? <EyeIcon width="2.6rem" height="2.6rem" /> : <EyeCloseIcon width="2.6rem" height="2.6rem" />}
                    </div>
                )}
            </div>
            {error && (
                <span className={styles.errorMessage}>{error}</span>
            )}
        </div>
    );
}

export default InputCommon;