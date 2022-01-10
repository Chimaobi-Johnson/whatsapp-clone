import React from 'react';
import styles from './contact.module.css';

import dpImage from '../../../images/43915093_734048600279905_7917941584617077357_n(1).jpg';

const Contact = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.displayPictureContainer}>
                <img src={dpImage} alt="" className={styles.image} />
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.nameContainer}>
                   <h2>Chimaobi</h2> 
                </div>
                <div className={styles.textContainer}>
                    <p>Hi !!!!</p>
                </div>
                
            </div>
            <div className={styles.notificationContainer}>
                <div className={styles.time}> 
                    <p>18:04</p>
                </div>
                <div className={styles.messageCount}> 
                    <p>2</p>
                </div>
            </div>
        </div>
    )
}

export default Contact