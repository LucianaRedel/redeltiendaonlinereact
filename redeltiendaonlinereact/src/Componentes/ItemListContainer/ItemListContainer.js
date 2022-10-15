import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemList from "../Item/ItemList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState (true);

    const { id } = useParams();
    console.log(id);

    const URL_BASE = 'https://fakestoreapi.com/products'
    const URL_CAT = `${URL_BASE}/category/${id}`
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await fetch(id === undefined ? URL_BASE : URL_CAT);
          const data = await res.json();
          setProducts(data);
        } catch {
          console.log("error");
        } finally {
          setLoading(false);
        }
      };
      getProducts();
    }, [id]);

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

  