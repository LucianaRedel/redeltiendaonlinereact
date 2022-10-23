import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const CustomProvider = ({children}) =>{

    const [ cart, setCart ] = useState([]);
    const [ cantidadItem, setCantidadItem ] = useState(0);
    const [ total, setTotal ] = useState(0);

    useEffect(()=>{
        setCantidadItem(cart.reduce((total, item) => total + item.cantidad, 0))
        setTotal(cart.reduce((total, item) => total + (item.cantidad * item.price), 0))
    }, [])

    const agregarItem = (item, cantidad) =>{
        if(itemsEnCarrito(item.id)){
            const modificado = cart.map((producto) =>{
                if (producto.id === item.id){
                    producto.cantidad += cantidad;
                }
                return producto;
            });
            setCart(modificado);
        } else{
            setCart([...cart,{...item, cantidad}]);
        }
        setCantidadItem(cantidadItem + cantidad);
        setTotal(total + (item.price * cantidad));
    };

    const borrarItem = (id) => {
        const encontrado = cart.find(producto => producto.id === id);
        setCart(cart.filter((item) => item.id !== id));
        setCantidadItem( cantidadItem - encontrado.cantidad)
        setTotal(total - (encontrado.price * encontrado.cantidad))
    }


    const itemsEnCarrito =(id) =>{
        cart.some(item => item.id === id)
    }

    const borrar =() => {
        setCart([]);
        setCantidadItem(0);
        setTotal(0);
    }

return(
    <div>
        <Context.Provider value={{cart, cantidadItem, total, agregarItem, borrarItem, borrar, itemsEnCarrito}}>
        {children}
        </Context.Provider>
    </div>
)
}