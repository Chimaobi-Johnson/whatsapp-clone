import React from 'react';
import BubbleLeft from '../../Messages/BubbleLeft/BubbleLeft';
import BubbleRight from '../../Messages/BubbleRight/BubbleRight';
import InputContainer from '../Footer/InputContainer/InputContainer';
import ChatBoxHeader from '../Header/ChatBoxHeader';
import { useSelector } from 'react-redux';

import styles from './chatbox.module.css';

const ChatBox = props => {

    const currentChat = useSelector(data => data.app.chatData);

    // const renderCurrentChat = () => {
    //     if(currentChat.messages.length !== 0) {
    //         return currentChat.messages.map(message => <div className={styles.leftChat}><BubbleLeft time={message.time} text={message.text} /></div>)
    //     }
    // }

    
    const renderCurrentChat = () => {
        if(currentChat.messages.length !== 0) {
            return currentChat.messages.map(message => {
                if(message.sender === 'user') {
                    return <div className={styles.rightChat}><BubbleRight time={message.time} text={message.text} /></div>
                } else {
                    return <div className={styles.leftChat}><BubbleLeft time={message.time} text={message.text} /></div>
                }
            })
        }
    }

    return (
        <div className={styles.wrapper}>
            <ChatBoxHeader imageURL={currentChat.picture} name={currentChat.name} />
            <div className={styles.chatContentBox}>
                {renderCurrentChat()}
            </div>
            <InputContainer id={currentChat.id} />
        </div>
    )
}

export default ChatBox;