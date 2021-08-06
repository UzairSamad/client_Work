import * as actionTypes from './Shopping-types';
const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(prod => prod.id === action.payload.id);
      const inCart = state.cart.find(item =>
        item.id === action.payload.id ? true : false,
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map(item =>
              item.id === action.payload.id
                ? {
                    ...item,
                    qty: item.qty + 1,
                    totalprice: item.SalePrice
                      ? item.qty * item.SalePrice + item.SalePrice
                      : item.qty * item.price + item.price,
                  }
                : item,
            )
          : [
              ...state.cart,
              {
                ...item,
                qty: 1,
                totalprice: item.SalePrice ? item.SalePrice : item.price,
              },
            ],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: action.payload.qty,
                totalprice: action.payload.qty * item.price,
              }
            : item,
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {...state, currentItem: action.payload};
    case actionTypes.Load_Products:
      state.products = action.payload;
      return state;
    default:
      return state;
  }
};
export default shopReducer;
