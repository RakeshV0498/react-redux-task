/* eslint-disable no-unused-vars */
import {
  Badge,
  Button,
  Container,
  Dropdown,
  DropdownToggle,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { cartProducts } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">MyShop Cart</Link>
          </Navbar.Brand>
          <Nav>
            <Dropdown alignright="true">
              <DropdownToggle variant="primary">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg="none">View Cart {cartProducts.length}</Badge>
              </DropdownToggle>
              <Dropdown.Menu style={{ minWidth: 325 }}>
                {cartProducts.length > 0 ? (
                  <>
                    {cartProducts.map((product) => (
                      <span className="cart-item" key={product.id}>
                        <img
                          src={product.imageUrl}
                          alt={product.title}
                          className="cart-item-img"
                        />
                        <div className="cart-item-detail">
                          <span>{product.title}</span>
                          <span>${product.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "remove_from_cart",
                              payload: product,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
