import { IProduct } from "./product"

export default interface ICart{
  products: Array <IProduct>,
  status: String,
  user: { username: string }
}