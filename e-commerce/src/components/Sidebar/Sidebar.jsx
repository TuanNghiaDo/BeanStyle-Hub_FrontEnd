import clsx from 'clsx'
import styles from './Sidebar.module.scss'
import { useContext } from 'react'
import { SidebarContext } from '@contexts/SidebarProvider'
function Sidebar() {

    const { isOpen, setIsOpen } = useContext(SidebarContext)
    return (
        <div className={styles.wrapper}>
            <div className={clsx({ [styles.overlay]: isOpen })}></div>
            <div className={clsx(styles.sidebar, { [styles.slideSidebar]: isOpen })}>
                sidebar
            </div>
        </div >
    );
}

export default Sidebar;