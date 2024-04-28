import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img
          src="/cart shop.svg"
          alt="Shopping cart"
          width="150px"
          style={{ objectFit: "contain", textAlign: "center" }}
        />
        <h1 className="display-5 fw-bold">My Shop</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Welcome to <strong>My Shop Cart</strong> - Your One-Stop Destination
            for All Your Needs! Indulge in a Seamless Shopping Experience!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/products">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
              >
                Shop Now!
              </button>
            </Link>
            <Link to="/cart">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                View Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
