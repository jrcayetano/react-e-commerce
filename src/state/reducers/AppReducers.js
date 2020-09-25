import { AppActionsType } from "../actions/AppActions";

export const initialState = {
  selectedMenu: "products",
  token: "",
  isFirstLoadApp: true,
  showToast: false,
  toasts: [],
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
    case AppActionsType.SET_TOAST: {
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    }
    case AppActionsType.CLEAR_TOAST: {
      return {
        ...state,
        toasts: [],
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
