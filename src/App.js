import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import axios from "axios";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://products-api-01.herokuapp.com/api/products`;
    const makeApiCall = async () => {
      const response = await axios.get(url);
      setProducts(response.data);
    };
    makeApiCall();
  }, []);

  // console.log(products);

  return (
    <div className="app">
      <div className="layout">
        <Route path="/">
          <Nav />
        </Route>
        <Layout products={products} />
      </div>
    </div>
  );
}

export default App;
