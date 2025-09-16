import { useContext } from 'react'
import { OurShopContext } from '@contexts/index'
import ProductItem from '@components/ProductItem/ProductItem'
import styles from './ListProduct.module.scss'
import Button from '@components/Button/Button'
import LoadingButton from '@components/LoadingButton/LoadingButton'

function ListProduct() {
    const { products, showGrid, loading, handleLoadMore, total, loadMore } = useContext(OurShopContext)

    const imageSize = {
        width: 430,
        height: 514
    }

    return (

        loading ? (<div> Loading...</div >) : (
            <>
                <div className={showGrid ? styles.wrapperGrid : styles.wrapperList}>
                    {
                        products.map((product) => (
                            <ProductItem
                                key={product._id}
                                id={product._id}
                                name={product.name}
                                price={product.price}
                                images={product.images}
                                sizes={product.size}
                                btnTitle="Thêm vào giỏ hàng"
                                imageSize={!showGrid ? imageSize : undefined}
                                showGrid={showGrid}
                                details={product}
                            />
                        ))
                    }
                </div>
                {products.length < total && (
                    <Button
                        className={styles.btnSeeMore}
                        children={loadMore ? <LoadingButton /> : 'Xem thêm'}
                        onClick={handleLoadMore}
                        disabled={loadMore}
                    />
                )}
            </>

        )
    )
}

export default ListProduct;
