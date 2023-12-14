import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import BannerSlider from "./components/BannerSlider";
//mport { useFilterContext } from "./context/filter_context";

const Products = () => {
  return (
    <Wrapper>
    <BannerSlider/>
      <div className="product">
        <h1>Our <span>Products</span></h1>
      </div>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.product{
  height:50px;
  margin:0px;
  padding:0px;
  font-family:'Poppins', sans-serif;
}
.product h1{
  text-align:center;
  padding:2rem 0;
  padding-bottom:3rem;
  font-size: 3.0rem;
  color:#0d490d;
}

.product span{
  background:#90ee90;
  color:darkgreen;
  display:inline-block;
  padding:0 3rem;
  clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50% ,0% 0%);

}
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
