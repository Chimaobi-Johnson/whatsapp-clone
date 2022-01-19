import React from 'react';
import Landing from '../../components/Chat/Landing/Landing';
import ChatBox from '../../components/Chat/ChatBox/ChatBox';

import styles from './chatContainer.module.css';

const ChatContainer = props => {

    return (
        <div className={styles.wrapper}>
            {/* <Landing /> */}
            <ChatBox />
        </div>
    )
}

export default ChatContainer