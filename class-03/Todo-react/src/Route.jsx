import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseState from "./Pages/UseState";
import App from "./App";
import About from "./Pages/About";
import Header from "./components/Header";
import NotFound from "./Pages/Notfound";
import Products from "./Pages/Product";
import ProductDetails from "./Pages/ProductsDetail";


function AppRouter() {
    return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route index element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/product" element={<Products />} />
          <Route path="/products/:title/id/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
    )
}
export default AppRouter;