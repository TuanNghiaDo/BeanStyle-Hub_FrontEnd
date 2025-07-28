import clsx from 'clsx'

import styles from './Home.module.scss';
import Banner from '@components/Banner/Banner';
import InforShop from '@components/InforShop/InforShop';
import HeadingFeatured from '@components/HeadingFeatured/HeadingFeatured';
import ProductListTitle from '@components/ProductListTitle/ProductListTitle';

function Home() {
    return (
        <div className={clsx(styles.wrapper)}>
            <Banner />
            <InforShop />
            <HeadingFeatured />
            <ProductListTitle />
        </div>
    );
}

export default Home;
