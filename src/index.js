import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import "./index.css";
import App from "./App";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainHeader />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:productDetail" element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>
);
