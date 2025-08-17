
import StylesCommon from '@componentsSidebar/StylesCommon.module.scss';
import HeaderSidebar from '@componentsSidebar/HeaderSidebar/HeaderSidebar';
import config from '@config/index';
import { CartIcon } from '@icons/Icons';
import styles from './Cart.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import ContentSidebar from '../components/ContentSidebar/ContentSidebar';
function Cart({ cart }) {

    console.log(cart);

    return (
        <div className={StylesCommon.wrapper}>
            <HeaderSidebar
                to={config.routes.cart}
                icon={<CartIcon width={30} height={30} strokeWidth={0.8} />}
                title="Shopping Cart"
            />

            {cart.length > 0 ? (
                <ContentSidebar>

                    {cart.map((item, index) => (
                        <ItemProduct
                            key={index}
                            image={item.images[0]}
                            name={item.name}
                            size={item.size}
                            price={item.price}
                            amount={item.amount}
                            code={item.code}
                        />
                    ))}
                </ContentSidebar>
            ) : (
                <div className={styles.emptyCart}>
                    <p>Your cart is empty</p>
                </div>
            )}

        </div>
    );
}

export default Cart;