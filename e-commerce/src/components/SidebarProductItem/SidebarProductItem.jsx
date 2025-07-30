
import styles from './SidebarProductItem.module.scss';
import { EyeIcon, CartIconStroked, SyncIcon, HeartIcon } from '@components/Icons/Icons';
function SidebarProductItem() {
    return (
        <div className={styles.wrapper}>
            <button className={styles.btn}>
                <CartIconStroked
                    className={styles.icon}
                    width="2.6rem"
                    height="2.6rem"
                    strokeWidth="0.5"
                />
            </button>
            <button className={styles.btn}>
                <HeartIcon
                    className={styles.icon}
                    width="2.8rem"
                    height="2.8rem"
                    strokeWidth="0.3"

                />
            </button>
            <button className={styles.btn}>
                <SyncIcon
                    className={styles.icon}
                    width="2.4rem"
                    height="2.4rem"

                />
            </button>
            <button className={styles.btn}>
                <EyeIcon
                    className={styles.icon}
                    width="3.0rem"
                    height="3.0rem"
                />
            </button>
        </div>
    );
}

export default SidebarProductItem;