import React from 'react';
import BubbleLeft from '../../Messages/BubbleLeft/BubbleLeft';
import BubbleRight from '../../Messages/BubbleRight/BubbleRight';
import InputContainer from '../Footer/InputContainer/InputContainer';
import ChatBoxHeader from '../Header/ChatBoxHeader';
import { useSelector } from 'react-redux';

import styles from './chatbox.module.css';

const ChatBox = props => {

    const user = useSelector(data => data.User);

    return (
        <div className={styles.wrapper}>
            <ChatBoxHeader name={user.name} />
            <div className={styles.chatContentBox}>
                <div className={styles.leftChat}>
                    <BubbleLeft />
                    <BubbleLeft />
                    <BubbleLeft />
                </div>
                <div className={styles.rightChat}>
                    <BubbleRight />
                    <BubbleRight />
                </div>
            </div>
            <InputContainer />
        </div>
    )
}

export default ChatBox;