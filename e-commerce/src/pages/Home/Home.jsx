import { useEffect, useState } from 'react'
import clsx from 'clsx'

import styles from './Home.module.scss';
import Banner from '@components/Banner/Banner';
import InforShop from '@components/InforShop/InforShop';
import HeadingFeatured from '@components/HeadingFeatured/HeadingFeatured';
import ProductListTitle from '@components/ProductListTitle/ProductListTitle';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import { getProducts } from '@api/productsService'
import SaleOfHomePage from '@components/SaleOfHomePage/SaleOfHomePage';

function Home() {

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getProducts()
            .then(data => {
                setListProduct(data.contents);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, [])

    return (
        <div className={clsx(styles.wrapper)}>
            <Banner />
            <InforShop />
            <HeadingFeatured />
            <ProductListTitle products={listProduct.slice(0, 2)} />
            <PopularProduct
                listProduct={listProduct.slice(2, 11)}
            />
            <SaleOfHomePage />
        </div>
    );
}

export default Home;
