import Cookies from 'js-cookie';
import { useState } from 'react';

import { addToCart } from '@api/cartService';
import styles from './CartTable.module.scss';
import { DeleteIcon } from '@icons/Icons';

const CartTable = ({ cart }) => {
    const userId = Cookies.get('userId');
    const [products, setProducts] = useState(cart);

    const handleQuantityChange = async (userId, productId, newQuantity, size) => {

        const data = {
            userId: userId,
            productId: productId,
            quantity: newQuantity,
            size: size,
            isMultiple: false
        }

        try {
            await addToCart(data);

            setProducts(
                products.map((product) =>
                    product.productId === productId && product.size === size ? { ...product, quantity: newQuantity } : product
                )
            );
        } catch (error) {
            console.error("Failed to update cart:", error);
        }

    };

    const calculateSubtotal = (price, quantity) => {
        return (price * quantity).toFixed(2);
    };

    const showOptions = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
    ]

    return (
        <div className={styles.shoppingCart}>
            <table>
                <thead>
                    <tr>
                        <th className={styles.productHeader}>SẢN PHẨM</th>
                        <th>GIÁ</th>
                        <th>MÃ SẢN PHẨM</th>
                        <th>SỐ LƯỢNG</th>
                        <th className={styles.subtotalHeader}>TỔNG TIỀN SẢN PHẨM</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={`${product.productId}-${product.size}`}>
                            <td className={styles.productDetails}>
                                <img src={product.images[0]} alt={product.name} />
                                <div className={styles.productInfo}>
                                    <span className={styles.productName}>{product.name}</span>
                                    <span className={styles.productSize}>Size: {product.size}</span>
                                </div>
                                <button className={styles.deleteIcon}>
                                    <DeleteIcon width={20} height={20} />
                                </button>
                            </td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.sku}</td>
                            <td>
                                <select
                                    className={styles.quantitySelect}
                                    value={product.quantity}
                                    onChange={(e) => handleQuantityChange(userId, product.productId, parseInt(e.target.value, 10), product.size)}
                                >
                                    {showOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td className={styles.subtotal}>${calculateSubtotal(product.price, product.quantity)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;