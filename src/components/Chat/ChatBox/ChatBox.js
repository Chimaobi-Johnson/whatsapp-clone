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
                <div className={styles.leftChat} style={{ marginBottom: '12px' }}>
                    <BubbleLeft />
                    <BubbleLeft />
                    <BubbleLeft />
                </div>
                <div className={styles.rightChat} style={{ marginBottom: '12px' }}>
                    <BubbleRight />
                    <BubbleRight />
                </div>
            </div>
            <InputContainer />
        </div>
    )
}

export default ChatBox;