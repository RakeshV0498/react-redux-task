import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index path="products" element={<Products />}>
              Products
            </Route>
            <Route index path="product:prodId" element={<Product />}>
              Products
            </Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
