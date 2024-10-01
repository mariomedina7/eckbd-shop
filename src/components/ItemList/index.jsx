import Card from "../Card";

const ItemList = ({ products }) => {
  
  return (
    <section className="items__container container">
      {products.map((product) => (
        <Card key={product.id} {...product} tag="NUEVO" />
      ))}
    </section>
  );
};

export default ItemList;
