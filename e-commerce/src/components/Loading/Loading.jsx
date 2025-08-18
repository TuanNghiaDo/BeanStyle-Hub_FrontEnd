import clsx from 'clsx'
import { LoadingIcon } from '@icons/Icons'
import styles from './Loading.module.scss'
function Loading({ color, width, height, className }) {
    return (
        <div className={styles.loadingOverlay}>
            <LoadingIcon
                color={color}
                width={width}
                height={height}
                className={clsx(styles.loading, className)}
            />
        </div>
    );
}

export default Loading;