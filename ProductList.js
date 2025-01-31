import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsActions";
import ProductItem from "./ProductItem";
const ProductList = () =>{
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.products.items);
    const productStatus = useSelector((state)=>state.products.status);
    useEffect(()=>{
        if(productStatus==='idle'){
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);
    return (
        <div>
            <h2>Products</h2>
            {productStatus === 'loading' && <div>Loadnig...</div>}
            {productStatus === "failed" && <div>Something went wrong Nara!</div>}
            <div style = {{display: 'flex', flexWrap: 'wrap'}}>
                {products.map((product)=>(<ProductItem key={product.id} product={product}/>))}
            </div>
        </div>
    );

};
export default ProductList;