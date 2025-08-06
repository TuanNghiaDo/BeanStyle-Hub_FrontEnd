import styles from './ContentSidebar.module.scss';
import ItemProduct from '@componentsSidebar/ItemProduct/ItemProduct';
function ContentSidebar() {
    return (
        <div className={styles.wrapper}>
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
        </div>
    );
}

export default ContentSidebar;