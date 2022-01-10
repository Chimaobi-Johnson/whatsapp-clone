import React, { useContext } from 'react';
import { ThemeContext } from '../../../themeContext'; 

import styles from './contact.module.css';

import dpImage from '../../../images/43915093_734048600279905_7917941584617077357_n(1).jpg';

const Contact = props => {

    const { name } = props;

    const { theme } = useContext(ThemeContext)

    return (
        <div className={styles.wrapper} style={{ backgroundColor: theme.primaryColor }}>
            <div className={styles.displayPictureContainer}>
                <img src={dpImage} alt="" className={styles.image} />
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.nameContainer}>
                   <h2>{name}</h2> 
                   <span style={{ color: theme.textColor3 }}>18:04</span>
                </div>
                <div className={styles.textContainer}>
                    <p>Hi !!!!
                    <span className={styles.messageCount}> 
                        2
                    </span>
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Contact