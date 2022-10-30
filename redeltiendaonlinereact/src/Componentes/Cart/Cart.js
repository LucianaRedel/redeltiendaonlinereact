import React, { useContext } from "react";
import './Cart.css';
import { Context } from '../../Context/CustomContext';
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import { dataBase } from "../../Firebase/Firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import swal from "sweetalert";
import { Comprador } from '../Usuarios/Comprador';


export const Cart = ({ product }) => {
    const { cart, agregarItem, total, borrar } = useContext(Context);

    const comprador = {
    nombre: 'moni',
    apellido: 'argento',
    email: 'pa@gmail.com',
    }
    // Tomar estos datos de un formulario de usuarios

    const finalizarCompra = ()=>{
        const ventasCollection = collection(dataBase, "ventas");
        addDoc(ventasCollection, {
            comprador,  
            items: cart,
            total: total,
            fecha: serverTimestamp()
        })
        .then(result =>{
            console.log(result.id);
            const guardarId = result.id
            swal("Compra finalizada!", `El ID de su compra es ${guardarId}`, "success");
        })
        .catch ((error) =>{
            console.log("error");
        });
        actualizarStock();
        borrar();
    }

  const actualizarStock = ()=>{ 
    cart.forEach (item => {
      const product = doc(dataBase, "productos", item.id);
      updateDoc(product, {stock: item.stock - item.cantidad })
    })
  };

    const onAdd =(cantidad) =>{
        agregarItem(product, cantidad);  
      }

    return (
      <>
        {cart.length === 0 ? (
          <div style={styles.titulo}>
            <h1 >
              No agregaste productos aun, puedes <Link to="/"> Continuar comprando aqui </Link>
            </h1>
          </div>
        ) : (
          <div className="detalleItem">
              <h1 style={styles.titulo}> Detalle del carrito de compras </h1>
            {cart.map((producto) => (
             <h2 key={producto.id}> 
              <img alt={producto.title} src={producto.image} /> 
              Producto {producto.title} /   
              Cantidad {producto.cantidad} /
              Precio $ {producto.price} / 
              Total $ {producto.price * producto.cantidad}
              {/* <ItemCounter onAdd={onAdd} /> */}
            </h2>
            ) 
            )}         
          </div>
        )}
        <div style={styles.titulo}>
            <h1> Total carrito de compras </h1>
            <h1> ${total} </h1>
        </div>
        <button style={styles.boton} onClick={borrar}> Vaciar el carrito de compras </button>
        <Comprador/>
        <button style={styles.boton} onClick={finalizarCompra} > Finalizar Compra </button>
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
    boton:{
        margin: 50,
        alignItems: 'center',
        display: 'flex',
        fontFamily: 'Indie Flower',
    }
}
    
