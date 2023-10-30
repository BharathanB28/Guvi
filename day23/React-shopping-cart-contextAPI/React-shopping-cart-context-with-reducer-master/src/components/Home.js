import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: {byStock},
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    return sortedProducts;
  }
  
  return (
    <div className="home">
    
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
