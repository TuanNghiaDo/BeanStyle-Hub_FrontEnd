import styles from './PopularProduct.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

function PopularProduct({ listProduct }) {
    return (
        <div className={styles.wrapper}>
            {listProduct.map(product => (
                <ProductItem
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    images={product.images}
                />
            ))}
        </div>
    );
}

export default PopularProduct;