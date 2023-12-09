import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemsListContainer } from "./components/ItemsListContainer";
import { Error404 } from "./components/Error404";

import "./App.css";
import { ItemsDetailContainer } from "./components/ItemsDetailContainer";
import { CartProvider } from "./contexts/CartContext";


function App() {
  return (
<CartProvider>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemsListContainer greeting="Productos"/>}/>
    <Route path="/category/:id" element={<ItemsListContainer greeting="Productos"/>}/>
    
    <Route path="/items/:id" element={<ItemsDetailContainer/>}/>
    <Route path="*" element={<Error404/>}/>
  </Routes>
  
  </BrowserRouter>
</CartProvider>
  );
}

export default App;
