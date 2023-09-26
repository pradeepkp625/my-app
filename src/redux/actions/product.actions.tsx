import axios from 'axios';
import useFetch from '../../hooks/useFetch';
import { ActionTypes } from '../constants/actions.types';
import { AnyAction } from 'redux';

export const fetchPosts = (payload) => {
  if (payload) {
    return {
      type: ActionTypes.ADD_TO_CART,
      payload: payload
    }
  }
  return (dispatch: any): void => {
    dispatch({ type: ActionTypes.SET_PRODUCTS });

    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ActionTypes.SET_PRODUCTS, payload: error.message });
      });
  }
};
export const addUser = (payload) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ADD_USER });
    const options = {
      url: 'https://fakestoreapi.com/users/7',
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        ...payload
      }
    };
    axios(options)
      .then(response => {
        dispatch({ type: ActionTypes.ADD_USER, payload: response.data });
      });
  }
};
export const addToCart = (cartProduct) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: cartProduct
  }
}
export const removeCart = (cartProduct) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: cartProduct
  }
}
export const selectedProduct = (product: any) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  };
};

export const removeSelectedProduct = (id) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: id
  };
};
export const setSelectedFilter = (value) => {
  return {
    type: ActionTypes.SELCTED_FILTER,
    payload: value
  };
};
