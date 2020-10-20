import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail(props) {
  const { products } = props;
  const params = useParams();
  const product = products.find((product) => product._id === params._id);

  if (!product) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="product-detail">
      <img
        className="product-detail-image"
        src={product.imgURL}
        alt={product.className}
      />
      <div className="detail">
        <div className="name">{product.name}</div>
        <div className="price">{`$${[product.price]}`}</div>
        <div className="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductDetail;
