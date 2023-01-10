import { IProduct } from "./product"

export default interface ICart{
  name: String,
  products: Array <ICartProduct>,
  status: String,
  price: number
  // quantity: String,
  user: { username: string }
}

export interface ICartProduct {
  name: String,
  product: Array<IProduct>,
  quantity: number,
  _id: string
}