import React, { useContext } from 'react';

import { ThemeContext } from '../../../../../Utils/themeContext';

const Check = props => {
    const { status } = props;

    const { theme } = useContext(ThemeContext);

    const renderCheck = () => {
        if(status === 'sent') {
            return (
               <span className={styles.statusCheck}>
                 <svg viewBox="0 0 14 18" width="14" height="18" class=""><path fill="currentColor" d="m12.502 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
               </span>
            )
        } else if (status === 'delivered') {
            return (
                <span className={styles.statusDoubleCheck}>
                 <svg viewBox="0 0 18 18" width="18" height="18" class=""><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                </span>
            )
        } else {
            <span className={styles.statusDoubleCheck}>
              <svg style={{ color: theme.notification.primary }} viewBox="0 0 18 18" width="18" height="18" class=""><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
            </span>
        }
    }

    return (
        <div className={styles.wrapper}>
           
        </div>
    )
}

export default Check;