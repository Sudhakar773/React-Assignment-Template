import { Routes, Route } from "react-router-dom";
// import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Users } from "../pages/Users/Users";
import { Login } from "../pages/Login/Login";
import ProductPage from "../pages/Product";
import Flames from "../pages/FlamesApp/Flames";
import Home from "../pages/Home";
// import App from "../App";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/users" element={<Users />} />
    <Route path="/login" element={<Login />} />
    <Route path="/flames" element={<Flames />} />
  </Routes>
);
