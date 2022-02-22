import React from 'react';
import styles from './Profile.module.css';


const Profile = props => {

    return (
         <div className={styles.wrapper}>
             <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.backButton}>
                        <button>
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
             <div className={styles.pictureContainer}>

             </div>
             <div className={styles.content}>
                 <div className={styles.name}>

                 </div>
                 <div className={styles.info}>
                     
                 </div>
                 <div className={styles.about}>
                     
                 </div>
             </div>
         </div>
    )
}

export default Profile;