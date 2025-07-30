import { Link } from 'react-router-dom';
import clsx from 'clsx'

import Image from '@components/Image/Image';
import SidebarProductItem from '@components/SidebarProductItem/SidebarProductItem';
import styles from './ProductItem.module.scss';
import normalImg from '@images/20231012_H1aL5I9v.jpg';
import hoverImg from '@images/20231012_6c52YtSt.jpg';

function ProductItem() {
    return (
        <div className={styles.wrapper}>
            <Link to={'/'} className={styles.link}>
                <Image
                    className={styles.imageProduct}
                    src={normalImg}
                />
                <Image
                    className={clsx(styles.imageProduct, styles.imageProductHover)}
                    src={hoverImg}
                />
                <SidebarProductItem className={styles.sidebarProductItem} />
                <h2 className={styles.productName}>10k Yellow Gold</h2>
            </Link>
            <span className={styles.price}>$500</span>
        </div>
    );
}

export default ProductItem;