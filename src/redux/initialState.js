const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' }
  ],
  products: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  product: {
    data: null,
    loading: {
      active: false,
      error: false,
    }
  },
  cart: {
    products: [
    ],
    totalPrice: 0
  }
};

export default initialState;
