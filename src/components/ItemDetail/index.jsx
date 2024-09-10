const ItemDetail = ({ title, images, price, description, category }) => {
    return (
        <>
            <section className="item-detail container">
                <picture className="item-detail__picture">
                <img
              className="item-detail__picture--img item-detail__picture--img--1"
              src={images[0]}
              alt={`${title} - Figura`}
            />
            <img
              className="item-detail__picture--img item-detail__picture--img--2"
              src={images[1]}
              alt={`${title} - Caja`}
            />
                </picture>
                <article className="item-detail__info">
                    <p className="item-detail__info--category">{category}</p>
                    <h2 className="item-detail__info--title">{title}</h2>
                    <p className="item-detail__info--description">{description}</p>
                    <p className="item-detail__info--price">$USD {price},00</p>
                </article>
            </section>
        </>
    )
}

export default ItemDetail

