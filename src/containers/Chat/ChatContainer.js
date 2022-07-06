import React from 'react';
import ChatBox from '../../components/Chat/ChatBox/ChatBox';
import bgImage from '../../images/background/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png';
import bgImageDark from '../../images/background/default-wallpaper-dark.png';

import styles from './chatContainer.module.css';

const ChatContainer = props => {

    return (
        <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImageDark})`}}>
            {/* <Landing /> */}
            <ChatBox />
        </div>
    )
}

export default ChatContainer