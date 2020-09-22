export const BasketActionsType = {
  ADD_PRODUCT: "[BASKET - ADD_PRODUCT]",
  INCREMENT_PRODUCT_QUANTITY: "[BASKET - INCREMENT_PRODUCT_QUANTITY]",
  DELETE_PRODUCT: "[BASKET - DELETE_PRODUCT ]",
  BASKET_TOGGLE: "[BASKET - BASKET_TOGGLE]",
  CLEAR_BASKET: "[BASKET - CLEAR_BASKET]",
};

export const AddProduct = (product) => ({
  type: BasketActionsType.ADD_PRODUCT,
  payload: product,
});

export const IncremenProductQuantity = (payload) => ({
  type: BasketActionsType.INCREMENT_PRODUCT_QUANTITY,
  payload: payload,
});

export const DeleteProduct = (productId) => ({
  type: BasketActionsType.DELETE_PRODUCT,
  payload: productId,
});

export const BasketToggle = () => ({
  type: BasketActionsType.BASKET_TOGGLE,
});

export const ClearBasket = () => ({
  type: BasketActionsType.CLEAR_BASKET,
});
