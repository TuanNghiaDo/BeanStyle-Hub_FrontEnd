import styles from './Banner.module.scss'
import Button from '@components/Button/Button'
function Banner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1>BeanStyle-Hub</h1>
                <p>Làm cho bạn tự tin hơn khi ra khỏi nhà...</p>
                <Button primary>Mua sắm</Button>
            </div>
        </div>
    );
}

export default Banner