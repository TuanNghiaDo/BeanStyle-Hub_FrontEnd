import React, { useContext, useState } from 'react'
import { StoreContext, ToastContext } from '@contexts/index'
import styles from './ItemProduct.module.scss';
import Image from '@components/Image/Image';
import { CloseIcon } from '@icons/Icons';
import { removeFromCart } from '@api/cartService';
import Loading from '@components/Loading/Loading';
function ItemProduct({ image = '', name = 'No Name', size = 'M', price = 200, amount = 1, code = '0000', productId, userId }) {

    const { fetchCart } = useContext(StoreContext)

    const { toast } = useContext(ToastContext)

    const [isDelete, setIsDelete] = useState(false);

    const handleDeleteProductFromCart = () => {

        setIsDelete(true);
        const data = {
            userId,
            productId
        }

        removeFromCart(data)
            .then(() => {
                setIsDelete(false);
                toast.success('Xoá sản phẩm khỏi giỏ hàng thành công')
                fetchCart()
            })
            .catch((err) => {
                setIsDelete(false);
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
            {isDelete && <Loading color="#000" />}
        </div>
    );
}

export default React.memo(ItemProduct);