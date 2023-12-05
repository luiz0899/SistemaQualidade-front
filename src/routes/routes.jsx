
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Avaliacao from '../pages/Avaliacao';
import Ouvidoria from '../pages/Ouvidoria';
import Login from '../pages/Login';
import RestauranteAvaliacao from '../pages/RestauranteAvaliacao';

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ouvidoria" element={<Ouvidoria/>} />
        <Route path="/avaliacao" element={<Avaliacao/>} />
        <Route path="/restaurante" element={<RestauranteAvaliacao/>} />
        <Route path="*" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
