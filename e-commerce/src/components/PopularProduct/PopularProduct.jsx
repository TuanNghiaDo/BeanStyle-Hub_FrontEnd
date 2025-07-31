import styles from './PopularProduct.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';
function PopularProduct() {
    return (
        <div className={styles.wrapper}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    );
}

export default PopularProduct;