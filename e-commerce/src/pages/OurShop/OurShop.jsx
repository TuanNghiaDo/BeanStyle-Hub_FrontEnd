import styles from './OurShop.module.scss'
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import { OurShopProvider } from '@contexts/OurShopProvider'
import Filter from './components/Filter';
import ListProduct from './components/ListProduct';
function OurShop() {
    const targetDate = '2025-08-14T23:59:59';
    return (
        <OurShopProvider>
            <div className={styles.wrapper}>
                <div className={styles.nav}>
                    <span>
                        Home &gt;
                        <strong>Cửa hàng</strong>
                    </span>
                    <span>&lt; Trở về trang trước</span>
                </div>
                <CountDownBanner className={styles.countDownBanner} targetDate={targetDate} />
                <Filter />
                <ListProduct />
            </div>
        </OurShopProvider>
    )
}

export default OurShop;