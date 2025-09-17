import { useContext } from 'react'
import { SidebarContext } from '@contexts/index';
import styles from './ProductDetail.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';
function ProductDetail() {
    const { productDetail } = useContext(SidebarContext);
    console.log(productDetail);
    return (
        <div
            className={styles.wrapper}
        >
            <SliderCommon data={productDetail.images} />
        </div>
    );
}

export default ProductDetail;