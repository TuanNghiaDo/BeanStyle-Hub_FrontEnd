import CountDownBanner from '../CountDownBanner/CountDownBanner';
import styles from './ProductListTitle.module.scss';

function ProductListTitle() {

    const targetDate = '2025-08-14T23:59:59';

    return (
        <div className={styles.wrapper}>
            <CountDownBanner targetDate={targetDate} />
            <div className={styles.content}>
                <div>1</div>
                <div>2</div>
            </div>
        </div>
    );
}

export default ProductListTitle;