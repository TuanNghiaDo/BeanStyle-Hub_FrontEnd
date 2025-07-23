import clsx from 'clsx'
import styles from './Home.module.scss';
function Home() {
    return (
        <div className={clsx(styles.wrapper)}>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>BeanStyle-Hub</h1>
                    <p>Làm cho bạn tự tin hơn khi ra khỏi nhà...</p>
                    <button className={styles.shopButton}>Go to shop</button>
                </div>
            </section>
        </div>
    );
}

export default Home;