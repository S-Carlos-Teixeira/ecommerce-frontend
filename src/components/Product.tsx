import { Link } from 'react-router-dom'
import { IProduct } from '../interfaces/product'

function Product({
  _id,
  name,
  description,
  price,
  categories,
  image,
  quantity,
  reviews,
  isHome
}: IProduct) {
  return (
    <div className="border border-2 rounded m-3   justify-content-center align-items-center ">
      <Link to={`/product/${_id}`} className="nav-link  d-flex ">
        <img
          src={image}
          className=" rounded-1 bg-light w-25 m-auto p-3"
          alt={name}
        />

        <div className="card-body p-3">
          <h5 className="card-title fw-bolder">{name}</h5>

          {!isHome && <p className="card-text">Description: {description}</p>}
          <p className="card-text fs-5">£{price}</p>
          {!isHome && <p className="card-text">Category: {categories}</p>}
          {!isHome && (
            <p className="card-text">
              <div>Quantity: {quantity}</div>
            </p>
          )}
        </div>
      </Link>
    </div>
  )
}
export default Product
