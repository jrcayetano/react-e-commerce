import { AppActionsType } from "../actions/AppActions";

export const initialState = {
  selectedMenu: "",
  token: "",
  isFirstLoadApp: true,
  showToast: false,
  toastMessages: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case AppActionsType.SET_MENU: {
      return {
        ...state,
        selectedMenu: action.payload,
      };
    }
    case AppActionsType.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case AppActionsType.SET_FIRSTLOAD_APP: {
      return {
        ...state,
        isFirstLoadApp: action.payload,
      };
    }
    case AppActionsType.SET_MESSAGE_TOAST: {
      return {
        ...state,
        toastMessages: [...state.toastMessages, action.payload],
      };
    }
    case AppActionsType.CLEAR_MESSAGE_TOAST: {
      return {
        ...state,
        toastMessages: [],
      };
    }
    case AppActionsType.SHOW_TOAST: {
      return {
        ...state,
        showToast: action.payload,
      };
    }
    default:
      return state;
  }
}
