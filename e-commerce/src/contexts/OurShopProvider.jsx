import { useState } from 'react'
import { OurShopContext } from '@contexts/index'

export const OurShopProvider = ({ children }) => {

    const sortOptions = [
        { value: '0', label: 'Mặc định' },
        { value: '1', label: 'Phổ biến' },
        { value: '2', label: 'Đánh giá' },
        { value: '3', label: 'Giá: thấp đến cao' },
        { value: '4', label: 'Giá: cao đến thấp' },
    ]

    const showOptions = [
        { label: '8', value: '8' },
        { label: '12', value: '12' },
        { label: 'All', value: 'All' },
    ]

    const [sortId, setSortId] = useState('0');

    const [showId, setShowId] = useState('8');

    const [showGrid, setShowGrid] = useState(true);

    const values = {
        sortOptions,
        showOptions,
        sortId,
        setSortId,
        showId,
        setShowId,
        showGrid,
        setShowGrid
    }


    return (
        <OurShopContext.Provider value={values}>
            {children}
        </OurShopContext.Provider>
    )
}
