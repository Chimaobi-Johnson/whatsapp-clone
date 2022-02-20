import React from 'react';
import styles from './Profile.module.css';


const Profile = props => {

    return (
         <div className={styles.wrapper}>
             <div className={styles.header}>
                Profile
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