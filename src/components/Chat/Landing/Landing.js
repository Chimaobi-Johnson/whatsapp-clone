import React, { useContext } from 'react';
import { ThemeContext } from '../../../Utils/themeContext';
import image from '../../../images/capture.png';
import styles from './landing.module.css';


const Landing = props => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.wrapper} style={{ backgroundColor: theme.background.landing }}>
            <div className={styles.inner}>
                <div className={styles.imageContainer}>
                <img src={image} alt="" />
                </div>
                <div className={styles.textContainer}>
                    <h1>Keep your phone connected</h1>
                    <p>Whatsapp connects your phone to sync messages. To reduce data usuage, connect your phone to wifi.</p>
                </div>
                <div className={styles.textContainer2}>
                    <p>Make calls from desktop with Whatsapp for Windows. Get it here</p>
                </div>
            </div>
            
        </div>
    )
}

export default Landing