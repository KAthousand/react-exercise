import React, { useState } from "react";
import ProductDetail from "./ProductDetail";
import Products from "./Products";
import Sort from "./Sort";
import SearchForm from "./SearchForm";
import { Route } from "react-router-dom";

function Layout(props) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  // pass onsubmit and onchange
  const { products } = props;
  return (
    <div className="layout-children">
      <Route exact path="/">
        <SearchForm search={search} setSearch={setSearch} />
        <Sort sort={sort} setSort={setSort} />
        <Products products={products} search={search} sort={sort} />
      </Route>
      <Route path="/products/:_id">
        <ProductDetail products={products} />
      </Route>
    </div>
  );
}

export default Layout;
