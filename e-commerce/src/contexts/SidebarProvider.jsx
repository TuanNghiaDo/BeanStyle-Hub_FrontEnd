import { useState } from 'react'
import { SidebarContext } from './index'

export const SidebarProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState('')

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, type, setType }}>
            {children}
        </SidebarContext.Provider>
    )
}