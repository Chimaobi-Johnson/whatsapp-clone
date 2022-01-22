import { UPDATE_CURRENT_USER } from './action-type';

export const updateCurrentUser = (item) => (dispatch) => {
    dispatch({
        type: UPDATE_CURRENT_USER,
        payload: item
    })
}
