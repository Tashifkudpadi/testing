import React from "react";
import "./ProductItems.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

function ProductItems(props) {
  const { img, title, price, vendor, available, id } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        img,
        id,
        title,
        price,
        vendor,
      }) //passing the object as a payload
    );
  };

  return (
    <div>
      <img src={img} alt="img" />
      <h3>${price}</h3>
      <h1> {title}</h1>
      <h5>Seller Name: {vendor}</h5>
      <p>Only {available} Left</p>
      <button onClick={addToCartHandler} disabled={available === 0}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductItems;
