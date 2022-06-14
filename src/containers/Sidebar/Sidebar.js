import React, { useContext } from 'react';
import Contact from '../../components/Sidebar/Contact/Contact';
import SidebarHeader from '../../components/Sidebar/Header/SidebarHeader';
import Searchbar from '../../components/Sidebar/Searchbar/Searchbar';
import { ThemeContext } from '../../Utils/themeContext';
import { useDispatch } from "react-redux";
import data from '../../data/data.json';
import Profile from '../../components/Profile/Profile'

import styles from './sidebar.module.css';
import { updateCurrentChat } from '../../store/actions/chat';
import ProfileSettings from '../../components/Profile/ProfileSettings/ProfileSettings';


const Sidebar = props => {
   
    const dispatch = useDispatch();

    const { theme } = useContext(ThemeContext);

    // const [lastMessage, setLastMessage] = useState('');

    const initProfileHandler = (option) => {
        if(option === 'settings') {
            document.getElementById('profileSettings').style.left = '-200%';
        }
        document.getElementById('profile').style.left = '0'
    }

    const initProfileSettingsHandler = () => {
        document.getElementById('profileSettings').style.left = '0'
    }

    const removeProfileSettingsHandler = () => {
        document.getElementById('profileSettings').style.left = '-200%';
    }

    const removeProfileHandler = () => {
        document.getElementById('profile').style.left = '-200%';
    }


    const getMessageStatus = (messages) => {
        if(messages.length !== 0) { // check if there is any existing message
            return messages[messages.length - 1].status // take last item in array and get status
        } else {
            // setLastMessage('Start a new conservation')
        }
    }

    function initChat(item) {
        dispatch(updateCurrentChat(item));
    }

    return (
        <>
         <div className={styles.wrapper} style={{ backgroundColor: theme.background.tertiary }}>
            <header className={styles.header}>
                <SidebarHeader initProfileHandler={initProfileHandler} initProfileSettingsHandler={initProfileSettingsHandler} />
                <Searchbar />
            </header>
            <div className={styles.contactContainer}>
                {data.map(item => {
                    return <Contact
                        key={Math.floor(Math.random() * 2000)}
                        name={item.name}
                        dpImage={item.picture}
                        status={getMessageStatus(item.messages)}
                        onClick={() => initChat(item)}
                    />
                })}
            </div>  
            <Profile removeProfileHandler={removeProfileHandler} />
            <ProfileSettings 
                initProfileHandler={initProfileHandler} 
                removeProfileSettingsHandler={removeProfileSettingsHandler} 
            />
        </div>
        
        
          
        </>
    )
}

export default Sidebar