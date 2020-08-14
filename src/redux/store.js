import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./reducers/productsReducer";

const store = createStore(productsReducer);

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
