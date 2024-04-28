import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import "./Styles.css";
import { CartState } from "../Context";

const Product = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <div className="products">
        <Card>
          <Card.Img
            variant="top"
            src={product.image}
            alt="{product.name}"
            height={300}
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
            {cart.some((p) => p.id === product.id) ? (
              <Button
                onClick={() =>
                  dispatch({
                    type: "Remove_From_Cart",
                    payload: product,
                  })
                }
                variant="danger"
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                onClick={() =>
                  dispatch({ type: "Add_To_Cart", payload: product })
                }
                disabled={!product.stock}
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
