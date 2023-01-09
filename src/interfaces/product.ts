export interface IProduct {
  _id: string,
  name : string,
  description: string,
  price: string,
  categories: string,
  image: string
  quantity: string
  reviews: Array<IReviews>
  user: { username: string }
}
interface IReviews {
  comment: string,
  rating: number,
  user: {username: string},
}