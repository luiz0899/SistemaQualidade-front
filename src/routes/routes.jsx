
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Avaliacao from '../pages/Avaliacao';
import Ouvidoria from '../pages/Ouvidoria';

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ouvidoria' element={<Ouvidoria/>} />
        <Route path="*" element={<Avaliacao/>} />
      </Routes>
    </BrowserRouter>
  );
}
