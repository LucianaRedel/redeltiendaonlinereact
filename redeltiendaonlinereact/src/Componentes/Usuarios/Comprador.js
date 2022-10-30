import React from "react";
import { useState } from "react";
import { ListadoUsuarios } from "./ListadoUsuarios";

export const Comprador = () => {

    const [ comprador, setComprador] = useState({
        email: '',
        nombre: '',
        apellido: '',
    });

    const [ listado, setListado] = useState([])

    const handlerChange = (e) =>{
        setComprador(e.target.value)
    }

    const { nombre, apellido, email } = setComprador;

    const handlerClick = ()=>{
    setListado([...listado, comprador]);
    console.log(listado);
    console.log(comprador)
    }

    const funcionEliminar = (nombre)=>{
    setListado(listado.filter((usuario)=> usuario !== nombre))
    }


    return (
        <>
        <div style={styles.boton}>
        <h1> 2do paso, ingrese los datos del comprador para finalizar la compra </h1>
        
        <form>
            <label> Nombre
        <input type="text" name="nombre" value={nombre} onChange={handlerChange}/>
            </label>
            <label> Apellido
        <input type="text" name="apellido" value={apellido} onChange={handlerChange}/>
            </label>
            <label> E-mail
        <input type="text" name="email" value={email} onChange={handlerChange}/>
            </label>
        </form>
        
        </div>
        <div style={styles.boton}>
        <button style={styles.boton} onClick={handlerClick}> Agregar comprador </button> 
        {/* <ListadoUsuarios listado={listado} funcionEliminar={funcionEliminar}/>  */}
        </div>
        </>
    )
    
}

const styles ={
    boton:{
        padding: 30,
        margin: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'black',
        backgroundColor: 'white',
        fontFamily: 'Indie Flower',
        fontSize: 'x-large', 
    }
}