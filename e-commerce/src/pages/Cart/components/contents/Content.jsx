import styles from './Content.module.scss';
function Content() {
    return (
        <div className={styles.wrapper}>
            <h2>Shopping Cart</h2>
            <p>Your cart is currently empty.</p>
        </div>
    );
}

export default Content;