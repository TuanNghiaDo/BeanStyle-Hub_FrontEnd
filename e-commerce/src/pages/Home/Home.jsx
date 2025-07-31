import { useEffect } from 'react'
import clsx from 'clsx'

import styles from './Home.module.scss';
import Banner from '@components/Banner/Banner';
import InforShop from '@components/InforShop/InforShop';
import HeadingFeatured from '@components/HeadingFeatured/HeadingFeatured';
import ProductListTitle from '@components/ProductListTitle/ProductListTitle';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import { getProducts } from '@api/productsService'

function Home() {

    useEffect(() => {

        console.log('Fetching products...');
        getProducts()
            .then(data => {
                console.log('Fetched products:', data);
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
            <ProductListTitle />
            <PopularProduct />
        </div>
    );
}

export default Home;
