import clsx from 'clsx'
import { useState, useEffect, useContext } from 'react'

import { LogoIcon } from '@icons/Icons'
import Menu from './Menu/Menu'
import styles from './Header.module.scss'
import { SidebarContext } from '@contexts/Sidebar'

function Header() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const { isOpen } = useContext(SidebarContext)

    console.log('isOpen:', isOpen)

    return (
        <div className={clsx(styles.wrapper, { [styles.scrolled]: isScrolled })}>
            <Menu position='left' className={styles.menuLeft} />
            <div className={styles.brand}>
                <LogoIcon />
            </div>
            <Menu position='right' className={styles.menuRight} />
        </div>
    )
}

export default Header