import clsx from 'clsx';
import styles from './CartSummary.module.scss';
import Button from '@components/Button/Button'
function CartSummary() {
    return (
        <div className={styles.wrapper}>
            <span>Cart Total</span>
            <hr />
            <div className={clsx(styles.wrapperPrice, styles.subtotal)}>
                <span>Subtotal</span>
                <span>$1.9999</span>
            </div>
            <div className={clsx(styles.wrapperPrice, styles.total)}>
                <span>Total</span>
                <span>$1.9999</span>
            </div>

            <div className={styles.wrapperButton}>
                <Button className={styles.btn}>Tiến hành thanh toán</Button>
                <Button className={styles.btn} secondary>Tiếp tục mua sắm</Button>
            </div>
        </div>
    );
}

export default CartSummary;