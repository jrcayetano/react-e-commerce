import { AppActionsType } from "../actions/AppActions";

export const initialState = {
  selectedMenu: "",
  token: "",
  isFirstLoadApp: true,
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
    default:
      return state;
  }
}
