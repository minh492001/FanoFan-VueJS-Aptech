export const getNumberOfCartItem = (state) => {
  return state.cart.count;
};
export const getPrice = (state) => {
  return state.cart.total_price;
};
