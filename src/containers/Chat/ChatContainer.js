import React, { useContext } from 'react';
import ChatBox from '../../components/Chat/ChatBox/ChatBox';
import { ThemeContext } from '../../Utils/themeContext';

import styles from './chatContainer.module.css';

const ChatContainer = props => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={styles.wrapper} style={{ backgroundImage: `url(${theme.backgroundImage})`}}>
            {/* <Landing /> */}
            <ChatBox />
        </div>
    )
}

export default ChatContainer