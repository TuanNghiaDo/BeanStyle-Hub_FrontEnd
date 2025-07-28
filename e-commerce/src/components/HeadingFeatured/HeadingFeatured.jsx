import styles from './HeadingFeatured.module.scss';

function HeadingFeatured() {
    return (

        <div className={styles.wrapper}>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <span>Đừng bỏ lỡ siêu ưu đãi</span>
                <h2>Sản phẩm nổi bật của chúng tôi</h2>
            </div>
            <div className={styles.line}></div>
        </div>

    );
}

export default HeadingFeatured;