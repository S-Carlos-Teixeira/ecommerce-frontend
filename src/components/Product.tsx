import { Link } from "react-router-dom"
import { IProduct } from "../interfaces/product"
import { baseUrl } from "../config"

function Product({ _id, name, description, price, categories, image, quantity, reviews, isHome }: IProduct) {
  return <div className="">
    <Link to={`/product/${_id}`}>
      <div className="">
        <div className="">
          <div className="">{name}</div>
        </div>
        {!isHome && <div className="">
          <div>Description: { description }</div>
        </div>}
        <div className="">
          <div>Price = £{ price }</div>
        </div>
        {!isHome && <div className="">
          <div>Category: { categories }</div>
        </div>}
        <div className="" >
          <figure className="">
            <img src={image} className="" alt={name} />
          </figure>
        </div>
        {!isHome && <div className="">
          <div>Quantity: { quantity }</div>
        </div>}
      </div>
    </Link>
  </div>
}
export default Product