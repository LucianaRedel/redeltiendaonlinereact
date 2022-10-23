import React, { useContext } from "react";
import './Cart.css';
import { Context } from '../../Context/CustomContext';
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";

export const Cart = () => {
    const { cart } = useContext(Context);
    return (
      <>
        {cart.length === 0 ? (
          <div style={styles.titulo}>
            <h1 >
              No agregaste productos aun, puedes <Link to="/"> Continuar comprando aqui </Link>
            </h1>
            <h2> Gracias por tu visita </h2>
          </div>
        ) : (
          <div className="detalleItem">
            {cart.map((producto) => (
             <h1 key={producto.id}> 
              <img alt={producto.title} src={producto.image} /> 
              Producto {producto.title} /   
              Cantidad {producto.cantidad} /
              Precio $ {producto.price} / 
              Total $ {producto.price * producto.cantidad}
              <ItemCounter/>
              </h1>
            ) 
            )}
            
          </div>
        )}
      </>
    );
  };

  const styles ={
    titulo:{
        padding: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}
    
