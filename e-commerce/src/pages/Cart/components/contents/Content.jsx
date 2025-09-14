
import { useContext } from 'react';

import styles from './Content.module.scss';
import CartTable from './CartTable.jsx';
import CartSummary from './CartSummary.jsx';
import Button from '@components/Button/Button.jsx';
import { DeleteIcon } from '@components/icons/Icons';
import { StoreContext } from '@contexts/index';
import { addToCart, removeFromCart } from '@api/cartService';
function Content() {

    const { cart, fetchCart, isCartLoading } = useContext(StoreContext);


    const handleReplaceQuantity = (data) => {

        addToCart(data)
            .then((res) => {
                console.log("Update cart successfully:", res);
                fetchCart();
            })
            .catch((error) => {
                console.error("Error updating cart:", error);
            })
    }

    const handleDeleteProduct = (data) => {
        removeFromCart(data)
            .then((res) => {
                console.log("Remove product from cart successfully:", res);
                fetchCart();
            })
            .catch((error) => {
                console.error("Error removing product from cart:", error);
            })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.cartTable}>
                <CartTable
                    cart={cart}
                    getData={handleReplaceQuantity}
                    isLoading={isCartLoading}
                    removeProduct={handleDeleteProduct}
                />
                <div className={styles.cartFooter}>
                    <div className={styles.couponWrapper}>
                        <input
                            type="text"
                            placeholder="Nhập mã giảm giá ..."
                            className={styles.couponInput}
                        />
                        <Button
                            secondary
                            className={styles.couponBtn}
                        >
                            Áp dụng
                        </Button>
                    </div>
                    <div className={styles.deleteAllWrapper}>
                        <Button
                            secondary
                            className={styles.deleteBtn}
                        >
                            <DeleteIcon
                                className={styles.deleteIcon}
                            />
                            <span>Xóa toàn bộ sản phẩm khỏi giỏ hàng</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.cartSummary}>
                <CartSummary
                    cart={cart}
                    isLoading={isCartLoading}
                />
            </div>
        </div>
    );
}

export default Content;