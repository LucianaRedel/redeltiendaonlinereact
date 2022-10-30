import React from "react";
import './Navbar.css'
import logo from '../../Assets/logo.jpeg'
import '../CartWidget/CartWidget'
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const categorias = [
      { nombre: "Quesos", id: 0, ruta: "/categoria/Quesos" },
      { nombre: "Vinos", id: 1, ruta: "/categoria/Vinos" },
      { nombre: "Combos", id: 2, ruta: "/categoria/Combos" },
    //   { nombre: "women's clothing", id: 3, ruta: "/categoria/women's clothing" },
    ];

    return(
        <header>
            <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
            <h1> Tienda Online </h1>          
            <nav>
                {
                    categorias.map((categoria)=>{
                        return <NavLink key={categoria.id} to={categoria.ruta} > {categoria.nombre} </NavLink>
                    })
                }              
            </nav>
            {/* <h2> Tienda online </h2> */}
            <Link to="/cart">  
             <CartWidget />
            </Link>
           
        </header>
    )
}

export default Navbar
