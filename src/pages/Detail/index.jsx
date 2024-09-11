import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail"

const Detail = () => {
    const { id } = useParams()
    let [product, setProduct] = useState(null)

    useEffect(() => {
        fetch('/src/data/items.json')
            .then((response) => response.json())
            .then(data => setProduct(data.find(product => product.id == id)))
            .catch((error) => console.error("Error", error))
    }, [])

    return (
        <>
            <ItemDetail {...product}/>  
        </>
    )
}

export default Detail

