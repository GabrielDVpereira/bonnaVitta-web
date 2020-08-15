const inititalState = [1, 2, 3, 4, 5];

const productsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return action.products;
    case "ADD_NEW_PRODUCT":
      return [...state, action.product];
    default:
      return state;
  }
};

export default productsReducer;
