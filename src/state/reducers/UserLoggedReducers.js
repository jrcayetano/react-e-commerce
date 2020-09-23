import { UserLoggedActionsType } from "./../actions/UserLoggedActions";
export const initialState = {
  isLogged: true,
  username: "",
  email: "",
  favoriteProducts: [],
  profile: {},
  orders: [],
};

export default function userLoggedReducer(state = initialState, action) {
  switch (action.type) {
    case UserLoggedActionsType.setIsLogged: {
      return {
        ...state,
        isLogged: true,
      };
    }
    case UserLoggedActionsType.addFavoriteProduct: {
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
    case UserLoggedActionsType.addFavoriteProductInBulk: {
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, ...action.payload],
      };
    }
    case UserLoggedActionsType.deleteFavoriteProduct: {
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    }
    case UserLoggedActionsType.setUsername: {
      return {
        ...state,
        username: action.payload,
      };
    }
    case UserLoggedActionsType.setEmail: {
      return {
        ...state,
        email: action.payload,
      };
    }

    case UserLoggedActionsType.setProfile: {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case UserLoggedActionsType.addOrder: {
      return {
        ...state,
        orders: [...state.orders, { ...action.payload }],
      };
    }

    default:
      return state;
  }
}
