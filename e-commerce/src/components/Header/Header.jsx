import clsx from 'clsx'
import { useState, useEffect } from 'react'

import { LogoIcon } from '@icons/Icons'
import Menu from './Menu/Menu'
import styles from './Header.module.scss'
import MenuItem from './Menu/MenuItem'
import pathConfig from '@config/index'

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
            <Menu position='left' className={styles.menuLeft} />
            <div className={styles.brand}>
                <MenuItem
                    to={pathConfig.routes.home}
                    icon={<LogoIcon />}
                />
            </div>
            <Menu position='right' className={styles.menuRight} />
        </div>
    )
}

export default Header