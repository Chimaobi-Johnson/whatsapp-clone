import React from 'react';
import Landing from '../../components/Chat/Landing/Landing';
import styles from './chatContainer.module.css';

const ChatContainer = props => {

    return (
        <div className={styles.wrapper}>
            <Landing />
        </div>
    )
}

export default ChatContainer