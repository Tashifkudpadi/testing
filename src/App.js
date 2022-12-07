import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Header from "./components/header/Header";
import Products from "./components/Products/Products";

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible)
  return (
    <Fragment>
      <Header />
      {showCart && <Cart />}
      <Products />
    </Fragment>

  );
}

export default App;
