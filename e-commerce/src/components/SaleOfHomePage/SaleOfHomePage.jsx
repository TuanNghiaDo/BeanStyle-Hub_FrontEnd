import { useEffect } from 'react'

import Image from '@components/Image/Image'
import Button from '@components/Button/Button'
import styles from './SaleOfHomePage.module.scss'
import img1 from '@images/z3636332689996_e0cdfbdff297efd84166fc498032d250.jpg'
import img2 from '@images/z5339319879706_041_8d9462a3fa3ea8323b864f42b8df0606.jpg'
import useTranslateXImage from './translateXImage'

function SaleOfHomePage() {
    const {
        translateXPosition,
        handleTranslateX,
        scrollPosition
    } = useTranslateXImage()

    useEffect(() => {
        handleTranslateX()
    }, [scrollPosition])

    return (
        <div className={styles.wrapper}>
            <Image
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
                className={styles.image}
                src={img1}
            />
            <div className={styles.content}>
                <h2
                    className={styles.title}
                >
                    Khuyến mãi trong năm
                </h2>
                <p
                    className={styles.description}
                >
                    Khuyến mãi lớn nhất vào hai ngày 20/02 và ngày 14/08 lên tới 50% cho tất cả các sản phẩm.
                </p>
                <Button
                    secondary
                    className={styles.btn}
                    title="Xem thêm"
                />
            </div>
            <Image
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
                className={styles.image}
                src={img2}
            />

        </div>
    )
}

export default SaleOfHomePage