import { IProduct } from "./product"

export default interface ICart{
  products: Array <ICartProduct>,
  status: String,
  user: { username: string }
}

interface ICartProduct {
  product: IProduct,
  quantity: number,
  _id: string
}