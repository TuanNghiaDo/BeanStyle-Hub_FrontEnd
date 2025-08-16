import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import clsx from 'clsx'
import Cookies from 'js-cookie';

import Image from '@components/Image/Image';
import SidebarProductItem from '@components/SidebarProductItem/SidebarProductItem';
import styles from './ProductItem.module.scss';
import Button from '@components/Button/Button';
import { SidebarContext, ToastContext } from '@contexts/index';
import { addToCart } from '@api/cartService';
import LoadingButton from '@components/LoadingButton/LoadingButton';

function ProductItem({
    id,
    name,
    price,
    sizes,
    images,
    imageSize,
    showGrid
}) {

    const [sizeSelected, setSizeSelected] = useState(sizes?.[0]?.name);

    const [chooseSize, setChooseSize] = useState(false);

    const userId = Cookies.get('userId');

    const { setIsOpen, setType, handleGetCart } = useContext(SidebarContext)

    const { toast } = useContext(ToastContext);

    const [loading, setLoading] = useState(false);

    const handleAddToCart = () => {
        if (!userId) {
            toast.warning('Bạn chưa đăng nhập!')
            setIsOpen(true);
            setType('login');
            return
        }

        if (!chooseSize) {
            toast.warning('Vui lòng chọn size!');
            return
        }

        setLoading(true);


        const data = {
            userId,
            productId: id,
            quantity: 1,
            size: sizeSelected
        }

        addToCart(data)
            .then(() => {
                setIsOpen(true);
                setType('cart');
                setLoading(false);
                handleGetCart();
                toast.success('Thêm vào giỏ hàng thành công!')

            })
            .catch((err) => {
                console.log(err)
            });
    }

    const handleChooseSize = (sizeName) => {
        setSizeSelected(sizeName);
        setChooseSize(true);
    }

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
            <div className={clsx({ [styles.productContent]: showGrid && sizes })}>
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
                                onClick={() => handleChooseSize(item.name)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                )}
                {sizes && (
                    <Button
                        title={loading ? <LoadingButton /> : 'Thêm vào giỏ hàng'}
                        className={styles.btnAddToCart}
                        onClick={handleAddToCart}
                        disabled={loading}
                    />
                )}
            </div>
        </div>
    );
}

export default ProductItem;