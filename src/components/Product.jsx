import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product(props) {
  const { product } = props;
  // console.log(product);

  return (
    <Link to={`/products/${product._id}`}>
      {product.name !== "Product" && (
        <div className="product">
          <img
            className="product-image"
            src={product.imgURL}
            alt={product.name}
          />
          <div className="product-name">{product.name}</div>
          <div className="price">{`$${product.price}`}</div>
        </div>
      )}
    </Link>
  );
}

export default Product;
