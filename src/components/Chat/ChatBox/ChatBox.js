import React from 'react';
import BubbleLeft from '../../Messages/BubbleLeft/BubbleLeft';
import BubbleRight from '../../Messages/BubbleRight/BubbleRight';
import InputContainer from '../Footer/InputContainer/InputContainer';
import ChatBoxHeader from '../Header/ChatBoxHeader';
import { useSelector } from 'react-redux';

import styles from './chatbox.module.css';

const ChatBox = props => {

    const currentChat = useSelector(data => data.currentChat);

    const renderCurrentChat = () => {
        if(currentChat.messages.length !== 0) {
            return currentChat.messages.map(message => <BubbleLeft time={message.time} text={message.text} />)
        }
    }

    
    const renderUserChat = () => {
        if(currentChat.received.length !== 0) {
            return currentChat.received.map(message => <BubbleRight time={message.time} text={message.text} />)
        }
    }

    return (
        <div className={styles.wrapper}>
            <ChatBoxHeader name={currentChat.name} />
            <div className={styles.chatContentBox}>
                <div className={styles.leftChat}>
                    {renderCurrentChat()}
                    {/* <BubbleLeft />
                    <BubbleLeft />
                    <BubbleLeft /> */}
                </div>
                <div className={styles.rightChat}>
                    {renderUserChat()}
                    {/* <BubbleRight />
                    <BubbleRight /> */}
                </div>
            </div>
            <InputContainer id={currentChat.id} />
        </div>
    )
}

export default ChatBox;