import React from 'react';
import SidebarHeader from '../../components/Sidebar/Header/SidebarHeader';
import styles from './sidebar.module.css';


const Sidebar = props => {

    return (
        <div className={styles.wrapper}>
            <SidebarHeader />
            <h1>SIDEBAR</h1>
        </div>
    )
}

export default Sidebar