import MenuItem from '@components/Header/Menu/MenuItem';
import styles from './HeaderSidebar.module.scss'

function HeaderSidebar({ icon, title, to }) {
    return (
        <div className={styles.wrapper}>
            <MenuItem
                className={styles.headerContent}
                to={to}
                icon={icon}
                title={title}
            />
        </div>
    );
}

export default HeaderSidebar;