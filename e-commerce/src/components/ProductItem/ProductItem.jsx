import { Link } from 'react-router-dom';
import clsx from 'clsx'

import Image from '@components/Image/Image';
import SidebarProductItem from '@components/SidebarProductItem/SidebarProductItem';
import styles from './ProductItem.module.scss';


function ProductItem({
    name,
    price,
    // des,
    // type,
    // size,
    // material,
    images,
}) {
    return (
        <div className={styles.wrapper}>
            <Link to={'/'} className={styles.link}>
                <Image
                    className={styles.imageProduct}
                    src={images[0]}
                />
                <Image
                    className={clsx(styles.imageProduct, styles.imageProductHover)}
                    src={images[1]}
                />
                <SidebarProductItem className={styles.sidebarProductItem} />
                <h2 className={styles.productName}>{name}</h2>
            </Link>
            <span className={styles.price}>${price}</span>
        </div>
    );
}

export default ProductItem;