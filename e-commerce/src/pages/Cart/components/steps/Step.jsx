import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Step.module.scss';
import { StoreContext } from '@contexts/index';
function Step() {

    const { cart } = useContext(StoreContext);

    const getActiveClassName = ({ isActive }) => clsx({ [styles.active]: isActive });

    return (
        <div className={styles.wrapper}>
            <ul className={styles.steps}>
                <li>
                    <NavLink
                        to="/cart"
                        className={getActiveClassName}
                    >
                        Giỏ hàng
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/checkout"
                        className={getActiveClassName}
                    >
                        Thanh toán
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/order-status"
                        className={getActiveClassName}
                    >
                        Trạng thái đơn hàng
                    </NavLink>
                </li>
            </ul>
            {cart.length != 0 &&
                <div className={styles.wrapperMessage}>
                    <span>Bạn đang hết thời gian! Thanh toán ngay bây giờ để tránh bỏ lỡ đơn hàng!</span>
                </div>
            }
        </div>
    );
}

export default Step;
