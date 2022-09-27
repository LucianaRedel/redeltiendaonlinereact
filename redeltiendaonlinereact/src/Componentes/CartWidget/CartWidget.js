import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { style } from "@mui/system";

const CartWidget = () =>{
    return (
        <h4 style={styles.titulo}> Carrito de compras 
            <button style={styles.boton}>
            <ShoppingCartIcon  sx={{ fontSize: 60 }} />
            </button>
        </h4>
    )

}

export default CartWidget 

const styles ={
    titulo:{
        paddingRight: 20,
        display: 'flex',
        alignItems: 'center',
        color: 'blue',
    },
    boton:{
        color: 'black',
        backgroundColor: 'white',

    }
}