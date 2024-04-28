import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <img src="\cart shop.svg" alt="Shopping cart" />
        <h1 className="display-5 fw-bold">My Shop</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Welcome to <strong>My Shop Cart</strong> - Your One-Stop Destination
            for All Your Needs! Indulge in a Seamless Shopping Experience!
            Explore Our Extensive Collection of Premium Products, Curated Just
            for You. From Trendy Fashion Essentials to High-Tech Gadgets,
            We&aposve Got It All! Start Shopping Now and Elevate Your Lifestyle
            Today!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Shop Now!
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              View Cart
            </button>
          </div>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

export default Home;
