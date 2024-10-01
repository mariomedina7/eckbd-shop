import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';

const ItemCount = ({ item }) => {
    let [quantity, setQuantity] = useState(0);
    const { addItem } = useContext(CartContext);

    const increase = () => setQuantity(prevCount => prevCount + 1);
    const decrease = () => setQuantity(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount));

    const handleAddToCart = () => {
        if (quantity > 0) {
            addItem(item, quantity);
        }
    }

    return (
        <div className="item-count">
            <div className="item-count__controls">
                <div className="item-count__controls--buttons">
                    <button onClick={decrease}> - </button>
                    <span> { quantity } </span>
                    <button onClick={increase}> + </button>
                </div>
            </div>
            <div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Añadir al carrito
            </button>
            </div>
        </div>
    );
};

export default ItemCount;

