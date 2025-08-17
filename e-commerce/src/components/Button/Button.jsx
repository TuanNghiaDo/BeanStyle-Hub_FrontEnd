import { Link } from 'react-router-dom';
import clsx from 'clsx'
import styles from './Button.module.scss'

function Button({
    to,
    href,
    primary,
    secondary,
    medium,
    large,
    children,
    className,
    onClick,
    ...passProps
}) {

    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };


    if (to) {
        props.to = to;
        Comp = Link;
    }

    else if (href) {
        props.href = href;
        Comp = 'a';
    }

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
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;