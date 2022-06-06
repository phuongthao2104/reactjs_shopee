
// import { Routes, Route } from "react-router-dom";

import { Routes, Route , ProtectedRoute} from "react-router-dom";

import Cart from "./pages/cart/Cart";
import DetailProduct from "./pages/detail/DetailProduct";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import Checkout from "./pages/checkout/Checkout";
import ThankPage from "./pages/thank/ThankPage";
import UserPage from "./pages/user/UserPage";



function Routing() {
  const infor = localStorage.getItem("infor");
  const nameInfor = JSON.parse(infor);
  const ProtectedRoute = (routerEnd) => {
    if (nameInfor === null) {
      return <LoginPage />;
    }
    const routerRedirect = routerEnd.routerEnd;
    switch (routerRedirect) {
      case "checkout":
        return <Checkout />;
      case "thank":
        return <ThankPage />;
      case "profile":
        return <UserPage />;
      default:
        return <HomePage />;
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id/:slug" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route
          path='/checkout'
          element={
            <ProtectedRoute routerEnd='checkout'>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path='/thank'
          element={
            <ProtectedRoute routerEnd='thank'>
              <ThankPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/my-profile'
          element={
            <ProtectedRoute routerEnd='profile'>
              <UserPage />
            </ProtectedRoute>
          }
        />
        <Route path='/:product_id/:slug' element={<DetailProduct />} />
      </Routes>
    </>
  );
}
export default Routing;
