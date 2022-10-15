//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Componentes/Navbar/Navbar'
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer'
import ItemCounter from './Componentes/ItemCounter/ItemCounter';
import { Cart } from './Componentes/Cart/Cart';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';
import swal from "sweetalert";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const saludo= "Bienvenido a nuestra pagina, gracias por visitarnos!";

  const onAdd =(cantidad) =>{
    if (cantidad > 0){
    swal("Item agregado!", `Se han agregado ${cantidad} unidades al carrito de compras`, "success");
    };
}

  return (

  <> 
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer gretting ={saludo}/>}/>
      <Route path="/categoria/:id" element={<ItemListContainer gretting ={saludo}/>}/>
      <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<ItemListContainer gretting ={saludo}/>}/>
    </Routes>
    <ItemCounter stock={8} inicial={1} onAdd={onAdd}/> 
  </BrowserRouter>
  </>
  );
}

export default App;

{/* <ItemListContainer gretting ={saludo}/> */}
    // <ItemDetailContainer/>
    // <ItemCounter stock={8} inicial={1} onAdd={onAdd}/> 
