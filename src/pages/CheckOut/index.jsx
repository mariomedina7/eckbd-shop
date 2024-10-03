import CheckForm from "../../components/CheckForm"
import Spinner from "../../components/Spinner";
import NotFound from "../../components/NotFound";

import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';

import { collection, getDocs, query, where, writeBatch, addDoc, documentId, Timestamp } from "firebase/firestore";
import { db } from "../../config/firebase.config"

const CheckOut  = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [orderId, setOrderId] = useState(null);
        
    const { cartItems, clearCart, getTotalItems } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const order = {
                buyer: {
                    name,
                    phone,
                    email
                }, 
                items: cartItems,
                total: getTotalItems(),
                date: Timestamp.fromDate(new Date())
            }
            
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cartItems.map((item) => item.id);
            const collectionRef = collection(db, 'items');

            const productsRef = query(collectionRef, where(documentId(), 'in', ids));
            const productsAddedFromFirestore = await getDocs(productsRef);

            const { docs } = productsAddedFromFirestore;
            
            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const quantity = cartItems.find((item) => item.id === doc.id).quantity;

                if (dataDoc.stock >= quantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - quantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, order);

                setOrderId(orderAdded.id);
                console.log(orderAdded.id);

                clearCart();
            } else {
                console.warn(`Los siguientes items no tienen stock: ${outOfStock.map((item) => item.id)}`);
            }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    if (orderId) {
        return (
            <div className="order__container container">
                <h2 className="order__title">Gracias por tu compra</h2>
                <h3 className="order__subtitle">Tu pedido se ha confirmado con éxito. Tu número de pedido es: <strong>{orderId}</strong></h3>
                <Link to="/" className="back-home">
                Volver al inicio
                </Link>
            </div>
        )
    }

    return (    
        <main className="container">
            {loading ? <Spinner /> 
            : error ? <NotFound /> : <CheckForm onConfirm={createOrder} /> }
        </main>
    )
}

export default CheckOut