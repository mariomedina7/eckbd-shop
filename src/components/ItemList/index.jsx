import { useState, useEffect } from "react";
import Card from "../Card";

const ItemList = ({ category }) => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/src/data/items.json')
      .then((response) => response.json())
      .then((data) => {
        if (category) {
          setProducts(data.filter((product) => product.category === category));
        }
        else {
          setProducts(data);
        }
      })
  }, [category]);

  return (
    <section className="items__container container">
      {products.map((product) => (
        <Card key={product.id} {...product} tag="NUEVO" />
      ))}
    </section>
  );
};

export default ItemList;
