import React, { useContext } from 'react';
import { ThemeContext } from '../../../Utils/themeContext'; 

import styles from './contact.module.css';

import Check from './ContactComponents/Check/Check';
import OptionsButton from './ContactComponents/OptionsButton/OptionsButton';
import MuteButton from './ContactComponents/MuteButton/MuteButton';

const Contact = props => {

    const { dpImage, name, status, onClick } = props;


    const { theme } = useContext(ThemeContext)

    return (
        <div onClick={onClick} className={styles.wrapper} style={{ backgroundColor: theme.background.primary }}>
            <div className={styles.displayPictureContainer}>
                <img src={dpImage} alt="" className={styles.image} />
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.nameContainer}>
                   <h2>{name}</h2> 
                   <span style={{ color: theme.text.tertiary }}>18:04</span>
                </div>
                <div className={styles.textContainer}>
                    <Check status={status} />             
                    <p>Hi !!!</p>
                    <div className={styles.statsContainer}>
                    <div className={styles.muteButton}> 
                            <MuteButton />
                        </div>
                        <div className={styles.messageCount}> 
                            <span>1</span>
                        </div>
                        <div className={styles.optionsButton}> 
                            <OptionsButton />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact