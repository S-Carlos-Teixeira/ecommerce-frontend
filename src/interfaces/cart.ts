import { IProduct } from "./product"

export default interface ICart{
  _id: string,
  products: Array <ICartProduct>,
  user: string
}

export interface ICartProduct {
  product: IProduct,
  quantity: number,
  _id: string
}