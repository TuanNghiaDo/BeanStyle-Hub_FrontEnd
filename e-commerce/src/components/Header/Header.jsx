import clsx from "clsx";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "@icons/Icons";
import styles from './Header.module.scss';
import { CartIcon, HeartIcon, LogoIcon, SyncIcon } from "../Icons/Icons";



function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.actions}>
                <div className={styles.socialMedia}>
                    <a href="/">
                        <FacebookIcon />
                    </a>
                    <a href="/">
                        <InstagramIcon />
                    </a>
                    <a href="/">
                        <TiktokIcon />
                    </a>
                </div>
                <div className={styles.nav}>
                    <a href="/">
                        <span>Sản phẩm</span>
                    </a>
                    <a href="/">
                        <span>Cửa hàng</span>
                    </a>
                    <a href="/">
                        <span>Về chúng tôi</span>
                    </a>
                </div>
            </div>
            <div className={styles.brand}>
                <LogoIcon />
            </div>
            <div className={styles.actions}>
                <div className={styles.nav}>
                    <a href="/">
                        <span>Liên hệ</span>
                    </a>
                    <a href="/">
                        <span>Tìm kiếm</span>
                    </a>
                    <a href="/">
                        <span>Đăng nhập</span>
                    </a>
                </div>
                <div className={styles.iconActions}>
                    <a href="/">
                        <SyncIcon />
                    </a>
                    <a href="/">
                        <HeartIcon />
                    </a>
                    <a href="/">
                        <CartIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;