import { UserLoggedActionsType } from "./../actions/UserLoggedActions";
export const initialState = {
  isLogged: false,
  username: "",
  email: "",
  favoriteProducts: [],
  profile: {},
  orders: [],
};

export default function userLoggedReducer(state = initialState, action) {
  switch (action.type) {
    case UserLoggedActionsType.SET_IS_LOGGED: {
      return {
        ...state,
        isLogged: true,
      };
    }
    case UserLoggedActionsType.ADD_FAVORITE_PRODUCT: {
      return {
        ...state,
        favoriteProducts: [
          ...state.favoriteProducts,
          {
            ...action.payload,
            addedDate: new Date().toLocaleString().split(",")[0],
          },
        ],
      };
    }
    case UserLoggedActionsType.ADD_FAVORITE_PRODUCT_IN_BULK: {
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, ...action.payload],
      };
    }
    case UserLoggedActionsType.DELETE_FAVORITE_PRODUCT: {
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    }
    case UserLoggedActionsType.SET_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    case UserLoggedActionsType.SET_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }

    case UserLoggedActionsType.SET_PROFILE: {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case UserLoggedActionsType.ADD_ORDER: {
      return {
        ...state,
        orders: [...state.orders, { ...action.payload }],
      };
    }

    default:
      return state;
  }
}
