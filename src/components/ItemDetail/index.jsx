import ItemCount from "../ItemCount"

const ItemDetail = ({ id, title, img, price, description, category }) => {

    const item = { id, title, img, price, description, category};

    return (
        <>
            <section className="item-detail container">
                <picture className="item-detail__picture">
                <img
              className="item-detail__picture--img item-detail__picture--img--1"
              src={`${img?.front}`}
              alt={`${title} - Figura`}
            />
            <img
              className="item-detail__picture--img item-detail__picture--img--2"
              src={`${img?.back}`}
              alt={`${title} - Caja`}
            />
                </picture>
                <article className="item-detail__info">
                    <p className="item-detail__info--category">{category}</p>
                    <h2 className="item-detail__info--title">{title}</h2>
                    <p className="item-detail__info--description">{description}</p>
                    <p className="item-detail__info--price">$UY {price},00</p>
                    <ItemCount item={item}/>
                </article>
            </section>
        </>
    )
}

export default ItemDetail

