//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Componentes/Navbar/Navbar'
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer'
import ItemCounter from './Componentes/ItemCounter/ItemCounter';
import swal from "sweetalert";


function App() {

  const saludo= "Bienvenido a nuestra pagina, gracias por visitarnos!";

  const onAdd =(cantidad) =>{
    if (cantidad > 0){
    swal("Item agregado!", `Se han agregado ${cantidad} unidades al carrito de compras`, "success");
    };
}

  return (
    // <div className="App">
    //   {/* <header className="App-header"> */}
    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Hola Mundo!
    //     </a> */}
    //   {/* </header> */}
    // </div>
  <> 
    <Navbar />
    <ItemListContainer gretting ={saludo}/>
    <ItemCounter stock={8} inicial={1} onAdd={onAdd}/>
  </>
  );
}

export default App;
