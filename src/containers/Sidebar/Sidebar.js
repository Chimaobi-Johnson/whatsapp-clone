import React from 'react';
import Contact from '../../components/Sidebar/Contact/Contact';
import SidebarHeader from '../../components/Sidebar/Header/SidebarHeader';
import Searchbar from '../../components/Sidebar/Searchbar/Searchbar';
import styles from './sidebar.module.css';


const Sidebar = props => {

    return (
        <div className={styles.wrapper}>
            <header style={styles.header}>
                <SidebarHeader />
                <Searchbar />
            </header>
            <div className={styles.contactContainer}>
                <Contact />
            </div>
        </div>
    )
}

export default Sidebar