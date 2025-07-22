import styles from './Layout.module.scss';

function MainLayout({ children }) {

    const { wrapper, container } = styles
    return (
        <main className={wrapper}>
            <div className={container}>{children}</div>
        </main>
    );
}

export default MainLayout;