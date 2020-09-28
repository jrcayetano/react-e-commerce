export const AppActionsType = {
  SET_MENU: "[APP GENERAL - SET_MENU]",
  SET_TOKEN: "[APP GENERAL - SET_TOKEN]",
  SET_FIRSTLOAD_APP: "[APP GENERAL - SET_FIRSTLOAD_APP]",
  SHOW_TOAST: "[APP GENERAL - SHOW TOAST]",
  SET_TOAST: "[APP GENERAL - MESSAGE TOAST]",
  CLEAR_TOAST: "[APP GENERAL - CLEAR MESSAGE TOAST]",
};

export const setMenu = (menu) => ({
  type: AppActionsType.SET_MENU,
  payload: menu,
});

export const setToken = (token) => ({
  type: AppActionsType.SET_TOKEN,
  payload: token,
});

export const setFirstload = (isFIrstLoad) => ({
  type: AppActionsType.SET_FIRSTLOAD_APP,
  payload: isFIrstLoad,
});

export const setToast = (message) => ({
  type: AppActionsType.SET_TOAST,
  payload: message,
});

export const clearToast = () => ({
  type: AppActionsType.CLEAR_TOAST,
});

export const showToast = (show) => ({
  type: AppActionsType.SHOW_TOAST,
  payload: show,
});
