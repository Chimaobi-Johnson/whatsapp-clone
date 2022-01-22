import { UPDATE_CURRENT_CHAT } from './action-type';

export const updateCurrentChat = (item) => (dispatch) => {
    dispatch({
        type: UPDATE_CURRENT_CHAT,
        payload: item
    })
}

export const sendMessage = (item) => (dispatch) => {
    
}
