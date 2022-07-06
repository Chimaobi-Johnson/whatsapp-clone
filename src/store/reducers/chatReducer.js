import { CHANGE_CURRENT_THEME, TOGGLE_CONTACT_SIDEBAR, UPDATE_CURRENT_CHAT } from "../actions/action-type";
import data from '../../data/data.json';
  
  const initialState = {
    currentTheme: 'light',
    contactSidebar: false,
    chatData: data[0]
  }
  
  export const updateCurrentChat = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case UPDATE_CURRENT_CHAT:
        newState = {
          ...state,
          chatData: action.payload
        }
        return newState;
      case TOGGLE_CONTACT_SIDEBAR:
        newState = {
          ...state,
          contactSidebar: !state.contactSidebar
        }
        return newState;
      case CHANGE_CURRENT_THEME:
        newState = {
          ...state,
          currentTheme: action.payload
        }
        return newState;
      default:
        return state;
    }
  };
  
  export default updateCurrentChat;