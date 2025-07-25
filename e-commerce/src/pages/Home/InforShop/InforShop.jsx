
import styles from './InforShop.module.scss'
import { ShippingIcon, PaymentIcon, CancelIcon, SupportIcon } from '@icons/Icons'
import { SPECIAL_OFFERS, OFFER_DETAILS } from '@constants/text'
function InforShop() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.inforItem}>
                <ShippingIcon className={styles.icon} />
                <div className={styles.content}>
                    <h2 className={styles.title}>{SPECIAL_OFFERS.FREE_SHIPPING}</h2>
                    <span className={styles.description}>{OFFER_DETAILS.FREE_SHIPPING}</span>
                </div>


            </div>
            <div className={styles.inforItem}>
                <PaymentIcon className={styles.icon} />
                <div className={styles.content}>
                    <h2 className={styles.title}>{SPECIAL_OFFERS.SECURE_PAYMENT}</h2>
                    <span className={styles.description}>{OFFER_DETAILS.SECURE_PAYMENT}</span>
                </div>
            </div>
            <div className={styles.inforItem}>
                <CancelIcon className={styles.icon} />
                <div className={styles.content}>
                    <h2 className={styles.title}>{SPECIAL_OFFERS.EASY_CANCELLATION}</h2>
                    <span className={styles.description}>{OFFER_DETAILS.EASY_CANCELLATION}</span>
                </div>
            </div>
            <div className={styles.inforItem}>
                <SupportIcon className={styles.icon} />
                <div className={styles.content}>
                    <h2 className={styles.title}>{SPECIAL_OFFERS.SUPPORT_24_7}</h2>
                    <span className={styles.description}>{OFFER_DETAILS.SUPPORT_24_7}</span>
                </div>
            </div>
        </div>
    );
}

export default InforShop;