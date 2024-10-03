import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
        const exist = cartItems.find(currentItem => currentItem.id === item.id);
        if (exist) {
            setCartItems(cartItems.map(currentItem => 
                currentItem.id === item.id 
                ? { ...currentItem, quantity: currentItem.quantity + quantity }
                : currentItem
            ))
        } else {
            setCartItems([...cartItems, { ...item, quantity }])
        }
    }

    const removeItem = (item) => {
        const exist = cartItems.find(currentItem => currentItem.id === item.id);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter(currentItem => currentItem.id !== item.id));
        } else {
            setCartItems(cartItems.map(currentItem => currentItem.id === item.id ? { ...currentItem, quantity: currentItem.quantity - 1 } 
            : currentItem));
        }
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const getTotalItems = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
 
    return (
        <CartContext.Provider value={{ addItem, removeItem, clearCart, getTotalItems, cartItems }}>
            {children}
        </CartContext.Provider>
    )
}