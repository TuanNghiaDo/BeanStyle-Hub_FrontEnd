import styles from "./CountDownBanner.module.scss";
import CountdownTimer from "@components/CountDownTimer/CountDownTimer";
import Button from "@components/Button/Button";
function CountDownBanner({ targetDate }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <h2>Sản phẩm hot sắp mở bán</h2>
            <Button title='Mua ngay' />
        </div>
    );
}

export default CountDownBanner;