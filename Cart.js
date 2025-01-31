import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartActions";
const Cart = () =>{
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const handleRemoveFromCart = (item) =>{
dispatch(removeFromCart(item));
    };
    return(
        <div><h2>Shopping Cart</h2>
        {cartItems.length === 0? (<div>ypur cart is empty</div>):(cartItems.map((item)=>(<div key={item.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0'}}>
            <span>{item.title}</span>
            <button onClick={()=>handleRemoveFromCart(item)}>remove</button>
        </div>)))}
        </div>
    );
};
export default Cart;