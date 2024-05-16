import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css";
import { useDispatch } from "react-redux";
import { add } from "../../Store/CartSlice";
import { useNavigate } from "react-router-dom";
import {CiSearch} from 'react-icons/ci' 

const Product = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);



  const userData = data
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.title.toLowerCase().includes(search);
    })
    .map((item) => {
      return (
        <div className="productlist" key={item.id}>
          <img src={item.img} alt="" />
          <br />
          <p>{truncateString(15, item.name)}</p>
          <p>Price: {item.price}&#36;</p>{" "}
          <button
            className="btnprimary" onClick={()=>{navigate('/product-detail', {state: item})}}>
            Buy Now
          </button>
          <button className="btnprimary" onClick={() => handleAdd(item)}>
            Add to Cart
          </button>
        </div>
      );
    });

  const handleAdd = (data) => {
    dispatch(add(data));
  };
  return (
    <div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search Shopeer" onChange={(e)=> searchByTitle(e.target.value)}/>
        <div className="search-icon">
        <CiSearch/>
        </div>
      </div>
      <div className="userdata">{userData}</div>
    </div>
  );
};

export default Product;
