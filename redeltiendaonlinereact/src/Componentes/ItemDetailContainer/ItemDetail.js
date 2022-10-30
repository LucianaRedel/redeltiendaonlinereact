import React, { useState, useContext } from "react";
import ItemCounter from '../ItemCounter/ItemCounter';
import swal from "sweetalert";
import { Link } from 'react-router-dom';
import { Context } from '../../Context/CustomContext';
import { avatarGroupClasses } from "@mui/material";


const ItemDetail = ({ product }) => {

  // const [mostrarItemCount, setMostrarItemCount] = useState(true)
  const [presionarBoton, setPresionarBoton] = useState(false)

  const { agregarItem, cart, itemsEnCarrito } = useContext(Context);

 let stock = 0;
  if(itemsEnCarrito(product.id)){
  const encontrar = cart.find(item => item.id === product.id);
  stock = product.stock - encontrar.cantidad;
  } else{
  stock = product.stock;
  }

  const onAdd =(cantidad) =>{
    setPresionarBoton(true);
    // if (cantidad > 0){
    agregarItem(product, cantidad);  
    swal("Item agregado!", `Se han agregado ${cantidad} unidades del producto ${product.title} al carrito de compras`, "success");
    // setMostrarItemCount(false);
    // };
  }

  return (
    <div className="detalleItem">
      <img alt={product.title} src={product.image} />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <h2>{product.price}</h2>
      {/* {mostrarItemCount ? (<ItemCounter stock={8} inicial={1} onAdd={onAdd}/>) :  */}
      {!presionarBoton ? (
        <ItemCounter stock={product.stock} inicial={1} onAdd={onAdd}/>
      ) : 
      (<Link to={'/cart'}>
        <button> Finalizar compra </button>
      </Link>
      )}
    </div>
  );
};

export default ItemDetail;