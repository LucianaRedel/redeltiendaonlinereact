import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemList from "../Item/ItemList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore" 
import { dataBase } from "../../Firebase/Firebase";


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState (true);

    const { id } = useParams();
    console.log(id);

  // const URL_BASE = 'productCollection'
  // const URL_CAT = `${URL_BASE}/category/${id}`

  const productCollection = collection ( dataBase, "productos");
  const consulta = query(productCollection, where('category', '==', `${id}`))

  useEffect (() =>{
    getDocs (id === undefined ? productCollection : consulta)
    .then ((result) =>{
      const listProducts = result.docs.map(item =>{
        return {
          ...item.data(),
          id: item.id,
        };         
      });
      setProducts(listProducts);
    })
    .catch ((error) =>{
    console.log("error");
    })
    // .finally(setLoading(false));
    .finally (()=>{
      setLoading(false);
    })
  }, [id]);



    // useEffect(() => {
    //   const getProducts = async () => {
    //     try {
    //       const res = await fetch(id === undefined ? URL_BASE : URL_CAT);
    //       const data = await res.json();
    //       setProducts(data);
    //     } catch {
    //       console.log("error");
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    //   getProducts();
    // }, [id]);

    return (
      <>
        <h1>{props.gretting}</h1>
        {
          <>
            {loading ? <LoadingSpinner/>  : <ItemList products={products} />}
          </>
        }
      </>
    );
  };

  