import clsx from 'clsx'
import styles from './Sidebar.module.scss'
import { useContext } from 'react'
import { SidebarContext } from '@contexts/index'
import { CloseIcon } from '@icons/Icons'
import Login from '@components/SidebarContent/Login/Login'
import WishList from '@components/SidebarContent/WishList/WishList'
import Cart from '@components/SidebarContent/Cart/Cart'
import Compare from '@components/SidebarContent/Compare/Compare'
function Sidebar() {

    const { isOpen, setIsOpen, type } = useContext(SidebarContext)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />
            case 'wishList':
                return <WishList />
            case 'cart':
                return <Cart />
            case 'compare':
                return <Compare />
            default:
                break
        }
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={clsx({ [styles.overlay]: isOpen })}
                onClick={handleToggle}></div>
            <div
                className={clsx(styles.sidebar, { [styles.slideSidebar]: isOpen })}
            >
                {isOpen && <div className={styles.closeIcon} onClick={handleToggle}>
                    <CloseIcon />
                </div>}
                {handleRenderContent()}
            </div>
        </div >
    );
}

export default Sidebar;