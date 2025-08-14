import { useState } from 'react'
import { Link } from 'react-router-dom';
import clsx from 'clsx'

import Image from '@components/Image/Image';
import SidebarProductItem from '@components/SidebarProductItem/SidebarProductItem';
import styles from './ProductItem.module.scss';
import Button from '@components/Button/Button';


function ProductItem({
    name,
    price,
    // des,
    // type,
    sizes,
    // material,
    images,
    btnTitle,
    imageSize,
    showGrid
}) {

    const [sizeSelected, setSizeSelected] = useState(sizes?.[0]?.name);


    return (
        <div className={showGrid ? styles.wrapperVertical : styles.wrapperHorizontal}>
            <Link to={'/'} className={styles.link}>
                <Image
                    className={styles.imageProduct}
                    src={images[0]}
                    width={imageSize?.width}
                    height={imageSize?.height}
                />
                <Image
                    className={clsx(styles.imageProduct, styles.imageProductHover)}
                    src={images[1]}
                    width={imageSize?.width}
                    height={imageSize?.height}
                />
                <SidebarProductItem className={styles.sidebarProductItem} />

            </Link>
            <div className={clsx({ [styles.productContent]: showGrid && btnTitle })}>
                <Link to={'/'}>
                    <h2
                        className={styles.productName}
                    >
                        {name}
                    </h2>
                </Link>
                <span className={styles.price}>${price}</span>
                {sizes && (
                    <div className={styles.sizeWrapper}>
                        {sizes.map((item, index) => (
                            <button
                                key={index}
                                className={`${styles.sizeBtn} ${sizeSelected === item.name ? styles.active : ''}`}
                                onClick={() => setSizeSelected(item.name)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                )}
                {btnTitle && (
                    <Button
                        title={btnTitle}
                        className={styles.btnAddToCart}
                    />
                )}
            </div>
        </div>
    );
}

export default ProductItem;