import { Link } from 'react-router-dom';
import styles from './Step.module.scss';
function Step() {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.steps}>
                <li>
                    <Link to="/cart">Giỏ hàng</Link>
                </li>
                <li>
                    <Link to="/checkout">Thanh toán</Link>
                </li>
                <li>
                    <Link to="/order-status">Trạng thái đơn hàng</Link>
                </li>
            </ul>
            <div className={styles.wrapperMessage}>
                <span>Bạn đang hết thời gian! Thanh toán ngay bây giờ để tránh bỏ lỡ đơn hàng!</span>
            </div>
        </div>
    );
}

export default Step;
