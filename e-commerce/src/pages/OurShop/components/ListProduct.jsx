import { useContext } from 'react'
import { OurShopContext } from '@contexts/index'
import ProductItem from '@components/ProductItem/ProductItem'
import styles from './ListProduct.module.scss'
function ListProduct() {
    const { products, } = useContext(OurShopContext)

    return (
        <div className={styles.wrapper}>
            {products.map((product) => (
                <ProductItem
                    key={product._id}
                    name={product.name}
                    price={product.price}
                    images={product.images}
                    sizes={product.size}
                    btnTitle="Thêm vào giỏ hàng"
                />
            ))}
        </div>
    );
}

export default ListProduct;
