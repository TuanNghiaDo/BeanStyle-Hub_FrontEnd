import styles from './Content.module.scss';
import CartTable from './CartTable.jsx';
function Content() {
    return (
        <div className={styles.wrapper}>
            <div>
                <CartTable />
            </div>

            <div>Thanh toán</div>
        </div>
    );
}

export default Content;