import { CartState } from "../Context";
import Product from "./Product";
import "./Styles.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <>
      <article className="home">
        <section className="product-container">
          {products.map((product) => (
            <Product
              product={{
                ...product,
                description:
                  product.description.length > 50
                    ? `${product.description.slice(0, 50)}..`
                    : product.description,
              }}
              key={product.id}
            />
          ))}
        </section>
      </article>
    </>
  );
};

export default Home;
