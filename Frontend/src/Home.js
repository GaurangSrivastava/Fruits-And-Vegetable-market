import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";


const Home = () => {
  const data = {
    name: "Novus Vegetables",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
    </>
  );
};

export default Home;
