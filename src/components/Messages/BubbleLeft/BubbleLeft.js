import React, { useContext } from 'react';
import { ThemeContext } from '../../../Utils/themeContext';

import styles from './BubbleLeft.module.css';


const BubbleLeft = props => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.wrapper} style={{ backgroundColor: theme.background.primary }}>
                <div className={styles.textWrapper}>
                    <span>I wanted to ask you guys about the gas bill</span>
                </div>
                <span className={styles.time}>18:07</span>
        </div>
    )
}

export default BubbleLeft;