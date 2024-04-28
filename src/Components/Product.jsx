import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import "./Styles.css";

const Product = ({ product }) => {
  return (
    <>
      <div className="products">
        <Card>
          <Card.Img
            variant="top"
            src={product.imageUrl}
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
            <Button variant="danger">Remove from Cart</Button>
            <Button variant="primary">
              {!product.stock ? "Out of Stock" : "Add to Cart"}
            </Button>
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
