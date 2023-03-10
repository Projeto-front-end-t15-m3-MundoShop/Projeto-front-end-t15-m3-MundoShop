import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { RegisterPage } from "./pages/RegisterPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
