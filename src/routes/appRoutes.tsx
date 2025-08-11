import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/index.tsx";
import { Painel } from '../pages/Painel.tsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/painel" element={<Painel />} />
    </Routes>
  );
};
