import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { RegisterPage } from "./pages/RegisterPage";
import { CartProvider } from "./providers/CartContext";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CartProvider>
            <MainPage />
          </CartProvider>
        }
      />
      <Route
        path="/cart"
        element={
          <CartProvider>
            <Cart />
          </CartProvider>
        }
      />

      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
