import clsx from 'clsx'
import { useState, useEffect } from 'react'

import { FacebookIcon, InstagramIcon, TiktokIcon, CartIcon, HeartIcon, LogoIcon, SyncIcon } from "@icons/Icons"
import styles from './Header.module.scss'
import { dataMenu as DataMenu } from './constant.js'

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
            <div className={styles.actions}>
                <div className={styles.socialMedia}>
                    <a href="/">
                        <FacebookIcon />
                    </a>
                    <a href="/">
                        <InstagramIcon />
                    </a>
                    <a href="/">
                        <TiktokIcon />
                    </a>
                </div>
                <div className={styles.nav}>
                    {DataMenu.slice(0, 3).map((item, index) => (
                        <a href="/" key={index}>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className={styles.brand}>
                <LogoIcon />
            </div>
            <div className={styles.actions}>
                <div className={styles.nav}>
                    {DataMenu.slice(3, 6).map((item, index) => (
                        <a href="/" key={index}>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>
                <div className={styles.iconActions}>
                    <a href="/">
                        <SyncIcon />
                    </a>
                    <a href="/">
                        <HeartIcon />
                    </a>
                    <a href="/">
                        <CartIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header