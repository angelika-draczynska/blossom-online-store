import axios from 'axios';

/* selectors */
export const getCartProducts = ({ cart }) => cart;
export const getTotalPrice = ({ cart }) => cart.totalPrice;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CLEAR_CART = createActionName('CLEAR_CART');
const INCREASE_QUANTITY = createActionName('INCREASE_QUANTITY');
const DECREASE_QUANTITY = createActionName('DECREASE_QUANTITY');
const ADD_PRODUCT_NOTE = createActionName('ADD_PRODUCT_NOTE');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const clearCart = payload => ({ payload, type: CLEAR_CART });
export const increaseQuantity = payload => ({
  payload,
  type: INCREASE_QUANTITY
});
export const decreaseQuantity = payload => ({
  payload,
  type: DECREASE_QUANTITY
});
export const addProductNote = (payload, value) => ({
  payload, value,
  type: ADD_PRODUCT_NOTE
});

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        request: {
          active: true,
          error: false
        }
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        request: {
          active: false,
          error: false
        },
        data: action.payload
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        request: {
          active: false,
          error: true
        }
      };
    }
    case ADD_TO_CART: {
      let itemExistInCart = statePart.products.some(
        item => action.payload._id === item._id
      );
      console.log('itemExistInCart', itemExistInCart);
      let itemExisted = statePart.products.find(
        item => action.payload._id === item._id
      );
      if (itemExistInCart) {
        return {
          products: statePart.products.map(product => {
            if (action.payload._id === product._id) {
              product.quantity++;
              return product;
            } else {
              return product;
            }
          }),
          totalPrice: action.payload.price + statePart.totalPrice
        };
      } else {
        return {
          ...statePart,
          products: [...statePart.products, action.payload],
          totalPrice: action.payload.price + statePart.totalPrice
        };
      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...statePart,
        products: statePart.products.filter(
          product => product._id !== action.payload._id
        ),
        totalPrice:
          statePart.totalPrice - action.payload.price * action.payload.quantity
      };
    }
    case CLEAR_CART: {
      return {
        products: [],
        totalPrice: 0
      };
    }
    case INCREASE_QUANTITY: {
      const productToUpdate = statePart.products.find(
        product => product._id === action.payload
      );
      return {
        ...statePart,
        products: statePart.products.map(product => {
          if (product._id === action.payload) {
            product.quantity++;
            return product;
          } else {
            return product;
          }
        }),
        totalPrice: statePart.totalPrice + productToUpdate.price
      };
    }
    case DECREASE_QUANTITY: {
      const productToUpdate = statePart.products.find(
        product => product._id === action.payload
      );
      return {
        ...statePart,
        products: statePart.products.map(product => {
          if (product._id === action.payload) {
            product.quantity--;
            return product;
          } else {
            return product;
          }
        }),
        totalPrice: statePart.totalPrice - productToUpdate.price
      };
    }
    case ADD_PRODUCT_NOTE: {
      return {
        ...statePart,
        products: statePart.products.map(product => {
          if(product._id === action.payload._id) {
            product.note = action.value;
          }
          return product;
        }),
      }
    }
    default:
      return statePart;
  }
};
