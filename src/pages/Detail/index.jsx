import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail"
import Spinner from "../../components/Spinner"
import NotFound from "../../components/NotFound"

import { db } from "../../config/firebase.config"
import { getDoc, doc } from "firebase/firestore"

const Detail = () => {
    const { id } = useParams()
    let [product, setProduct] = useState(null)
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    // useEffect(() => {
    //     fetch('/src/data/items.json')
    //         .then((response) => response.json())
    //         .then(data => setProduct(data.find(product => product.id == id)))
    //         .catch((error) => console.error("Error", error))
    // }, [])

    useEffect (() => {
        const docRef = doc(db, "items", id)
        setLoading(true);    
        getDoc(docRef)
        .then(doc => doc.exists() 
        ? setProduct({ id: doc.id, ...doc.data() })
        : setError(true)
        )
    .catch((error) => {
        setError(true);
    })
    .finally(() => {
        setLoading(false);
    })
    }, [])

    return (
        <main className="store">
            {loading ? <Spinner /> 
            : error ? <NotFound /> :
            <ItemDetail {...product} />}
        </main>
    )
}

export default Detail

