import styles from './FeaturedProducts.module.scss';

function FeaturedProducts() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <div className={styles.line}></div>
                <div className={styles.content}>
                    <span>Đừng bỏ lỡ siêu ưu đãi</span>
                    <h2>Sản phẩm nổi bật của chúng tôi</h2>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}

export default FeaturedProducts;