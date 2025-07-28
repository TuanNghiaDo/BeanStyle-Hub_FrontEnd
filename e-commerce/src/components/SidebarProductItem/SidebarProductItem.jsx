import styles from './SidebarProductItem.module.scss';
import { EyeIcon, CartIcon, SyncIcon, HeartIcon } from '@components/Icons/Icons';
function SidebarProductItem() {
    return (
        <div className={styles.wrapper}>
            <button className={styles.btn}>
                <CartIcon
                    className={styles.icon}
                    width="2.6rem"
                    height="2.6rem"

                />
            </button>
            <button className={styles.btn}>
                <HeartIcon
                    className={styles.icon}
                    width="2.6rem"
                    height="2.6rem"

                />
            </button>
            <button className={styles.btn}>
                <SyncIcon
                    className={styles.icon}
                    width="2.6rem"
                    height="2.6rem"

                />
            </button>
            <button className={styles.btn}>
                <EyeIcon
                    className={styles.icon}
                    width="2.4rem"
                    height="2.4rem"
                />
            </button>
        </div>
    );
}

export default SidebarProductItem;