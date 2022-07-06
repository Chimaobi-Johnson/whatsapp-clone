import React, { useContext } from 'react';
import { ThemeContext } from '../../../Utils/themeContext';

import styles from './BubbleLeft.module.css';


const BubbleLeft = props => {

    const { text, time } = props;

    const { theme } = useContext(ThemeContext);
    const currentTheme = 'dark';
    
    let wrapperStyles;
    if(currentTheme === 'dark') {
        wrapperStyles = styles.wrapperDark
    } else {
        wrapperStyles = styles.wrapper
    }

    return (
        <div className={wrapperStyles} style={{ backgroundColor: theme.chat.background.primary }}>
                <div className={styles.textWrapper}>
                    <span>{text}</span>
                </div>
                <span className={styles.time}>{time}</span>
        </div>
    )
}

export default BubbleLeft;