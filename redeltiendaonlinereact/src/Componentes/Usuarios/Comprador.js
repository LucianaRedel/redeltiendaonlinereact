import React from "react";
import { useState } from "react";
import { ListadoUsuarios } from "./ListadoUsuarios";
import { dataBase } from "../../Firebase/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import swal from "sweetalert";

export const Comprador = () => {

    // const [ comprador, setComprador] = useState({
    //     email: '',
    //     nombre: '',
    //     apellido: '',
    // });

    const [ comprador, setComprador ] = useState({});

    const [ listado, setListado] = useState([])

    // const handleChange = (e) =>{
    //     setComprador(e.target.value)
    // }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setComprador(values => ({...values, [name]: value}))
      }

    const { nombre, apellido, email } = setComprador;

    const handlerClick = ()=>{
    setListado([...listado, comprador]);
    console.log(listado);
    console.log(comprador)

    const compradorCollection = collection(dataBase, "compradores");
        addDoc(compradorCollection, {
            comprador,
            fecha: serverTimestamp()
        })
    swal("Comprador agregado!", `El email registrado es ${comprador.email}`, "success");

    }

    // const funcionEliminar = (nombre)=>{
    // setListado(listado.filter((usuario)=> usuario !== nombre))
    // }

    return (
        <>
        <div style={styles.boton}>
        <h1> 2do paso, ingrese los datos del comprador para finalizar la compra </h1>
        
        <form>
            <label> Nombre
        <input type="text" name="nombre" value={nombre} onChange={handleChange}/>
            </label>
            <label> Apellido
        <input type="text" name="apellido" value={apellido} onChange={handleChange}/>
            </label>
            <label> E-mail
        <input type="text" name="email" value={email} onChange={handleChange}/>
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