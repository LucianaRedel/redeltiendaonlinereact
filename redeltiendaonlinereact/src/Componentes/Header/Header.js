import React from "react";
import './Header.css'
import logo from '../../Assets/logo.jpeg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return(
        <header>
            <img src={logo} alt="Logo" />
            <h1> Vinos y Quesos </h1>          
            <nav>
                <a href=""> Productos </a>
                <a href=""> Login </a>
                <a href=""> Contacto </a>
            </nav>
            <h3> Tienda online </h3>
            <ShoppingCartIcon  sx={{ fontSize: 60 }} />
        </header>
    )
}

export default Header