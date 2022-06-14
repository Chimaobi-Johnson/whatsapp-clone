import { TOGGLE_CONTACT_SIDEBAR, UPDATE_CURRENT_CHAT } from "../actions/action-type";
import data from '../../data/data.json';
  
  const initialState = {
    contactSidebar: false,
    chatData: data[0]
  }
  
  export const updateCurrentChat = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_CURRENT_CHAT:
        const newState = {
          ...state,
          chatData: action.payload
        }
        return newState;
      case TOGGLE_CONTACT_SIDEBAR:
        const prevState = {
          ...state,
          contactSidebar: !state.contactSidebar
        }
        return prevState;
      default:
        return state;
    }
  };
  
  export default updateCurrentChat;