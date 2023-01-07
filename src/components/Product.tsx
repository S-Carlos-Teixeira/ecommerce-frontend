import { Link } from "react-router-dom"
import { IProduct } from "../interfaces/product"

function Product({ _id, name, description, price, categories, image, quantity }: IProduct) {
  return <div>
    <Link to={`/product/${_id}`}>
      <div>
        <div>
          <div>{name}</div>
        </div>
        <div>
          <div>{ description }</div>
        </div>
        <div>
          <div>{ price }</div>
        </div>
        <div>
          <div>{ categories }</div>
        </div>
        <div>
          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>
        <div>
          <div>{ quantity }</div>
        </div>
      </div>
    </Link>
  </div>
}

export default Product