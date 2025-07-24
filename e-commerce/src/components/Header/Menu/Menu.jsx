import MenuItem from './MenuItem'
import styles from './Menu.module.scss'
import pathConfig from '@config/index'
import { NAV_TEXT } from '@constants/text'
import { FacebookIcon, InstagramIcon, TiktokIcon, SyncIcon, HeartIcon, CartIcon } from '@icons/Icons'

function Menu({ className }) {

    if (className === 'menuLeft') {
        return (
            <div className={styles.menuLeft}>
                <div className={styles.navIcons}>
                    <MenuItem
                        href={pathConfig.outsidePaths.facebook}
                        icon={<FacebookIcon />}
                    />
                    <MenuItem
                        href={pathConfig.outsidePaths.instagram}
                        icon={<InstagramIcon />}
                    />
                    <MenuItem
                        href={pathConfig.outsidePaths.tiktok}
                        icon={<TiktokIcon />}
                    />
                </div>
                <div className={styles.navText}>
                    <MenuItem
                        to={pathConfig.routes.home}
                        title={NAV_TEXT.HOME}
                        isActive={true}
                    />
                    <MenuItem
                        to={pathConfig.routes.store}
                        title={NAV_TEXT.SHOP}
                        isActive={true}
                    />
                    <MenuItem
                        to={pathConfig.routes.about_us}
                        title={NAV_TEXT.ABOUT}
                        isActive={true}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className={className = styles.menuRight}>
                <div className={styles.navText}>
                    <MenuItem
                        to={pathConfig.routes.contact}
                        title={NAV_TEXT.CONTACT}
                    />
                    <MenuItem
                        to={pathConfig.routes.search}
                        title={NAV_TEXT.SEARCH}
                    />
                    <MenuItem
                        to={pathConfig.routes.login}
                        title={NAV_TEXT.LOGIN}
                    />
                </div>

                <div className={styles.actionIcons}>
                    <SyncIcon />
                    <HeartIcon />
                    <CartIcon />
                </div>
            </div >
        )
    }

}

export default Menu