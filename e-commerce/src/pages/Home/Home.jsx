import clsx from 'clsx'
import styles from './Home.module.scss';
import Banner from './Banner/Banner';
import InforShop from './InforShop/InforShop';
function Home() {
    return (
        <div className={clsx(styles.wrapper)}>
            <Banner />
            <InforShop />
        </div>
    );
}

export default Home;
