import React, { useContext } from 'react';
import { ThemeContext } from '../../../Utils/themeContext';

import styles from './chatboxHeader.module.css';
import { useDispatch } from 'react-redux';
import { toggleContactSidebar } from '../../../store/actions/chat';

const ChatBoxHeader = props => {

    const { name, imageURL } = props;

    const { theme } = useContext(ThemeContext);

    
    const dynamicStyles = { 
        backgroundColor: theme.background.secondary, 
        borderLeft: '1px solid #dadada' 
    }

    const dispatch = useDispatch();


    return (
        <header style={dynamicStyles} className={styles.wrapper}>
            <div className={styles.headerLeft} onClick={() => dispatch(toggleContactSidebar())}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <img src={imageURL} alt="DP" className={styles.image} />
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <h2>{name}</h2>
                    <p>Online</p>
                </div>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.searchContainer}>
                    <span>
                        <svg viewBox="0 0 24 24" width="24" height="24" class="">
                            <path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path>
                        </svg>
                    </span>
                </div>
                <div className={styles.optionContainer}>
                    <span>
                        <svg viewBox="0 0 24 24" width="24" height="24" class="">
                            <path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </header>
    )
}


export default ChatBoxHeader;


