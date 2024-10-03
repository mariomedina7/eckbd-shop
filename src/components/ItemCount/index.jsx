import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ item }) => {
    let [quantity, setQuantity] = useState(1);
    const { addItem } = useContext(CartContext);

    const increase = () => setQuantity(prevCount => prevCount + 1);
    const decrease = () => setQuantity(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount));

    const notify = () => toast.success('Añadido al carrito correctamente', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        className: 'toast-text',
        });

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
            <button className="add-to-cart-btn" onClick={() => { handleAddToCart(); notify(); }} >
                Añadir al carrito
            </button>
            <ToastContainer />
            </div>
        </div>
    );
};

export default ItemCount;

