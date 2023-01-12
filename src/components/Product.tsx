import { Link } from "react-router-dom"
import { IProduct } from "../interfaces/product"
function Product({ _id, name, description, price, categories, image, quantity, reviews }: IProduct) {
  return <div className="column is-one-quarter-desktop is-one-third-tablet">
    <Link to={`/product/${_id}`}>
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{name}</div>
        </div>
        <div className="card-content">
          <div>Description: { description }</div>
        </div>
        <div className="card-content">
          <div>Price = £{ price }</div>
        </div>
        <div className="card-content">
          <div>{ categories }</div>
        </div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} className="card-img-top" alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <div>Quantity: { quantity }</div>
        </div>
      </div>
    </Link>
  </div>
}
export default Product