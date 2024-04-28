import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import Store from "./Store/Store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}>
              Products
            </Route>
            <Route path="/product/:prodId" element={<Product />}>
              Products
            </Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
