import React, { useContext } from 'react';

import { ThemeContext } from '../../../Utils/themeContext';
import Check from '../../Sidebar/Contact/ContactComponents/Check/Check';

import styles from './BubbleRight.module.css';

const BubbleRight = props => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.wrapper} style={{ backgroundColor: theme.chat.background.secondary }}>
                <div className={styles.textWrapper}>
                    <span>When will you be back?</span>
                </div>
                <div className={styles.time}><span>15:07</span><Check status="seen" /></div>
        </div>
    )
}

export default BubbleRight