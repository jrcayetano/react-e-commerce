import { BasketActionsType } from "./../actions/BasketActions";

export const initialState = {
  opened: false,
  productsList: [],
};

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case BasketActionsType.ADD_PRODUCT: {
      return {
        ...state,
        productsList: [
          ...state.productsList,
          { ...action.payload, quantity: 1 },
        ],
      };
    }
    case BasketActionsType.BASKET_TOGGLE: {
      return {
        ...state,
        opened: !state.opened,
      };
    }
    case BasketActionsType.INCREMENT_PRODUCT_QUANTITY: {
      return {
        ...state,
        productsList: state.productsList.map((product) => {
          if (product.id === action.payload.productId) {
            return { ...product, quantity: action.payload.quantity };
          }
          return product;
        }),
      };
    }
    case BasketActionsType.DELETE_PRODUCT: {
      return {
        ...state,
        productsList: state.productsList.filter(
          (product) => product.id !== action.payload
        ),
      };
    }
    case BasketActionsType.CLEAR_BASKET: {
      return {
        ...state,
        productsList: [],
      };
    }
    default:
      return state;
  }
}
