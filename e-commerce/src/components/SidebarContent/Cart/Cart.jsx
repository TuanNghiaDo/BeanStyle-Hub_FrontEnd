import { useContext } from 'react';
import clsx from 'clsx'

import { StoreContext } from '@contexts/index';
import StylesCommon from '@componentsSidebar/StylesCommon.module.scss';
import HeaderSidebar from '@componentsSidebar/HeaderSidebar/HeaderSidebar';
import config from '@config/index';
import { CartIcon } from '@icons/Icons';
import styles from './Cart.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import ContentSidebar from '../components/ContentSidebar/ContentSidebar';
import Button from '@components/Button/Button';
import Loading from '@components/Loading/Loading';
function Cart({ cart }) {

    console.log(cart);

    const { isCartLoading } = useContext(StoreContext);

    return (
        <div className={StylesCommon.wrapper}>
            <HeaderSidebar
                to={config.routes.cart}
                icon={<CartIcon width={30} height={30} strokeWidth={0.8} />}
                title="Shopping Cart"
            />

            {cart.length > 0 ? (
                <ContentSidebar>

                    {cart.map((item) => (
                        <ItemProduct
                            key={item.productId}
                            image={item.images[0]}
                            name={item.name}
                            size={item.size}
                            price={item.price}
                            amount={item.quantity}
                            code={item.sku}
                            productId={item.productId}
                            userId={item.userId}
                        />
                    ))}
                    {isCartLoading && (
                        <Loading color="#000" />
                    )}
                </ContentSidebar>
            ) : (
                <div className={styles.emptyCart}>
                    <p>Your cart is empty</p>
                </div>
            )}

            <div className={styles.cartFooter}>
                <div className={styles.totalValue}>
                    <span>Tổng tiền:</span>
                    <span>{cart.reduce((total, item) => total + item.price * item.quantity, 0)}đ</span>
                </div>
                <Button
                    children="Xem chi tiết"
                    className={clsx(StylesCommon.btn, styles.btnViewDetail)}
                />
                <Button
                    secondary
                    children="Thoát"
                    className={StylesCommon.btn}
                />
            </div>

        </div>
    );
}

export default Cart;