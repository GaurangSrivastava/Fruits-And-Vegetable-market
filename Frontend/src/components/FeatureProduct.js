import { useProductContext } from "../context/productcontex";
import styled from "styled-components";
import img1 from "../assets/Features/potato.jpg";
import img2 from "../assets/Features/tomato.jpg";
import img3 from "../assets/Features/capcicum.jpg";
import FeatureProductCard from "./FeatureProductCard";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  //id, name, image, price, type
  const featureProduct = [
    {
      id: 1,
      name: "potato",
      image: img1,
      price: "20",
      type: "fresh vegetable",
    },
    {
      id: 2,
      name: "tomato",
      image: img2,
      price: "40",
      type: "fresh vegetable",
    },
    {
      id: 3,
      name: "capcicum",
      image: img3,
      price: "35",
      type: "fresh vegetable",
    },
  ];

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="heading" style={{ color: "rgb(34 104 34)" }}><h2>Most Bought Veggies!</h2></div>
        <div className="grid grid-three-column">
          {featureProduct.map((curElem) => {
            return <FeatureProductCard key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow:rgba(36, 81, 42, 0.36) 1px 1px 9px 7px inset;
  
  .container {
    max-width: 120rem;
    
  }
  .heading{
    font-weight:700;
    font-size:2rem;
    margin-bottom: 6rem;
  }
  .heading h2{
    font-family: 'Courgette', cursive;
  }

`;

export default FeatureProduct;
