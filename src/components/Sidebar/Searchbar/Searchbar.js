import React, { useContext } from 'react';
import styles from './Searchbar.module.css';
import { ThemeContext } from '../../../themeContext'; 

const Searchbar = props => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.wrapper} style={{ backgroundColor: theme.headerColor2}}>
            <div className={styles.inputContainer}>
                <input className={styles.searchinput} type="search" /> 
                <div className={styles.backIcon}>
                <span>
                        <svg viewBox="0 0 24 24" width="24" height="24" class="">
                            <path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z">
                            </path>
                        </svg>
                    </span>
                </div>
                <div className={styles.searchIcon}>
                    <span>
                        <svg viewBox="0 0 24 24" width="24" height="24" class="">
                            <path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z">
                            </path>
                        </svg>
                        </span>
                </div>
            </div>
        </div>
    )
}

export default Searchbar