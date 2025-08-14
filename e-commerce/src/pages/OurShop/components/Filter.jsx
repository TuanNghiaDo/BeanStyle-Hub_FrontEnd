import { useContext } from 'react'
import styles from './Filter.module.scss'
import { OurShopContext } from '@contexts/index'
import { GridIcon, ListIcon } from '@icons/Icons'
function Filter() {

    const { sortOptions, showOptions, sortId, setSortId, showId, setShowId, showGrid, setShowGrid } = useContext(OurShopContext);

    const handleSortChange = (e) => {
        setSortId(e.target.value);
    }

    const handleShowChange = (e) => {
        setShowId(e.target.value);
    }

    const handleShowGrid = () => {
        setShowGrid(true);
    }

    const handleShowNoGrid = () => {
        setShowGrid(false);
    }

    console.log('Sort By: ', sortId);
    console.log('Show Count: ', showId);
    console.log('Show Grid: ', showGrid);

    return (
        <div className={styles.wrapper}>
            <div className={styles.filterLeft}>
                <select
                    onChange={handleSortChange}
                >
                    {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <GridIcon
                    className={styles.icon}
                    onClick={handleShowGrid}
                />
                <ListIcon
                    className={styles.icon}
                    onClick={handleShowNoGrid}
                />
            </div>
            <div className={styles.filterRight}>
                <span>Show</span>
                <select
                    onChange={handleShowChange}
                >
                    {showOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Filter;