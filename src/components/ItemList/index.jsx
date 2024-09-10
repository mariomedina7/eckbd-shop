import { useState, useEffect } from "react";
import Card from "../Card";

const ItemList = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="items__container container">
      {products.map((product) => (
        <Card key={product.id} {...product} tag="NUEVO" />
      ))}
    </section>
  );
};

export default ItemList;
