import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase.config";

import ItemList from "../../components/ItemList";
import Spinner from "../../components/Spinner";

const Store = () => {
  const { categoryId } = useParams();

  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const dbRef = categoryId ?
    query(collection(db, "items"), where("category", "==", categoryId))
    : collection(db, "items");
    
    getDocs(dbRef)
      .then((response) => {
        if (response.size === 0) {
          setError(true);
        } else {
          setProducts(
            response.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);
  

  return (
    <main className="store">
      { loading ? <Spinner /> : error ? <h1>Error al traer los productos</h1> : 
      <ItemList className="store__items" products={products} /> }
    </main>
  )
}

export default Store;
