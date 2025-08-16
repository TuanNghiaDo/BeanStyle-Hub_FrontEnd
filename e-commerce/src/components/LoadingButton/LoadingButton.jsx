import { LoadingIcon } from '@icons/Icons';
import styles from './LoadingButton.module.scss';
function LoadingButton() {
    return (
        <LoadingIcon className={styles.loading} />
    );
}

export default LoadingButton;