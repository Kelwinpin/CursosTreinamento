import Inicio from "pages/Inicio";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
