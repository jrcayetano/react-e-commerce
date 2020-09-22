export const AppActionsType = {
  SET_MENU: "[APP GENERAL - SET_MENU]",
  SET_TOKEN: "[APP GENERAL - SET_TOKEN]",
  SET_FIRSTLOAD_APP: "[APP GENERAL - SET_FIRSTLOAD_APP]",
};

export const SET_MENU = () => ({
  type: AppActionsType.SET_MENU,
});

export const SET_TOKEN = () => ({
  type: AppActionsType.SET_TOKEN,
});

export const SET_FIRSTLOAD_APP = () => ({
  type: AppActionsType.SET_FIRSTLOAD_APP,
});
