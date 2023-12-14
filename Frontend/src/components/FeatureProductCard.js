import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import styled from "styled-components";
const FeatureProductCard = (curElem) => {
  const { id, name, image, price, type, stock } = curElem;
  return (
    <Wrapper>
    <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">
            {type}
          </figcaption>
        </figure>

      <div className="card-data">
        <div className="card-data-flex">
          <h3><b>{name}</b></h3>
          <p className="card-data--price" style={{ color: "#556D55" }}>
            {<FormatPrice price={price} />}/kg
          </p>
        </div>
      </div>
    </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  figure {
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius:10px;
    transition: all 0.5s linear;
    
    img {
      max-width: 100%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    

    .caption {
      position: absolute;
      top: 3%;
      right:3%;
      text-transform: uppercase;
      background-color: #90ee90c2;
      color: #000000cf;
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
      cursor:default;
    }
  }

  .card {
    display: flex;
    width: 250px;
    height: 300px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    position: relative;
    border-radius: 15px;
    background-color: white;
    box-shadow: -7px 8px 10px rgb(74 110 112 / 25%);
    padding:10px 0;
    .card-data {
         font-size: 18px;
         font-weight: 700;
         margin: 0px;
         width: 90%;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      font-family: 'Oswald', sans-serif;
      color: rgb(9 83 23 / 90%);
      text-transform: capitalize;
    }

    .card-data--price {
      font-family: 'Oswald', sans-serif;
      color: rgb(34 75 34);
    }
    

   
      }
    }
  }
`;
export default FeatureProductCard;
