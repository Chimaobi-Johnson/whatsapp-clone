import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../Utils/themeContext';
import imageURL from '../../../images/whatsapp-image.jpeg';

import styles from './ProfileSettings.module.css';
import Modal from '../../../components/Modal/Modal';
import { changeCurrentTheme } from '../../../store/actions/chat';
import { useDispatch } from 'react-redux';


const ProfileSettings = props => {

    const notificationIcon = <span data-testid="settings-notifications" data-icon="settings-notifications" class=""><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 21.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.8 1.7 1.7 1.7zm5.6-5.2v-4.7c0-2.7-1.8-4.8-4.3-5.4v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v.6c-2.5.6-4.3 2.7-4.3 5.4v4.7l-1.7 1.7v.9h14.6v-.9l-1.7-1.7z"></path></svg></span>;
    const privacyIcon = <span data-testid="security-lock" data-icon="security-lock" class=""><svg width="24" height="24" viewBox="0 0 28 35" preserveAspectRatio="xMidYMid meet" class=""><path d="M14 1.102a8.273 8.273 0 0 1 8.273 8.273l-.001 2.804.084.003A4.86 4.86 0 0 1 27 17.037v12.43a4.86 4.86 0 0 1-4.86 4.86H5.86A4.86 4.86 0 0 1 1 29.467v-12.43a4.86 4.86 0 0 1 4.727-4.858V9.375A8.273 8.273 0 0 1 14 1.102Zm0 18.458c-1.958 0-3.545 1.653-3.545 3.692s1.587 3.691 3.545 3.691 3.545-1.652 3.545-3.691c0-2.04-1.587-3.692-3.545-3.692Zm0-14.766c-2.538 0-4.61 2-4.722 4.51l-.005.217-.001 2.655h9.455V9.521A4.727 4.727 0 0 0 14 4.794Z" fill="currentColor"></path></svg></span>;
    const securityIcon = <span data-testid="settings-security" data-icon="settings-security" class=""><svg width="24" height="24" viewBox="0 0 24 24" class=""><path d="M12.027 2 4 5.568v5.35c0 4.95 3.425 9.58 8.027 10.704 4.602-1.124 8.027-5.753 8.027-10.703V5.568L12.027 2Zm0 9.802h6.243c-.472 3.674-2.925 6.948-6.243 7.973v-7.964H5.784V6.727l6.243-2.774v7.849Z" fill="currentColor"></path></svg></span>;
    const themeIcon = <span data-testid="settings-theme" data-icon="settings-theme" class=""><svg width="24" height="24" viewBox="0 0 24 24" class=""><path d="m12 1 3.22 3.22h4.56v4.56L23 12l-3.22 3.22v4.56h-4.56L12 23l-3.22-3.22H4.22v-4.56L1 12l3.22-3.22V4.22h4.56L12 1Zm0 5v12c3.31 0 6-2.69 6-6a6.005 6.005 0 0 0-5.775-5.996L12 6Z" fill="currentColor"></path></svg></span>;
    const wallpaperIcon = <span data-testid="settings-wallpaper" data-icon="settings-wallpaper" class=""><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M4.9 5.9h6.4V4.1H4.9c-1 0-1.8.8-1.8 1.8v6.4h1.8V5.9zm5.3 8-3.6 4.4h10.7l-2.7-3.6-1.8 2.4-2.6-3.2zm6.2-4c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3.6 1.3 1.3 1.3 1.3-.6 1.3-1.3zm2.7-5.8h-6.4v1.8h6.4v6.4h1.8V5.9c0-1-.8-1.8-1.8-1.8zm0 16h-6.4v1.8h6.4c1 0 1.8-.8 1.8-1.8v-6.4h-1.8v6.4zM4.9 13.7H3.1v6.4c0 1 .8 1.8 1.8 1.8h6.4v-1.8H4.9v-6.4z"></path></svg></span>;
    const accountInfoIcon = <span data-testid="settings-document" data-icon="settings-document" class=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59H6Zm7 6V3.5L18.5 9H14c-.55 0-1-.45-1-1Zm-5 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm6 5a1 1 0 0 0-1-1H8a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1Z" fill="currentColor"></path></svg></span>;
    const shortcutIcon = <span data-testid="settings-keyboard" data-icon="settings-keyboard" class=""><svg width="24" height="24" viewBox="0 0 24 24" class=""><path fill="currentColor" d="M10.852 12.648h2.296L12 9ZM20 8.691V6c0-1.102-.898-2-2-2h-2.691L13.41 2.102a2 2 0 0 0-2.828 0L8.692 4H6c-1.102 0-2 .898-2 2v2.691L2.102 10.59a2.004 2.004 0 0 0 0 2.832L4 15.32V18c0 1.102.898 2 2 2h2.691l1.899 1.898c.781.782 2.05.782 2.832 0L15.32 20H18c1.102 0 2-.898 2-2v-2.691l1.898-1.899a2.004 2.004 0 0 0 0-2.832Zm-5.91 6.707L13.602 14h-3.204l-.488 1.398a.89.89 0 0 1-.84.602.888.888 0 0 1-.84-1.191l2.442-6.86C10.872 7.38 11.398 7 12 7c.602 0 1.129.379 1.34.941l2.441 6.86a.89.89 0 0 1-.84 1.187.868.868 0 0 1-.851-.59Zm0 0"></path></svg></span>;
    const helpIcon = <span data-testid="settings-help" data-icon="settings-help" class=""><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 4.7c-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2 8.2-3.7 8.2-8.2-3.7-8.2-8.2-8.2zm.8 13.9h-1.6V17h1.6v1.6zm1.7-6.3-.7.7c-.7.6-1 1.1-1 2.3h-1.6v-.4c0-.9.3-1.7 1-2.3l1-1.1c.3-.2.5-.7.5-1.1 0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6H8.7c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3c0 .8-.4 1.4-.8 1.9z"></path></svg></span>;
    
    const menuItems = [
        {
            icon: notificationIcon,
            name: 'Notification'
        },
        {
            icon: privacyIcon,
            name: 'Privacy'
        },
        {
            icon: securityIcon,
            name: 'Theme'
        },
        {
            icon: themeIcon,
            name: 'Chat Wallpaper'
        },
        {
            icon: accountInfoIcon,
            name: 'Request Account Info'
        },
        {
            icon: shortcutIcon,
            name: 'Keyboard shortcuts'
        },
        {
            icon: helpIcon,
            name: 'Help'
        },
]

    const { theme, toggleTheme } = useContext(ThemeContext);

    const linkItemComponent = (icon, name) => {
        return (
            <div className={styles.linkItemWrapper}>
            <div className={styles.iconContainer} style={{ color: theme.profile.text.secondary2 }}>
              {icon}
            </div>
            <div className={styles.textContainer} onClick={() => openLink(name)}>
                <p>{name}</p>
            </div>
        </div>     
        )
    }

    const [modal, setModal] = useState(false);

    const openLink = (name) => {
        switch (name) {
            case 'Theme':
                setModal(true)
                break;
        
            default:
                break;
        }
    }

    const dispatch = useDispatch();

    const [ currentTheme, setCurrentTheme ] = useState('light');

    const toggleThemeHandler = () => {
        toggleTheme(currentTheme);
        setModal(false)
    }

    const closeModal = () => {
        setModal(false)
    }

    const updateTheme = () => {
        setModal(false)
    }

 

    const changeRadioBtnHandler = (e) => {
        setCurrentTheme(e.target.value);
    }
// onClick={() => dispatch(changeCurrentTheme(currentTheme))} 


    return (
         <div id="profileSettings" className={styles.wrapper} style={{ backgroundColor: theme.profile.background.tertiary }}>
             <Modal open={modal}>
                <div className={styles.modalWrapper}>
                    <p>Choose theme</p>
                    <form className={styles.optionsForm}>
                        <div className={styles.formItem}>
                            <label>
                                <input type="radio" name="theme" onChange={(event) => changeRadioBtnHandler(event)} value="light" />
                                Light
                            </label>
                            <label>
                                <input type="radio" name="theme" onChange={(event) => changeRadioBtnHandler(event)} value="dark" />
                                Dark
                            </label>
                            <label>
                                <input type="radio" name="theme" onChange={(event) => changeRadioBtnHandler(event)} value="System default" />
                                System default
                            </label>
                        </div>
                    </form>
                    <div className={styles.buttonContainer}>
                        <button onClick={() => closeModal()} className={styles.modalButton} style={{ color: theme.button.text.secondary, backgroundColor: theme.button.background.primary }}>Cancel</button>
                        <button onClick={toggleThemeHandler} className={styles.modalButton} style={{ color: theme.button.text.primary, backgroundColor: theme.button.background.secondary, marginLeft: '5px' }}>Ok</button>
                    </div>
                </div>  
             </Modal>
             <div className={styles.header} style={{ backgroundColor: theme.profile.background.secondary }}>
                <div className={styles.headerContent}>
                    <div className={styles.backButton}>
                        <button onClick={() => props.removeProfileSettingsHandler()}>
                            <span data-testid="back" data-icon="back" class="">
                                <svg viewBox="0 0 24 24" width="24" height="24" class="">
                                    <path fill="currentColor" d="m12 4 1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className={styles.profileText}>
                        <h2>Settings</h2>
                    </div>
                </div>
             </div>

            <div className={styles.profileInfo} onClick={() => props.initProfileHandler('settings')}>
                <div className={styles.pictureContainer}>
                    <div className={styles.imageWrapper}>
                        <img src={imageURL} alt="DP" />
                    </div>
                </div>
                <div className={styles.profileInfoContent}>
                        <p>Chimaobi</p>
                        <span style={{ color: theme.profile.text.secondary }}>Busy</span>
                </div>
            </div>

            <div className={styles.linksContainer}>
                {menuItems.map(item => linkItemComponent(item.icon, item.name))}
            </div>
             
         </div>
    )
}

export default ProfileSettings;