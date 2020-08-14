const productsReducer = (state = ["teste"], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return action.products;
    default:
      return state;
  }
};

export default productsReducer;
