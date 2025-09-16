
import clsx from 'clsx'
import styles from './Sidebar.module.scss'
import { useContext } from 'react'
import { SidebarContext, StoreContext } from '@contexts/index'
import { CloseIcon } from '@icons/Icons'
import Login from '@components/SidebarContent/Login/Login'
import WishList from '@components/SidebarContent/WishList/WishList'
import Cart from '@components/SidebarContent/Cart/Cart'
import Compare from '@components/SidebarContent/Compare/Compare'
import ProductDetail from '@components/SidebarContent/ProductDetail/ProductDetail'

function Sidebar() {

    const { isOpen, setIsOpen, type } = useContext(SidebarContext)

    const { cart, userInfo } = useContext(StoreContext)

    const userId = userInfo?.id

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }


    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />
            case 'wishList':
                if (userId) return <WishList />
                else return <Login />
            case 'cart':
                if (userId) {
                    return <Cart cart={cart} />
                }
                else return <Login />
            case 'compare':
                return <Compare />
            case 'productDetail':
                return <ProductDetail />
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