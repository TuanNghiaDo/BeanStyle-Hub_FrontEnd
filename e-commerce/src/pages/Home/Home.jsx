import clsx from 'clsx'
import styles from './Home.module.scss';
import Banner from './Banner/Banner';
function Home() {
    return (
        <div className={clsx(styles.wrapper)}>
            <Banner />
        </div>
    );
}

export default Home;