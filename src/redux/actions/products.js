export const fetchProducts = () => {
  // call api to fetch the products
  return { type: "FETCH_PRODUCTS", products: ["teste", "teste2", "teste3"] };
};
export const addProduct = (product) => {
  // call api to add new product
  return { type: "ADD_NEW_PRODUCT", product };
};
