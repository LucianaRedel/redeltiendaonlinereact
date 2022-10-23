import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { style } from "@mui/system";
import { Context } from '../../Context/CustomContext';

const CartWidget = () =>{

    const {cantidadItem} = useContext (Context)

    return (
        <div>
        <h4 style={styles.titulo}> Carrito de compras
            <button style={styles.boton}>
            <ShoppingCartIcon  sx={{ fontSize: 60 }} />
            <h2> {cantidadItem} </h2>
            </button>
        </h4>
        </div>
    )

}

export default CartWidget 

const styles ={
    titulo:{
        paddingRight: 20,
        display: 'flex',
        alignItems: 'center',
        color: 'blue',
        justifyContent: 'space-between',
    },
    boton:{
        color: 'black',
        backgroundColor: 'white',

    }
}