import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartActions";
const ProductItem = ({product})=>{
    const dispatch = useDispatch();
    const handleAddToCart = ()=>{
        dispatch (addToCart(product));
    };
    return (
        <div style={{border: '1px solid #ddd', borderRadius: '5px', padding: '10px', width: '200px'}}>
            <img src = {product.image} alt = {product.title} style={{width:'100%'}}></img>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};
export default ProductItem;