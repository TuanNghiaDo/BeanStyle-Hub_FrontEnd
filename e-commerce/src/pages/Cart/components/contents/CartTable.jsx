import React, { useState } from 'react';
import styles from './CartTable.module.scss';
import { DeleteIcon } from '@icons/Icons';
// Dữ liệu giả lập cho các sản phẩm
const initialProducts = [
    {
        id: 1,
        image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min-285x340.jpg',
        name: 'Consectetur nibh at',
        size: 'M',
        price: 119.99,
        sku: '12349',
        quantity: 2,
    },
    {
        id: 2,
        image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg',
        name: '10K Yellow Gold',
        size: 'M',
        price: 99.99,
        sku: '12345',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min-285x340.jpg',
        name: 'Amet faucibus nunc',
        size: 'M',
        price: 1879.99,
        sku: '87654',
        quantity: 1,
    },
];

const CartTable = () => {
    const [products, setProducts] = useState(initialProducts);

    const handleQuantityChange = (productId, newQuantity) => {
        setProducts(
            products.map((product) =>
                product.id === productId ? { ...product, quantity: newQuantity } : product
            )
        );
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
                        <tr key={product.id}>
                            <td className={styles.productDetails}>
                                <img src={product.image} alt={product.name} />
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
                                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
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