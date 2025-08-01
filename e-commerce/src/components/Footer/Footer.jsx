

import styles from './Footer.module.scss';
import { LogoIcon } from '@icons/Icons';
import paypal from '@images/paypal3.png';
import visa from '@images/visa.png';
import Image from '@components/Image/Image';
import MenuItem from '@components/Header/Menu/MenuItem';
import config from '@config/index';
function Footer() {
    return (
        <div className={styles.wrapper}>
            <LogoIcon width='15rem' height='15rem' />
            <div className={styles.nav}>
                <MenuItem title="Trang chủ" to={config.routes.home} className={styles.menuItem} />
                <MenuItem title="Mua sắm" to={config.routes.store} className={styles.menuItem} />
                <MenuItem title="Nhật kí" to='/' className={styles.menuItem} />
                <MenuItem title="Về chúng tôi" to={config.routes.about_us} className={styles.menuItem} />
                <MenuItem title="Liên hệ" to={config.routes.contact} className={styles.menuItem} />
                <MenuItem title="So sánh" to='/' className={styles.menuItem} />
            </div>
            <div className={styles.payment}>
                <span className={styles.title}>Đảm bảo thanh toán an toàn</span>
                <div className={styles.paymentGate}>
                    <Image
                        className={styles.img}
                        src={paypal}
                        alt="Payment Method 1"
                    />
                    <Image
                        className={styles.img}
                        src={visa}
                        alt="Payment Method 2"
                    />
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Bản quyền © 2025 thuộc về DevGay02. Thiết kế bởi ĐTN – Giao diện WordPress & WooCommerce.</p>
            </div>
        </div>
    );
}

export default Footer;