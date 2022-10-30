import { shouldSkipGeneratingVar } from "@mui/material";
import React, { useState } from "react";
import './ItemCounter.css';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';
import { ListadoUsuarios } from "../Usuarios/ListadoUsuarios";

const ItemCounter = ({stock, inicial, onAdd}) => {

    const [cantidad, setCantidad] = useState(inicial);

    const botonSumar = ()=>{
        if(cantidad < stock) {
            setCantidad(cantidad + 1);
        }     
    };

    const botonRestar = () =>{
        if (cantidad > 1){
            setCantidad(cantidad - 1);
        }  
    };

    const botonAgregar = () => {
    onAdd(cantidad)   
    if (cantidad < 1){
    setCantidad(cantidad + 1);
    }
    };


    return(
            <div className="botones">
              <button onClick={botonSumar} style={styles.boton}> <AddIcon /> <AddShoppingCartRoundedIcon/> </button>
              <h4> Total {cantidad} </h4>
              <button onClick={botonRestar}> <RemoveIcon /> <RemoveShoppingCartRoundedIcon /> </button>
              {/* <button onClick={botonAgregar} >  */}
              <button disabled={stock === 0} onClick={()=> onAdd(cantidad)} > 
              <span> { stock === 0 ? `No tenemos stock` : `Agregar al carrito`} </span> 
              {/* <span> { agregar ? <ListadoUsuarios/> : `Agregar al carrito`} </span>  */}
              {/* <span> Agregar al carrito </span> */}
              </button>
            </div>

    )
}

export default ItemCounter;


const styles ={
    boton:{
        color: 'black',
        backgroundColor: 'white',
        fontFamily: 'Indie Flower',
        fontSize: 'x-large', 
    }
}


