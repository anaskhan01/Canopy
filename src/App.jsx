import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./Store/store";
import Product_Detail from "./Pages/ProductDetails/Product_Detail";
import Product from "./Pages/Product/Product";
import AddCart from "./Pages/AddCart";


const App = () => {
  return (
    <div>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/" element={<Product />} />
        <Route path="product-detail" element={<Product_Detail />} />
        <Route path="addcart" element={<AddCart/>} />
      </Routes>
      <Footer />
      </Provider>
    </div>
  );
};

export default App;
