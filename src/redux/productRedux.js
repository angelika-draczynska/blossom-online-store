import axios from 'axios';

/* selectors */
export const getCurrentProduct = ({ product }) => product.data;
export const getGalleryPreview = ({ product }) => product.galleryPreview;

export const isLoadingActive = ({ product }) => product.loading.active;
export const isLoadingError = ({ product }) => product.loading.error;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const GALLERY = createActionName('GALLERY');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const changeGalleryImage = payload => ({ payload, type: GALLERY });

/* thunk creators */

export const fetchProduct = productId => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const url = `http://localhost:8000/api/products/${productId}`;
    axios
      .get(url)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false
        }
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false
        },
        data: action.payload
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: true
        }
      };
    }
    case GALLERY: {
      return {
        ...statePart,
        data: {
          ...statePart.data,
          image: action.payload
        }
      };
    }
    default:
      return statePart;
  }
};
