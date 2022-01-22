import React, { useState, useContext } from 'react';
import Contact from '../../components/Sidebar/Contact/Contact';
import SidebarHeader from '../../components/Sidebar/Header/SidebarHeader';
import Searchbar from '../../components/Sidebar/Searchbar/Searchbar';
import { ThemeContext } from '../../Utils/themeContext';
import { useDispatch } from "react-redux";
import data from '../../data/data.json';

import styles from './sidebar.module.css';
import { updateCurrentUser } from '../../store/actions/user';


const Sidebar = props => {
   
    const dispatch = useDispatch();

    // const data = JSON.parse(jsonData);
    console.log(data)

    const { theme } = useContext(ThemeContext);

    const [lastMessage, setLastMessage] = useState('')

    const getMessageStatus = (messages) => {
        if(messages.length !== 0) { // check if there is any existing message
            return messages[messages.length - 1].status // take last item in array and get status
        } else {
            setLastMessage('Start a new conservation')
        }
    }

    function initChat(item) {
        dispatch(updateCurrentUser(item));
    }

    return (
        <div className={styles.wrapper} style={{ backgroundColor: theme.background.tertiary }}>
            <header style={styles.header}>
                <SidebarHeader />
                <Searchbar />
            </header>
            <div className={styles.contactContainer}>
                {data.map(item => {
                    return <Contact
                        key={Math.floor(Math.random() * 2000)}
                        name={item.name}
                        status={getMessageStatus(item.messages)}
                        onClick={() => initChat(item)}
                    />
                })}
            </div>
        </div>
    )
}

export default Sidebar