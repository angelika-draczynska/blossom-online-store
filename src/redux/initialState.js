const initialState = {
  categories: [
    { id: 'roses', name: 'Roses' },
    { id: 'summer', name: 'Summer' },
    { id: 'tulips', name: 'Tulips' },
    { id: 'spring', name: 'Spring' },
    { id: 'love', name: 'Love' },
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
    },
  },
  cart: {
    products: [
    ],
    totalPrice: 0,
  },
};

export default initialState;
