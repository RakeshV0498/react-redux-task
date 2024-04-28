/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import "./Styles.css";

const Products = () => {
  const { products } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

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

export default Products;
