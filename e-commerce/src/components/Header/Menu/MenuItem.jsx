import { NavLink } from "react-router-dom"
import clsx from 'clsx'

import { FacebookIcon, InstagramIcon, TiktokIcon, CartIcon, HeartIcon, LogoIcon, SyncIcon } from "@icons/Icons"
import styles from './Menu.module.scss'

function MenuItem({ icon, to, href, title, className, ...props }) {

    let Component = 'a'

    const _props = { ...props }

    if (to) {
        _props.to = to
        Component = NavLink
    } else {
        _props.href = href
        Component = 'a'
    }

    if (Component === NavLink) {
        _props.className = ({ isActive }) => clsx(styles.menuItem, className, { [styles.active]: isActive })
    } else {
        _props.className = clsx(styles.menuItem, className)
    }

    return (
        <Component {..._props}>
            {icon}
            {title && <span>{title}</span>}
        </Component>
    )
}

export default MenuItem