import clsx from 'clsx'
import { useState, forwardRef } from 'react'

import images from '@images/index'
import styles from './Image.module.scss'

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {

    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    }
    return (
        <img
            className={clsx(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image)