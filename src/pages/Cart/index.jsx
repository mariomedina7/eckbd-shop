import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import { Icon } from '@iconify/react';

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);

  return (
    <div className="cartContainer">
      <h2>DETALLE DE LA COMPRA</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cartContainer__cartItem">
                <div>
                  <img src={item.img.front} alt={item.title}/>
                  <strong>{item.title}</strong> - ${item.price} x {item.quantity}
                </div>
                <button className="cartContainer__cartItem--button--remove" onClick={() => removeItem(item)}>
                  <Icon icon="typcn:delete" className='cartContainer__cartItem--icon'/>
                </button>
              </li>
            ))}
          </ul>
          <div className="cartContainer__total">
            Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </div>
          <button className="cartContainer__cartItem--button--clear" onClick={clearCart}>Vaciar Carrito <Icon icon="ep:delete" /> </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
