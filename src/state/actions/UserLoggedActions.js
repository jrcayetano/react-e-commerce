export const UserLoggedActionsType = {
  setIsLogged: "[User logged - SET_IS_LOGGED]",
  setUsername: "[User logged - SET_USERNAME]",
  setEmail: "[User logged - SET_EMAIL]",
  setProfile: "[User logged - SET_PROFILE]",
  addFavoriteProduct: "[User logged - ADD_FAVORITE_PRODUCT]",
  addFavoriteProductInBulk: "[User logged - ADD_FAVORITE_PRODUCT_IN_BULK]",
  deleteFavoriteProduct: "[User logged - DELETE_FAVORITE_PRODUCT]",
  addOrder: "[User logged - ADD_ORDER]",
};

export const SetIsLogged = () => ({
  type: UserLoggedActionsType.setIsLogged,
});

export const SetUsername = (payload) => ({
  type: UserLoggedActionsType.setUsername,
  payload: payload,
});

export const SetEmail = (payload) => ({
  type: UserLoggedActionsType.setEmail,
  payload: payload,
});

export const SetProfile = (payload) => ({
  type: UserLoggedActionsType.setProfile,
  payload: payload,
});

export const AddFavoriteProduct = (payload) => ({
  type: UserLoggedActionsType.addFavoriteProduct,
  payload: payload,
});

export const AddFavoriteProductInBulk = (payload) => ({
  type: UserLoggedActionsType.addFavoriteProductInBulk,
  payload: payload,
});

export const DeleteFavoriteProduct = (payload) => ({
  type: UserLoggedActionsType.deleteFavoriteProduct,
  payload: payload,
});

export const AddOrder = (payload) => ({
  type: UserLoggedActionsType.addOrder,
  payload: payload,
});
