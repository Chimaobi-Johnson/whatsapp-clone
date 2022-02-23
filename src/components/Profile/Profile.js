import React, { useContext } from 'react';
import { ThemeContext } from '../../Utils/themeContext';
import displayPicture from '../../images/whatsapp-image.jpeg';

import styles from './Profile.module.css';


const Profile = props => {

    const { theme } = useContext(ThemeContext);

    const userInfoComponent = (title, inputText) => {
        return (
            <div className={styles.name} style={{ backgroundColor: theme.profile.background.tertiary }}>
            <div className={styles.title} style={{ color: theme.profile.text.primary }}>
                {title}
            </div>
            <div>
                <div className={styles.userName}>
                    <p style={{ color: theme.profile.text.secondary }}>{inputText}</p>
                    <span style={{ color: theme.profile.text.secondary2 }} data-testid="pencil" data-icon="pencil"><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"></path></svg></span>
                </div>
                <div className={styles.userNameInput}>
                    
                </div>
            </div>
         </div>
        )
    }

    return (
         <div id="profile" className={styles.wrapper} style={{ backgroundColor: theme.profile.background.primary }}>
             <div className={styles.header} style={{ backgroundColor: theme.profile.background.secondary }}>
                <div className={styles.headerContent}>
                    <div className={styles.backButton}>
                        <button onClick={() => props.removeProfileHandler()}>
                            <span data-testid="back" data-icon="back" class="">
                                <svg viewBox="0 0 24 24" width="24" height="24" class="">
                                    <path fill="currentColor" d="m12 4 1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className={styles.profileText}>
                        <h2>Profile</h2>
                    </div>
                </div>
             </div>
             <div id="picture" className={styles.pictureContainer}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imageOverlay}>
                            <div className={styles.overlayContent}>
                                 <span data-testid="camera" data-icon="camera" class=""><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M21.317 4.381H10.971L9.078 2.45c-.246-.251-.736-.457-1.089-.457H4.905c-.352 0-.837.211-1.078.468L1.201 5.272C.96 5.529.763 6.028.763 6.38v1.878l-.002.01v11.189a1.92 1.92 0 0 0 1.921 1.921h18.634a1.92 1.92 0 0 0 1.921-1.921V6.302a1.92 1.92 0 0 0-1.92-1.921zM12.076 18.51a5.577 5.577 0 1 1 0-11.154 5.577 5.577 0 0 1 0 11.154zm0-9.506a3.929 3.929 0 1 0 0 7.858 3.929 3.929 0 0 0 0-7.858z"></path></svg></span>
                                 <h2>
                                     CHANGE PROFILE PHOTO
                                 </h2>
                            </div>
                        </div>
                        <img src={displayPicture} alt="CW" />
                    </div>
             </div>
             <div id="content" className={styles.content}>
                 {userInfoComponent('Your name', 'Chimaobi')}
                 <div className={styles.subText} style={{ color: theme.profile.text.secondary2 }}>
                    This is not your username or pin. This name will be visible to your whatsapp contacts
                 </div>
                 {userInfoComponent('About', 'Available')}
             </div>
         </div>
    )
}

export default Profile;