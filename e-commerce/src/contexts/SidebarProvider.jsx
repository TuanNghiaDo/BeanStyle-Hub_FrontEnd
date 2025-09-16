
import { useState } from 'react'
import { SidebarContext } from './index'

export const SidebarProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState('')
    const [productDetail, setProductDetail] = useState(null)

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, type, setType, productDetail, setProductDetail }}>
            {children}
        </SidebarContext.Provider>
    )
}
