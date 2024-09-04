import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseState from "./Pages/UseState";
import App from "./App";
import About from "./Pages/About";
import Header from "./components/Header";
import NotFound from "./Pages/Notfound";
import Products from "./Pages/Product";
import ProductDetails from "./Pages/ProductsDetail";
import Signup from "./Pages/Signup";
import Login from "./Pages/Signin";
import Contactus from "./Pages/Contactus";
import Footer from "./components/End";


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
          <Route path="/Contactus" element={<Contactus />} />

          <Route path="/Signin" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
    )
}
export default AppRouter;