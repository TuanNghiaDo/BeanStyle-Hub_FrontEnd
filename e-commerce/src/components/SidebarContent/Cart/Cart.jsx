import StylesCommon from '@componentsSidebar/StylesCommon.module.scss';
import HeaderSidebar from '@componentsSidebar/HeaderSidebar/HeaderSidebar';
import config from '@config/index';
import { CartIcon } from '@icons/Icons';
function Cart() {
    return (
        <div className={StylesCommon.wrapper}>
            <HeaderSidebar
                to={config.routes.cart}
                icon={<CartIcon width={30} height={30} strokeWidth={0.8} />}
                title="Shopping Cart"
            />
            {/* Render cart items here */}
        </div>
    );
}

export default Cart;