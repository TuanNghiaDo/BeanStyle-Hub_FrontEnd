import clsx from 'clsx'
import { useState, useEffect } from 'react'

import { LogoIcon } from '@icons/Icons'
import Menu from './Menu/Menu'
import styles from './Header.module.scss'

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

    return (
        <div className={clsx(styles.wrapper, { [styles.scrolled]: isScrolled })}>
            <Menu className="menuLeft" />
            <div className={styles.brand}>
                <LogoIcon />
            </div>
            <Menu className="menuRight" />
        </div>
    )
}

export default Header