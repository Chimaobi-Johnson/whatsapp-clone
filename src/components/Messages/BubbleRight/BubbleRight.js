import React, { useContext } from 'react';

import { ThemeContext } from '../../../Utils/themeContext';
import Check from '../../Sidebar/Contact/ContactComponents/Check/Check';

import styles from './BubbleRight.module.css';

const BubbleRight = props => {

    const { time, text } = props;

    const { theme } = useContext(ThemeContext);
    
    let wrapperStyles;
    if(theme.styling === 'dark') {
        wrapperStyles = styles.wrapperDark
    } else {
        wrapperStyles = styles.wrapper
    }


    return (
        <div className={wrapperStyles} style={{ backgroundColor: theme.chat.background.secondary }}>
                <div className={styles.textWrapper} style={{ color: theme.text.primary }}>
                    <span>{text}</span>
                </div>
                <div className={styles.time}><span>{time}</span><Check status="seen" /></div>
        </div>
    )
}

export default BubbleRight