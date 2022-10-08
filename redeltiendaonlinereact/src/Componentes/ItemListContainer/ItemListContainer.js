import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemList from "../Item/ItemList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isLoading, setIsLoading] = useState(true);

    const productos = [
        {id:1, title:"Queso Azul", descripcion:"De cuerpo blanco y cremoso, semi blando, caracterizado por presentar venas verdes, grises o azules, de sabor intenso", stock: 20, price: 400, imagen:"./queso-azul.jpeg"},
        {id:2, title:"Queso Brie", descripcion:"Inconfundible con su corteza comestible blanquecida, de textura suave y sabor cremoso", stock: 10, price: 350, imagen:"../../Productos/Quesos/queso-brie.jpeg"},
        {id:3, title:"Bianchi Particular Cabernet Sauvignon", descripcion:"Cosecha 2014, vino que tiene toda la complejidad y fuerza para los paladraes mas exigentes, con aroma a frutos negros maduros y un delicado perfume a violetas", stock:5, price:700, imagen:"../../Productos/Vinos/bianchi-particular-cabernet.png"},
        {id:4, title:"Luigi Bosca Sauvignon Blanc", descripcion:"Vino de color amarillo verdoso con reflejos plateados, aromas a frutas tropicales, hierbas y minerales, de sabor refrescante y ácido", stock:2, price:1000, imagen:"../Productos/Vinos/luigibosca-sauvignonblanc.jpeg"},
    ]

    const cargarProductos = new Promise((resolve, reject) =>{   
        setTimeout(()=>{
            resolve(productos)
            reject('Ocurrio un error')
            setIsLoading(false)
        }, 1000);      
    })
  

    useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    cargarProductos
        .then((data) => {
            console.log(data)
            setProducts(data)
        })
        // .then((json) => setProducts(json))
        .catch((error) => {
          console.log(error);
        })
        .finally(setLoading(false));
    }, []);
  
    return (
      <>
        <h1>{props.gretting}</h1>
        <input type="text" id="buscador" placeholder="Busque su producto"/> 
        {
          <>
            {loading ? <LoadingSpinner/>  : <ItemList products={products} />}
            {isLoading ? <LoadingSpinner/> : console.log("cargando")}
          </>
        }
      </>
    );
  };

  