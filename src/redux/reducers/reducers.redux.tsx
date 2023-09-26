import { ActionTypes } from '../constants/actions.types';

let initialState = {

};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        productList: payload
      };
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: payload
      };
    case ActionTypes.ADD_TO_CART:
      if (state?.cartList?.length > 0) {
        return {
          ...state,
          cartList: [...state?.cartList, payload]
        };
      } else {
        return {
          ...state,
          cartList: [payload]
        };
      }
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartList: state?.cartList.filter((product) => product.id !== payload.id)
      };
    case ActionTypes.ADD_USER:
      return {
        ...state,
        useDetails: payload
      };
    case ActionTypes.SELCTED_FILTER:
      return {
        ...state,
        selectedFilter: payload
      };
    default:
      return state;
  }
};
