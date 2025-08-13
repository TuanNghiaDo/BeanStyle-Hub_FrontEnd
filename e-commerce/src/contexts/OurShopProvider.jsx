import { useState } from 'react'
import { OurShopContext } from '@contexts/index'

export const OurShopProvider = ({ children }) => {

    const sortOptions = [
        { value: '0', label: 'Mac dinh' },
        { value: '1', label: 'Pho bien' },
        { value: '2', label: 'Danh gia' },
        { value: '3', label: 'Gia: thap den cao' },
        { value: '4', label: 'Gia: cao den thap' },
    ]

    const showOptions = [
        { label: '8', value: '8' },
        { label: '12', value: '12' },
        { label: 'All', value: 'All' },
    ]

    const values = {
        sortOptions,
        showOptions

    }

    return (
        <OurShopContext.Provider value={values}>
            {children}
        </OurShopContext.Provider>
    )
}
