
import { Home, OurShop, AboutUs, Contact } from '@pages/Pages';
import config from '@config/index';
const publicRoutes = [
    { path: config.routes.home, component: Home },  //Route components that are accessible without authentication
    { path: config.routes.store, component: OurShop },
    { path: config.routes.about_us, component: AboutUs },
    { path: config.routes.contact, component: Contact },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }