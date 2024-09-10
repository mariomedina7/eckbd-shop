import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail"

const Detail = () => {
    const { id } = useParams()
    let [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data)
            })
            .catch((error) => console.error("Error", error))
    }, [id])

    return (
        <>
            {product && (
                <ItemDetail 
                    title={product.title} 
                    images={product.images} 
                    price={product.price} 
                    description={product.description} 
                    category={product.category.name} 
                />
            )}
        </>
    )
}

export default Detail

