import { useState, useEffect } from 'react'
import { OurShopContext } from '@contexts/index'
import { getProducts } from '@api/productsService'
export const OurShopProvider = ({ children }) => {

    const handleLoadMore = () => {

        setLoadMore(true);
        const query = {
            sortType: sortId,
            page: +page + 1,
            limit: showId
        }

        getProducts(query)
            .then(res => {
                setProducts((preProductList) => [...preProductList, ...res.contents]);
                setPage(+res.page)
                setTotal(res.total);
                setLoadMore(false);
            })
            .catch(err => {
                console.error('API Error: ', err);
            })
    }

    const sortOptions = [
        { value: '0', label: 'Mặc định' },
        { value: '1', label: 'Phổ biến' },
        { value: '2', label: 'Đánh giá' },
        { value: '3', label: 'Mới nhất' },
        { value: '4', label: 'Giá: thấp đến cao' },
        { value: '5', label: 'Giá: cao đến thấp' },
    ]

    const showOptions = [
        { label: '8', value: '8' },
        { label: '12', value: '12' },
        { label: 'All', value: 'All' },
    ]

    const [sortId, setSortId] = useState('0');

    const [showId, setShowId] = useState('8');

    const [showGrid, setShowGrid] = useState(true);

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(1);

    const [total, setTotal] = useState(0);

    const [loadMore, setLoadMore] = useState(false);

    const values = {
        sortOptions,
        showOptions,
        sortId,
        setSortId,
        showId,
        setShowId,
        showGrid,
        setShowGrid,
        products,
        handleLoadMore,
        loading,
        total,
        loadMore,
        setLoadMore
    }

    useEffect(() => {
        const query = {
            sortType: sortId,
            page: 1,
            limit: showId
        }

        setLoading(true);

        getProducts(query)
            .then(res => {
                setProducts(res.contents);
                setTotal(res.total);
                setLoading(false);
            })
            .catch(err => {
                console.error('API Error: ', err);
            })
    }, [sortId, showId])

    console.log(total)

    return (
        <OurShopContext.Provider value={values}>
            {children}
        </OurShopContext.Provider>
    )
}
