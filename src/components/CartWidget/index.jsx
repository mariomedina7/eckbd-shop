import { Icon } from '@iconify/react';
import Pill from '../Pill';

const CartWidget = ({quantity}) => {

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