import clsx from 'clsx'
import styles from './Sidebar.module.scss'
import { useContext } from 'react'
import { SidebarContext } from '@contexts/SidebarProvider'
import { CloseIcon } from '@icons/Icons'
function Sidebar() {

    const { isOpen, setIsOpen } = useContext(SidebarContext)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={clsx({ [styles.overlay]: isOpen })}
                onClick={handleToggle}></div>
            <div className={clsx(styles.sidebar, { [styles.slideSidebar]: isOpen })}>
                {isOpen && <div className={styles.closeIcon} onClick={handleToggle}>
                    <CloseIcon />
                </div>}
                sidebar
            </div>
        </div >
    );
}

export default Sidebar;