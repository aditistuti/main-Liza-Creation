import React from "react";
import { useCart } from "../utlis/Cartcontext";
function Product({product,onaddtowishlist,  onViewDetails}){
    const { addToCart } = useCart();
    return (
        <div className="product">
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>Price: Rs.{product.price}</p>
            <button onClick={()=>onaddtowishlist(product)}>Add to Wishlist</button>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
             <button onClick={onViewDetails}>View Details</button>
        </div>
    );
}
export default Product;
