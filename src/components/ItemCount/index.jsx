import { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0);
    const increase = () => setCount(prevCount => prevCount + 1);
    const decrease = () => setCount(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount));

    return (
        <div className="item-count">
            <div className="item-count__controls">
                <div className="item-count__controls--buttons">
                    <button onClick={decrease}> - </button>
                    <span> { count } </span>
                    <button onClick={increase}> + </button>
                </div>
            </div>
            <div>
            <button className="add-to-cart-btn">
                Añadir al carrito
            </button>
            </div>
        </div>
    );
};

export default ItemCount;

