import clsx from 'clsx'
import MenuItem from './MenuItem'
import styles from './Menu.module.scss'
import pathConfig from '@config/index'
import { NAV_TEXT } from '@constants/text'
import { FacebookIcon, InstagramIcon, TiktokIcon, HeartIcon, CartIcon, SyncIconLarge } from '@icons/Icons'

function Menu({ className, position }) {

    if (position === 'left') {
        return (
            <div className={className} >
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
                        className={styles.menuItem}
                        to={pathConfig.routes.home}
                        title={NAV_TEXT.HOME}
                    />
                    <MenuItem
                        className={styles.menuItem}
                        to={pathConfig.routes.store}
                        title={NAV_TEXT.SHOP}
                    />
                    <MenuItem
                        className={styles.menuItem}
                        to={pathConfig.routes.about_us}
                        title={NAV_TEXT.ABOUT}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className={className}>
                <div className={styles.navText}>
                    <MenuItem
                        className={styles.menuItem}
                        to={pathConfig.routes.contact}
                        title={NAV_TEXT.CONTACT}
                    />
                    <MenuItem
                        className={clsx(styles.menuItem, styles.btn)}
                        title={NAV_TEXT.SEARCH}
                    />
                    <MenuItem
                        className={clsx(styles.menuItem, styles.btn)}
                        title={NAV_TEXT.LOGIN}
                    />
                </div>

                <div className={styles.actionIcons}>
                    <MenuItem
                        className={styles.btn}
                        icon={<SyncIconLarge />}
                    />
                    <MenuItem
                        className={styles.btn}
                        icon={<HeartIcon />}
                    />
                    <MenuItem
                        className={styles.btn}
                        icon={<CartIcon />}
                    />
                </div>
            </div >
        )
    }

}

export default Menu