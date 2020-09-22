export const UserLoggedActionsType = {
  SET_IS_LOGGED: "[User logged - SET_IS_LOGGED]",
  SET_USERNAME: "[User logged - SET_USERNAME]",
  SET_EMAIL: "[User logged - SET_EMAIL]",
  SET_PROFILE: "[User logged - SET_PROFILE]",
  ADD_FAVORITE_PRODUCT: "[User logged - ADD_FAVORITE_PRODUCT]",
  ADD_FAVORITE_PRODUCT_IN_BULK: "[User logged - ADD_FAVORITE_PRODUCT_IN_BULK]",
  DELETE_FAVORITE_PRODUCT: "[User logged - DELETE_FAVORITE_PRODUCT]",
  ADD_ORDER: "[User logged - ADD_ORDER]",
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
