import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption" style={{ color: "#7A9D7A" }}>
            {category}
          </figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price" style={{ color: "#556D55" }}>
              {<FormatPrice price={price} />}/kg
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
