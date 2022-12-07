import { useSelector } from 'react-redux';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const buyNowHandler = () => {
    alert('Order Successfull!');
  }
  return (
    <div className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(cartItem => <CartItem
          // getting items from cartslice.js 
          key={cartItem.id}
          item={{ id: cartItem.id, title: cartItem.name, quantity: cartItem.quantity, total: cartItem.totalPrice, price: cartItem.price, img: cartItem.img }}
        />)}
      </ul>
      <div>
        {totalQuantity && <button onClick={buyNowHandler}>Buy Now</button>}
      </div>
    </div>
  );
};

export default Cart;
