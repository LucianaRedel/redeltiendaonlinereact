import React from "react";
import './Navbar.css'
import logo from '../../Assets/logo.jpeg'
import '../CartWidget/CartWidget'
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {

    const categoriasNavbar = [
        {nombre: "Recomendaciones", id:0, link: "#"},
        {nombre: "Login", id:1, link: "#"},
        {nombre: "Contacto", id:2, link:"#" },
    ];

    return(
        <header>
            <img src={logo} alt="Logo" />
            <h1> Vinos y Quesos </h1>          
            <nav>
                {
                    categoriasNavbar.map((categorias)=>{
                        return <a key={categorias.id} href={categorias.link} > {categorias.nombre} </a>
                    })
                }              
            </nav>
            <h2> Tienda online </h2>
       
            <CartWidget />
           
        </header>
    )
}

export default Navbar
