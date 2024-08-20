import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Inicio from "./componentes/Inicio";
import "boxicons";
import CarContextProvider from "./componentes/CartContex";
import Cart from "./componentes/Cart";
import Checkin from "./componentes/Checkin";

function App() {
  return (
    <div className="App">
    <CarContextProvider>
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Inicio />} />
          <Route path={"/Inicio"} element={<Inicio />} />
          <Route path={"/productos"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
          <Route path={"/Cart"} element={<Cart/>} />
          <Route path={"/Checkout"} element={<Checkin/>} />
        </Routes>        
      </BrowserRouter>
    </CarContextProvider>

    </div>
  );
}
export default App;
