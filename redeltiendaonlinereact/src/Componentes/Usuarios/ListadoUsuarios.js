import React from "react";

export const ListadoUsuarios = ({listado, funcionEliminar}) =>{

    const handlerClickEliminar = (nombre) =>{
        funcionEliminar(nombre);

    }

    return(
        <>
        <h1> 
        Listado de Usuarios
        </h1>
        <ul>
            {listado.map((nombre, i)=>{
                return (
                <li>
                <h2 key={i}> {nombre} </h2> 
                <button onClick={()=>handlerClickEliminar(nombre)}> Eliminar </button>
                </li>)
            })}
        </ul>
                    
        </>
    );
};