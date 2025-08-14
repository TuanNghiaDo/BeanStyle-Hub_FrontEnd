import { useContext } from 'react'
import { OurShopContext } from '@contexts/index'
import ProductItem from '@components/ProductItem/ProductItem'
import styles from './ListProduct.module.scss'
function ListProduct() {
    const { products, showGrid } = useContext(OurShopContext)

    const imageSize = {
        width: 430,
        height: 514
    }

    return (

        <div className={showGrid ? styles.wrapperGrid : styles.wrapperList}>
            {
                products.map((product) => (
                    <ProductItem
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        images={product.images}
                        sizes={product.size}
                        btnTitle="Thêm vào giỏ hàng"
                        imageSize={!showGrid ? imageSize : undefined}
                        showGrid={showGrid}
                    />
                ))
            }
        </div>

    )
}

export default ListProduct;
