import { Icon } from '@iconify/react';
import Pill from '../Pill';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {

    const { cartItems } = useContext(CartContext);

    const quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <div className="cart-widget">
                <Pill text= {quantity}/>
                <Icon className="cart-widget__icon" icon="teenyicons:bag-solid" />
            </div>
        </>
    )
}

export default CartWidget