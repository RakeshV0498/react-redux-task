import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(cartProducts);
    setTotal(
      cartProducts.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
    );
  }, [cartProducts]);

  return (
    <>
      <div className="home">
        <div className="cart-container">
          <ListGroup>
            {cartProducts.map((product) => (
              <ListGroup.Item key={product.id}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={2}>
                    <span style={{ fontWeight: "bold" }}>{product.title}</span>
                  </Col>
                  <Col md={2}>
                    $
                    <span style={{ fontWeight: "bold" }}> {product.price}</span>
                  </Col>
                  <Col md={2}>
                    <Rating rating={product.rating} />
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={product.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "change_cart_qty",
                          payload: {
                            id: product.id,
                            qty: Number(e.target.value),
                          },
                        })
                      }
                    >
                      {[...Array(product.stock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({ type: "remove_from_cart", payload: product })
                      }
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="filters summary">
          <span className="title">Subtotal {cartProducts.length} Items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>Total:$ {total}</span>
          <Button type="button" disabled={cartProducts.length === 0}>
            Proceed to CheckOut
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
