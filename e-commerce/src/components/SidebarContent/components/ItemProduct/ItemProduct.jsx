import styles from './ItemProduct.module.scss';
import Image from '@components/Image/Image';
import { CloseIcon } from '@icons/Icons';
function ItemProduct({ image = '', name = 'No Name', size = 'M', price = 200, amount = 1, code = '0000' }) {


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
                <span className={styles.productSize}>Size: {size}</span>
                <span>Giá: {amount} x {price}k</span>
                <span className={styles.productCode}>Code: {code}</span>
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