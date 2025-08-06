import styles from './ItemProduct.module.scss';
import Image from '@components/Image/Image';
import { CloseIcon } from '@icons/Icons';
function ItemProduct({ image = '', name = 'No Name', price = 0 }) {
    return (
        <div className={styles.wrapper}>
            <Image
                src={image}
                alt={name}
                width={100}
                height={100}
            />
            <div className={styles.inforProduct}>
                <p className={styles.productName}>{name}</p>
                <span>{price}k</span>
            </div>
            <CloseIcon
                width={12}
                height={12}
                className={styles.closeIcon}
            />
        </div>
    );
}

export default ItemProduct;