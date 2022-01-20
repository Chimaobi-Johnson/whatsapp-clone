import React from 'react';
import BubbleLeft from '../../Messages/BubbleLeft/BubbleLeft';
import BubbleRight from '../../Messages/BubbleRight/BubbleRight';
import InputContainer from '../Footer/InputContainer/InputContainer';
import ChatBoxHeader from '../Header/ChatBoxHeader';

import styles from './chatbox.module.css';

const ChatBox = props => {

    return (
        <div className={styles.wrapper}>
            <ChatBoxHeader />
            <div className={styles.chatContentBox}>
                {/* <div className={styles.leftChat} */}
                <BubbleLeft />
                <BubbleRight />
            </div>
            <InputContainer />
        </div>
    )
}

export default ChatBox;