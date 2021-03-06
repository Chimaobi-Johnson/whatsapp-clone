import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../Utils/themeContext';
import styles from './Modal.module.css';

const Modal = props => {

    const { open } = props;

    const { theme } = useContext(ThemeContext);

    let contentStyles;
    if(theme.styling === 'dark') {
        contentStyles = styles.contentDark
    } else {
        contentStyles = styles.content
    }


    useEffect(() => {
        const modal = document.getElementById('customModal');
        const modalContent = document.getElementById('modalContent');
        const openModal = () => {
            modal.style.display = 'block';
            setTimeout(() => {
                modalContent.style.transform = 'scale(1)';
                modalContent.style.transform = 'translate(-50%, -50%)';
            }, 100)
        }
        const closeModal = () => {
            setTimeout(() => {
                modal.style.display = 'none';
            }, 100)
            modalContent.style.transform = 'scale(0)';
            modalContent.style.transform = 'translate(-50%, -50%)';
        }


        if(open) {
            openModal() 
        } else {
            closeModal()
        }


    }, [open])

    return (
        <div id="customModal" className={styles.wrapper} style={{ backgroundColor: `${theme.background.primary}de` }}>
            <div id="modalContent" className={contentStyles} style={{ color: theme.text.primary, backgroundColor: theme.background.tertiary }}>
                {props.children}
            </div>
        </div>
    )

} 

export default Modal