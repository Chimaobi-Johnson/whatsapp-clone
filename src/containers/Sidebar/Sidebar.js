import React, { useContext } from 'react';
import Contact from '../../components/Sidebar/Contact/Contact';
import SidebarHeader from '../../components/Sidebar/Header/SidebarHeader';
import Searchbar from '../../components/Sidebar/Searchbar/Searchbar';
import { ThemeContext } from '../../themeContext';
import data from '../../data/data';

import styles from './sidebar.module.css';


const Sidebar = props => {
   
    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.wrapper} style={{ backgroundColor: theme.tertiaryColor }}>
            <header style={styles.header}>
                <SidebarHeader />
                <Searchbar />
            </header>
            <div className={styles.contactContainer}>
                {data.map(item => {
                    return <Contact
                        name={item.name}
                    />
                })}
            </div>
        </div>
    )
}

export default Sidebar