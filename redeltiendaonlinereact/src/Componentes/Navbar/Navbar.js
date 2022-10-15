import React from "react";
import './Navbar.css'
import logo from '../../Assets/logo.jpeg'
import '../CartWidget/CartWidget'
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const categorias = [
      { nombre: "electronics", id: 0, ruta: "/categoria/electronics" },
      { nombre: "jewelery", id: 1, ruta: "/categoria/jewelery" },
      { nombre: "men's clothing", id: 2, ruta: "/categoria/men's clothing" },
      { nombre: "women's clothing", id: 3, ruta: "/categoria/women's clothing" },
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
