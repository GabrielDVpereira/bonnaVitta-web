export const fetchProducts = () => {
  // call api to fetch the products
  return { type: "FETCH_PRODUCTS", products: ["teste", "teste2", "teste3"] };
};
