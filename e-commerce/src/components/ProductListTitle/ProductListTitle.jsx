import CountDownBanner from '../CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from './ProductListTitle.module.scss';

function ProductListTitle() {

    const targetDate = '2025-08-14T23:59:59';

    return (
        <div className={styles.wrapper}>
            <CountDownBanner targetDate={targetDate} />
            <div className={styles.content}>
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    );
}

export default ProductListTitle;