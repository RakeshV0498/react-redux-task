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
import { CartState } from "../Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

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
                <Badge bg="none">View Cart {cart.length}</Badge>
              </DropdownToggle>
              <Dropdown.Menu style={{ minWidth: 325 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((product) => (
                      <span className="cart-item" key={product.id}>
                        <img
                          src={product.image}
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
                              type: "Remove_From_Cart",
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
