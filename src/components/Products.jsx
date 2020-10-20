import React from "react";
import Product from "./Product";
import "./Products.css";

function Products(props) {
  const { search } = props;
  const { products } = props;
  // const { sort } = props;
  // console.log(products);

  const items = products.filter((product) => {
    if (search === "") {
      return products;
    } else if (product.name.includes(search)) {
      return products;
    }
    return "";
  });

  return (
    <div className="products">
      {items.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </div>
  );
}

export default Products;
