import styles from './OurShop.module.scss'
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import { OurShopContext } from '@contexts/index';
function OurShop() {
    const targetDate = '2025-08-14T23:59:59';
    return (
        <OurShopContext.Provider value={{}}>
            <div className={styles.wrapper}>
                <div className={styles.nav}>
                    <span>
                        Home &gt;
                        <strong>Cửa hàng</strong>
                    </span>
                    <span>&lt; Trở về trang trước</span>
                </div>
                <CountDownBanner className={styles.countDownBanner} targetDate={targetDate} />
            </div>
        </OurShopContext.Provider>
    )
}

export default OurShop;