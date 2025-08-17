import styles from './ContentSidebar.module.scss';
function ContentSidebar({ children }) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}

export default ContentSidebar;