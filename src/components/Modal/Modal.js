import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../Utils/themeContext';
import styles from './Modal.module.css';

const Modal = props => {

    const { open } = props;

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const modal = document.getElementById('customModal');
        const modalContent = document.getElementById('modalContent');
        const openModal = () => {
            modal.style.display = 'block';
            setTimeout(() => {
                modalContent.style.transform = 'scale(1)';
            }, 100)
        }
        const closeModal = () => {
            setTimeout(() => {
                        modal.style.display = 'none';
            }, 100)
            modalContent.style.transform = 'scale(0)';
        }


        if(open) {
            openModal()  
        } else {
            closeModal()
        }


    }, [open])

    return (
        <div id="customModal" className={styles.wrapper} style={{ backgroundColor: theme.background.primary }}>
            <div id="modalContent" className={styles.content} style={{ backgroundColor: theme.background.primary }}>
                {props.children}
            </div>
        </div>
    )

} 

export default Modal