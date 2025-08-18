import React, { useContext } from 'react'
import { StoreContext, ToastContext } from '@contexts/index'
import styles from './ItemProduct.module.scss';
import Image from '@components/Image/Image';
import { CloseIcon } from '@icons/Icons';
import { removeFromCart } from '@api/cartService';
function ItemProduct({ image = '', name = 'No Name', size = 'M', price = 200, amount = 1, code = '0000', productId, userId }) {

    const { fetchCart } = useContext(StoreContext)

    const { toast } = useContext(ToastContext)

    const handleDeleteProductFromCart = () => {

        const data = {
            userId,
            productId
        }

        removeFromCart(data)
            .then(() => {
                toast.success('Xoá sản phẩm khỏi giỏ hàng thành công')
                fetchCart()
            })
            .catch((err) => {
                toast.error('Xoá sản phẩm khỏi giỏ hàng thất bại')
                console.log(err);
            })
    }
    return (
        <div className={styles.wrapper}>
            <Image
                src={image}
                alt={name}
                width={100}
                height={100}
            />
            <div className={styles.inforProduct}>
                <p className={styles.productName}>{name}</p>
                <span className={styles.productSize}>Size: {size}</span>
                <span>Giá: {amount} x {price}k</span>
                <span className={styles.productCode}>Code: {code}</span>
            </div>
            <CloseIcon
                width={12}
                height={12}
                className={styles.closeIcon}
                onClick={handleDeleteProductFromCart}
            />
        </div>
    );
}

export default React.memo(ItemProduct);