export const AppActionsType = {
  SET_MENU: "[APP GENERAL - SET_MENU]",
  SET_TOKEN: "[APP GENERAL - SET_TOKEN]",
  SET_FIRSTLOAD_APP: "[APP GENERAL - SET_FIRSTLOAD_APP]",
};

export const SET_MENU = (menu) => ({
  type: AppActionsType.SET_MENU,
  payload: menu,
});

export const SET_TOKEN = (token) => ({
  type: AppActionsType.SET_TOKEN,
  payload: token,
});

export const SET_FIRSTLOAD_APP = (isFIrstLoad) => ({
  type: AppActionsType.SET_FIRSTLOAD_APP,
  payload: isFIrstLoad,
});
