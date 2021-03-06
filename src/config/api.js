const api = {
  url:
    process.env.NODE_ENV === 'production'
      ? '/api'
      : 'http://localhost:8000/api',
  endpoints: {
    products: 'products',
  },
};

export default api;
