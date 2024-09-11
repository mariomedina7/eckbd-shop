import { Link } from "react-router-dom";

const Card = ({ id, title, img, price, category, href = "#", tag }) => {
    return (
      <article className="card">
        <Link to={`/item/${id}`}>
          <picture className="card__picture">
            <span className="card__picture--pill">{tag}</span>
            <img
              className="card__picture--img card__picture--img--1"
              src={img.front}
              alt={`${title} - Figura`}
            />
            <img
              className="card__picture--img card__picture--img--2"
              src={img.back}
              alt={`${title} - Caja`}
            />
          </picture>
          <div className="card__info">
            <h3 className="card__info--title">{category}</h3>
            <h4 className="card__info--item">{title}</h4>
            <p className="card__info--price">$UY {price},00</p>
          </div>
        </Link>
      </article>
    );
  };
  
  export default Card;