/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import "./Styles.css";

const Products = () => {
  const { products } = useSelector((state) => state.productReducer);
  console.log(products);
  const dispatch = useDispatch();

  return (
    <>
      <article className="home">
        <section className="product-container">
          {products.map((product) => (
            <Product
              product={{
                ...product,
                name:
                  product.title.length > 20
                    ? `${product.title.slice(0, 20)}..`
                    : product.title,
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
