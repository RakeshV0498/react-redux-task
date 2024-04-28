import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ product }) => {
  const { cartProducts } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  return (
    <>
      <div className="products" style={{ width: "400px" }}>
        <Card>
          <Card.Img
            variant="top"
            src={product.imageUrl}
            alt={product.name}
            style={{ objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle>
              {product.brand}
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>${product.price}</Card.Text>
            </Card.Subtitle>
            <Card.Text>
              <Rating rating={Math.floor(product.rating)} />
            </Card.Text>
            {cartProducts.some((p) => p.id === product.id) ? (
              <Button
                onClick={() =>
                  dispatch({
                    type: "remove_from_cart",
                    payload: product,
                  })
                }
                variant="danger"
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch({ type: "add_to_cart", payload: product });
                }}
                variant="primary"
              >
                {!product.stock ? "Out of Stock" : "Add to Cart"}
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
