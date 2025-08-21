
import { Home, OurShop, AboutUs, Contact, ForgotPassword, Cart, Checkout } from '@pages/pages.js';
import config from '@config/index';
const publicRoutes = [
    { path: config.routes.home, component: Home },  //Route components that are accessible without authentication
    { path: config.routes.store, component: OurShop },
    { path: config.routes.about_us, component: AboutUs },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.forgot_password, component: ForgotPassword },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: Checkout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }