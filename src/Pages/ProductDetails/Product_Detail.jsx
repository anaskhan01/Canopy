import React from "react";
import "./Productdetail.css";
import { useLocation } from "react-router-dom";
const Product_Detail = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="product_detail">
      <div className="product_detail2">
        <img className="imageproduct" src={location.state.img} alt="" />
        <div style={{padding: "200px"}}>
        <h1>
          {location.state.name}
        </h1>
        <p >{location.state.description}</p>
        <h3>
          Price: {location.state.price}&#8377;
        </h3>
        <button className="btnprimary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product_Detail;
