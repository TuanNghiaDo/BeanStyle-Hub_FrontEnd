import { useContext } from 'react'
import { SidebarContext } from '@contexts/index';
import styles from './ProductDetail.module.scss';
function ProductDetail() {
    const { productDetail } = useContext(SidebarContext);
    console.log(productDetail);
    return (
        <div
            className={styles.wrapper}
        >
            ProductDetail
        </div>
    );
}

export default ProductDetail;