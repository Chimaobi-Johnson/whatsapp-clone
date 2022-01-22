import { UPDATE_CURRENT_CHAT } from "../actions/action-type";
import data from '../../data/data.json';
  
  const initialState = data[0];
  
  export const updateCurrentChat = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_CURRENT_CHAT:
        return action.payload
      default:
        return state;
    }
  };
  
  export default updateCurrentChat;