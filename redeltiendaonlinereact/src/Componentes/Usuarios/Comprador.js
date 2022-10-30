import React from "react";
import { useState } from "react";
import { ListadoUsuarios } from "./ListadoUsuarios";


export const Comprador = () => {


    const [ formulario, setFormulario] = useState({
        email: '',
        nombre: '',
        apellido: '',
    });

    const [ listado, setListado] = useState([])

    const handlerChange = (e) =>{
        setFormulario(e.target.value)
    }

    const { nombre, apellido, email } = setFormulario;

    const handlerClick = ()=>{
    setListado([...listado, formulario]);
    console.log(listado);
    console.log(formulario)
    }

    const funcionEliminar = (nombre)=>{
    setListado(listado.filter((usuario)=> usuario !== nombre))
    }


    return (
        <>
        <div style={styles.boton}>
        <span> Ingrese sus datos </span>
        
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
        <div>
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
        color: 'black',
        backgroundColor: 'white',
        fontFamily: 'Indie Flower',
        fontSize: 'x-large', 
    }
}