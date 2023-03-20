import Inicio from "pages/Inicio";
import PlayerArquitetura from "pages/PlayerArquitetura";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="/Player" element={<PlayerArquitetura />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
