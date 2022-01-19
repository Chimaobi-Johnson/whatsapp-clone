import React from 'react';
import ChatBoxHeader from '../Header/ChatBoxHeader';

import styles from './chatbox.module.css';

const ChatBox = props => {

    return (
        <div className={styles.wrapper}>
            <ChatBoxHeader />
            <div className={styles.chatContentBox}>

            </div>
        </div>
    )
}

export default ChatBox;