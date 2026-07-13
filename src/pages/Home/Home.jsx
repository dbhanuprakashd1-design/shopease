import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FlashSale from "../../components/home/FlashSale";
import FeaturedProducts from "../../components/product/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FlashSale />
      <FeaturedProducts />
    </>
  );
};

export default Home;