import React from "react";
import { useFilterContext } from "../context/filter_context";
import Product from "./Product";
import styled from "styled-components";
const ProductList = () => {
  const { filter_products} = useFilterContext();
    return( 
    <Wrapper className="section">
    <div className="container grid grid-three-column">
      {filter_products.map((curElem) => {
        return <Product key={curElem.id} {...curElem} />;
      })}
    </div>
  </Wrapper>
    )
  
};
const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }
 
`;


export default ProductList;
