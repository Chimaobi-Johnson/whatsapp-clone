import { UPDATE_CURRENT_USER } from "../actions/action-type";
  
  const initialState = {};
  
  export const updateCurrentUser = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_CURRENT_USER:
        return action.payload
      default:
        return state;
    }
  };
  
  export default updateCurrentUser;