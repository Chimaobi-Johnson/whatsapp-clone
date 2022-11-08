import { CHANGE_CURRENT_THEME, TOGGLE_CONTACT_SIDEBAR, UPDATE_CURRENT_CHAT } from './action-type';

import fileName from '../../data/data.json';

export const updateCurrentChat = (item) => (dispatch) => {
    dispatch({
        type: UPDATE_CURRENT_CHAT,
        payload: item
    })
}

export const sendMessage = (item, id) => (dispatch) => {
    // find current chat
    // const currentChat = data.find(el => el.id === id);
    // currentChat.messages.push({
    //     id: 10151,
    //     time: "15:04",
    //     status: "seen", 
    //     text: "Hello man?",
    //     reply: [],
    //     sender: "user",
    //     to: 33333,
    //     replyTo: 102
    // })
    // fs.writeFile('../../data/data.json', JSON.stringify(data), function writeJSON(err) {
    //     if (err) return console.log(err);
    //     console.log(JSON.stringify(file));
    //     console.log('writing to ' + fileName);
    //   });
}

export const toggleContactSidebar = () => dispatch => {
    dispatch({
        type: TOGGLE_CONTACT_SIDEBAR,
    })
}

export const changeCurrentTheme = (theme) => dispatch => {
    dispatch({
        type: CHANGE_CURRENT_THEME,
        payload: theme
    })
}

