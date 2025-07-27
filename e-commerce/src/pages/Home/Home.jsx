import clsx from 'clsx'
import styles from './Home.module.scss';
import Banner from './Banner/Banner';
import InforShop from './InforShop/InforShop';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
function Home() {
    return (
        <div className={clsx(styles.wrapper)}>
            <Banner />
            <InforShop />
            <FeaturedProducts />
        </div>
    );
}

export default Home;
