
import styles from './Content.module.scss';
import CartTable from './CartTable.jsx';
import CartSummary from './CartSummary.jsx';
function Content() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cartTable}>
                <CartTable />
            </div>

            <div className={styles.cartSummary}>
                <CartSummary />
            </div>
        </div>
    );
}

export default Content;