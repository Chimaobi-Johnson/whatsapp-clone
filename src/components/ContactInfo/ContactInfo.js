import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../Utils/themeContext';
import displayImage from '../../images/whatsapp-image.jpeg';
import { useDispatch } from 'react-redux';

import styles from './ContactInfo.module.css';
import { useSelector } from 'react-redux';
import { toggleContactSidebar } from '../../store/actions/chat';


const ContactInfo = props => {

      let sidebarState = useSelector(state => state.app.contactSidebar);

      const dispatch = useDispatch();

    // console.log(sidebarState)

    useEffect(() => {
        
        sidebarEffect(sidebarState);
    }, [sidebarState])

    const sidebarEffect = (currentState) => {
           
            let contactInfoDetails = document.getElementById('ContactInfoDetails');
            let boxContainer = document.getElementById('BoxContainer');

            
            if(currentState) {
                boxContainer.style.display = 'flex';
                boxContainer.style.width = '25%';
                setTimeout(() => {
                    contactInfoDetails.style.transform = 'translateY(0%)';
                }, 10);
                
            } else {
                boxContainer.style.width = '0%';
                boxContainer.style.display = 'none';
                contactInfoDetails.style.transform = 'translateY(-130%)';
            }
    }



    const starIcon = (<span data-testid="star" data-icon="star"><svg viewBox="0 0 16 15" height="20" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="m8.3 10.2-2.5 1.7c-.3.2-.8-.1-.7-.5L6 8.6c.1-.2 0-.4-.2-.5L3.5 6.3c-.4-.3-.2-.8.2-.8l3-.1c.2 0 .3-.1.4-.3l1-2.8c.1-.4.7-.4.8 0l1 2.8c.1.2.2.3.4.3l3 .1c.4 0 .6.5.3.8l-2.4 1.8c-.1.1-.2.3-.2.5l.9 2.9c.1.4-.3.7-.7.5l-2.5-1.7c-.1-.2-.3-.2-.4-.1z"></path></svg></span>)
    const bellIcon = (<span data-testid="settings-notifications" data-icon="settings-notifications"><svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="M12 21.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.8 1.7 1.7 1.7zm5.6-5.2v-4.7c0-2.7-1.8-4.8-4.3-5.4v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v.6c-2.5.6-4.3 2.7-4.3 5.4v4.7l-1.7 1.7v.9h14.6v-.9l-1.7-1.7z"></path></svg></span>)
    const timeIcon = (<span data-testid="disappearing" data-icon="disappearing"><svg height="20" viewBox="0 0 36 36" fill="none" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M18 31.5c.09 0 .182 0 .272-.003a1.5 1.5 0 0 0-.06-3c-.07.002-.14.003-.212.003v3Zm0-24c.071 0 .142 0 .213.002a1.5 1.5 0 0 0 .06-3L18 4.5v3Zm6.515-1.326a1.5 1.5 0 0 0-1.45 2.626c.124.068.246.139.367.212a1.5 1.5 0 1 0 1.554-2.566 13.503 13.503 0 0 0-.47-.272Zm5.039 4.84a1.5 1.5 0 0 0-2.566 1.554c.073.12.144.243.212.366a1.5 1.5 0 0 0 2.626-1.45 13.535 13.535 0 0 0-.272-.47Zm1.943 6.714a1.5 1.5 0 0 0-3 .06 10.76 10.76 0 0 1 0 .425 1.5 1.5 0 0 0 3 .06 13.693 13.693 0 0 0 0-.545Zm-1.67 6.787a1.5 1.5 0 0 0-2.627-1.45c-.068.124-.139.246-.212.367a1.5 1.5 0 1 0 2.566 1.554c.094-.155.185-.312.272-.47Zm-4.841 5.039a1.5 1.5 0 0 0-1.554-2.566c-.12.073-.243.144-.366.212a1.5 1.5 0 0 0 1.45 2.626c.158-.087.315-.178.47-.272ZM18 4.5C10.544 4.5 4.5 10.544 4.5 18S10.544 31.5 18 31.5v-3c-5.8 0-10.5-4.701-10.5-10.5S12.2 7.5 18 7.5v-3Z"></path><path fill="currentColor" d="M23.325 12.01a.865.865 0 0 1 1.21 1.21l-4.564 6.087a1.951 1.951 0 1 1-2.732-2.732l6.086-4.564Z"></path></svg></span>)
    const padlockIcon = (<span data-testid="lock" data-icon="lock"><svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="M17.3 7.6h-.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6 3.3 7.6 5.8v1.8h-.9c-1 0-1.8.8-1.8 1.8v8.9c0 1 .8 1.8 1.8 1.8h10.6c1 0 1.8-.8 1.8-1.8V9.4c0-1-.8-1.8-1.8-1.8zM12 15.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2.7-8.2H9.2V5.8c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v1.8h.1z"></path></svg></span>)

    const arrowIcon = (<span data-testid="chevron-right-alt" data-icon="chevron-right-alt" class="aft2yglh"><svg viewBox="0 0 10 21" width="10" height="21" class=""><path fill="currentColor" d="m1 15.75 5.2-5.2L1 5.35l1.5-1.5 6.5 6.7-6.6 6.6-1.4-1.4z"></path></svg></span>)
    
    const { theme } = useContext(ThemeContext);

    const boxComponent = (icon, title, text, action) => {
        return (
           <div className={styles.boxContainer} style={{ backgroundColor: theme.background.primary }} >
               <div className={styles.iconContainer} style={{ color: theme.text.secondary }}>
                    {icon}
               </div>
               <div className={styles.textContainer}>
                   <p className={styles.boxTitle}>{title}</p>
                   <p className={styles.boxText} style={{ color: theme.text.secondary }}>
                        {text}
                   </p>
               </div>
               <div className={styles.actionContainer} style={{ color: theme.text.secondary }}>
                    {action}
               </div>
           </div>     
        )
    }

    return (
        <div className={styles.wrapper} style={{ backgroundColor: theme.background.secondary }} id='BoxContainer'>
            <div className={styles.header} style={{ backgroundColor: theme.background.secondary }}>
                <div className={styles.closeIcon} onClick={() => dispatch(toggleContactSidebar())}>
                <span data-testid="x" data-icon="x" class="">
                    <svg viewBox="0 0 24 24" width="24" height="24" class="">
                        <path fill="currentColor" d="m19.1 17.2-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z">
                        </path>
                    </svg>
                </span>
                </div>
                <div className={styles.headerText}>
                    <p>Contact Info</p>
                </div>
                
            </div>

            <div className={styles.contentContainer} id="ContactInfoDetails">

                <div className={styles.basicInfo} style={{ backgroundColor: theme.background.primary }}>
                    <div className={styles.image}>
                        <img src={displayImage} alt="" />
                    </div>
                    <h4>Freddie</h4>
                    <p style={{ color: theme.text.secondary }}>+44 154441212</p>
                </div>
                <div className={styles.about} style={{ backgroundColor: theme.background.primary }}>
                    <div className={styles.aboutHeader} style={{ color: theme.text.secondary }}>
                        <span>About</span>
                    </div>
                    <p>
                        Available
                    </p>
                </div>
                <div className={styles.links} style={{ color: theme.text.secondary, backgroundColor: theme.background.primary }}>
                    <div className={styles.text}>
                        <span>Media, links and docs</span>
                    </div>
                    <div className={styles.linksDetails}>
                        <div className={styles.number}>
                            <span>0</span>
                        </div>
                    <div>
                            <span data-testid="chevron-right-alt" data-icon="chevron-right-alt" class="aft2yglh">
                                <svg viewBox="0 0 10 21" width="10" height="21" class="">
                                    <path fill="currentColor" d="m1 15.75 5.2-5.2L1 5.35l1.5-1.5 6.5 6.7-6.6 6.6-1.4-1.4z">
                                    </path>
                                </svg>
                            </span>
                    </div>
                    
                    </div>
                </div>
                <div className={styles.starredMessages}>
                    {boxComponent(starIcon, "Starred messages", "", arrowIcon)}
                </div>
                
                <div className={styles.contactSettings}>
                    {boxComponent(bellIcon, "Mute notifications")}
                    {boxComponent(timeIcon, "Disappearing messages", "Off", arrowIcon)}
                    {boxComponent(padlockIcon, "Encryption", "Messages are end-to-end encrypted. Click to verify.")}
                </div>

                <div className={styles.groups} style={{ color: theme.text.secondary, backgroundColor: theme.background.primary }}>
                    <span>0 groups in common</span>
                </div>

                <div className={styles.contactActions} style={{ backgroundColor: theme.background.primary }}>
                    <div className={styles.block}>
                        <div className={styles.actionIcon}>
                        <span data-testid="settings-blocked" data-icon="settings-blocked" class=""><svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2.8c-5.3 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7 9.7-4.3 9.7-9.7-4.4-9.7-9.7-9.7zm-7.3 9.7c0-4 3.3-7.3 7.3-7.3 1.6 0 3.1.5 4.3 1.4L6.1 16.8c-.9-1.2-1.4-2.7-1.4-4.3zm7.3 7.3c-1.6 0-3-.5-4.2-1.4L17.9 8.3c.9 1.2 1.4 2.6 1.4 4.2 0 4-3.3 7.3-7.3 7.3z"></path></svg></span>
                        </div>
                        <div className={styles.actionText}>
                            <p>Block Freddie</p>
                        </div>
                    </div>
                    <div className={styles.report}>
                        <div className={styles.actionIcon}>
                            <span data-testid="thumbs-down" data-icon="thumbs-down" class=""><svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M14.091 4.2H6.318c-.691 0-1.295.432-1.555 1.036l-2.591 6.132c-.086.173-.172.346-.172.605V13.7c0 .95.777 1.727 1.727 1.727h5.441L8.305 19.4v.259c0 .345.173.691.345.95l.95.864 5.7-5.7c.345-.345.518-.777.518-1.209V5.927c0-.95-.777-1.727-1.727-1.727zm3.454 0v10.364H21V4.2h-3.455z" id="thumb-down"></path></svg></span>                   
                        </div>
                        <div className={styles.actionText}>
                            <p>Report Freddie</p> 
                        </div>
                    </div>
                </div>

                <div className={styles.delete} style={{ backgroundColor: theme.background.primary }}>
                        <div className={styles.actionIcon}>
                        <span data-testid="delete" data-icon="delete" class=""><svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6H6v12zM19 3h-3.5l-1-1h-5l-1 1H5v2h14V3z"></path></svg></span>   
                        </div>
                        <div className={styles.actionText}>
                            <p>Delete Chat</p> 
                        </div>
                </div>


            </div>
           
        </div>
    )

}

export default ContactInfo