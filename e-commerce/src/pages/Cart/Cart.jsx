import styles from './Cart.module.scss';
import Step from './components/steps/Step';
import Content from './components/contents/Content';
function Cart() {
    return (
        <div className={styles.wrapper}>
            <Step />
            <Content />
        </div>
    );
}

export default Cart;