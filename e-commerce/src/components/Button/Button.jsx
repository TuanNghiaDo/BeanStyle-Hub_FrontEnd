import clsx from 'clsx'
import styles from './Button.module.scss'
function Button(
    {
        title,
        primary,
        secondary,
        medium,
        large,
        className,
        ...props
    }) {

    const classes = clsx(
        styles.wrapper,
        className,
        {
            [styles.primary]: primary,
            [styles.secondary]: secondary,
            [styles.medium]: medium,
            [styles.large]: large,
        }
    )
    return (
        <button className={classes} {...props}>{title}</button>
    );
}

export default Button;