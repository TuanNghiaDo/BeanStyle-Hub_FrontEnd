import { NavLink } from "react-router-dom"
import clsx from 'clsx'
import { useContext } from 'react'

import { SidebarContext } from '@contexts/index'
import styles from './Menu.module.scss'

function MenuItem({ icon, to, href, title, className, typeContentSidebar, ...props }) {

    const { isOpen, setIsOpen, setType } = useContext(SidebarContext)

    let Component = 'button'

    const _props = { ...props }

    if (to) {
        _props.to = to
        Component = NavLink
    } else if (href) {
        _props.target = '_blank'
        _props.href = href
        Component = 'a'
    } else {
        _props.onClick = () => {
            setIsOpen(!isOpen)
            setType(typeContentSidebar)
        }
    }

    if (Component === NavLink) {
        _props.className = ({ isActive }) => clsx(className, { [styles.active]: isActive })
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