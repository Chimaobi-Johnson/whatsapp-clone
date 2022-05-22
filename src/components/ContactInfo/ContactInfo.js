import React, { useContext } from 'react';
import { ThemeContext } from '../../Utils/themeContext';
import displayImage from '../../images/whatsapp-image.jpeg';

import styles from './ContactInfo.module.css';


const ContactInfo = props => {

    const { theme } = useContext(ThemeContext);


    return (
        <div className={styles.wrapper} style={{ backgroundColor: theme.background.secondary }}>
            <div className={styles.header} style={{ backgroundColor: theme.background.secondary }}>
                <p>Contact Info</p>
            </div>
            <div className={styles.basicInfo} style={{ backgroundColor: theme.background.primary }}>
                <div className={styles.image}>
                    <img src={displayImage} alt="" />
                </div>
                <h4>Freddie</h4>
                <p style={{ color: theme.text.secondary }}>+44 154441212</p>
            </div>
            <div className={styles.about} style={{ backgroundColor: theme.background.primary }}>
                <div className={styles.aboutHeader} style={{ color: theme.text.secondary }}>
                    <span>About</span>
                </div>
                <p>
                    Available
                </p>
            </div>
        </div>
    )

}

export default ContactInfo