import clsx from 'clsx'
import styles from './Button.module.scss'
function Button(
    {
        title,
        primary,
        outline,
        medium,
        large,
    }) {

    const classes = clsx(styles.wrapper, {
        [styles.primary]: primary,
        [styles.outline]: outline,
        [styles.medium]: medium,
        [styles.large]: large,
    })
    return (
        <button className={classes}>{title}</button>
    );
}

export default Button;