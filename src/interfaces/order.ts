import ICart from "../interfaces/cart"

export interface IOrder{
  amount: String,
  status: String,
  cart: Array<ICart>
  user: { username: string }
}