import React from "react";
import { useState } from "react";
import { ListadoUsuarios } from "./ListadoUsuarios";

export const Usuarios = () => {
    const [ nombre, setNombre] = useState('')
    const [ listado, setListado] = useState([])

    const handlerChange = (e) =>{
        setNombre(e.target.value)
    }

    const handlerClick = ()=>{
        setListado([...listado, nombre]);
        console.log(listado);
    }

    const funcionEliminar = (nombre)=>{
        setListado(listado.filter((usuario)=> usuario !== nombre))
    }

    return (
        <div style={styles.boton}>
        <input type="text" value={nombre} onChange={handlerChange}/>
        <button onClick={handlerClick}> Agregar </button>          
        <ListadoUsuarios listado={listado} funcionEliminar={funcionEliminar}/>
        </div>
    )
}


const styles ={
    boton:{
        color: 'black',
        backgroundColor: 'white',
        fontFamily: 'Indie Flower',
        fontSize: 'x-large', 
    }
}