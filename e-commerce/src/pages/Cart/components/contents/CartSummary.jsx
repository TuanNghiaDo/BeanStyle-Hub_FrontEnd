import clsx from 'clsx';
import styles from './CartSummary.module.scss';
import Button from '@components/Button/Button'
import Loading from '@components/Loading/Loading';
function CartSummary({ cart, isLoading }) {

    const methodImgs = [
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperInfoSummary}>
                <span>Tổng tiền</span>
                <hr />
                <div className={clsx(styles.wrapperPrice, styles.subtotal)}>
                    <span>tạm tính</span>
                    <span>{cart?.map(item => item.price * item.quantity).reduce((acc, curr) => acc + curr, 0) + '$'}</span>
                </div>
                <div className={clsx(styles.wrapperPrice, styles.total)}>
                    <span>Thành tiền</span>
                    <span>{cart?.map(item => item.price * item.quantity).reduce((acc, curr) => acc + curr, 0) + '$'}</span>
                </div>

                <div className={styles.wrapperButton}>
                    <Button className={styles.btn}>Tiến hành thanh toán</Button>
                    <Button className={styles.btn} secondary>Tiếp tục mua sắm</Button>
                </div>
                {isLoading && <Loading color='black' />}
            </div>
            <div className={styles.methodPayment}>
                <div className={styles.titleMethod}>
                    Đảm bảo thanh toán <span>an toàn</span>
                </div>
                <div className={styles.imgMethodWrapper}>
                    {methodImgs.map((img, index) => {
                        return (
                            <img
                                key={index}
                                src={img}
                                alt="Payment Methods"
                            />
                        );
                    })}
                </div>
                <span>Thanh toán của bạn <strong>an toàn 100%</strong></span>
            </div>
        </div>
    );
}

export default CartSummary;