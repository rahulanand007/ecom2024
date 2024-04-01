import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler =()=>{
    
  }
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="qw"
          name="Macbook"
          price={78000}
          stock={125}
          handler={addToCartHandler}
          photo="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp13-space-m1-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621779000"
        />
      </main>
    </div>
  );
};

export default Home;
