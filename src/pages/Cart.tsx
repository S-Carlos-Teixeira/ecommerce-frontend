import axios from 'axios'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Product from '../components/Product'
import { baseUrl } from '../config'
import ICart from '../interfaces/cart'
import { IProduct } from '../interfaces/product'

type TCart = null | Array<ICart>

function Cart() {
  const [Carts, updateCarts] = React.useState<TCart>(null)
  // const [total, updateTotal] = React.useState<number>(0)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  async function updateCart() {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.get(`${baseUrl}/cart`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      updateCarts(data)
    } catch (err: any) {
      setErrorMessage(err.response.data.message)
    }
  }
  useEffect(() => {
    updateCart()
  }, [])
  console.log(Carts)

  if (!Carts) {
    return (
      <img src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg" />
    )
  }

  async function handleRemoveFromCart(productId: String) {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.delete(
        `${baseUrl}/product/${productId}/cart`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      updateCart()
    } catch (err: any) {
      setErrorMessage(err.response.data.message)
    }
  }

  async function handleAddOrder(cartId: String) {
    try {
      const token = localStorage.getItem('token')
      const body = { amount: String(reducedArr) }
      console.log(body)

      const { data } = await axios.post(
        `${baseUrl}/cart/${cartId}/order`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      console.log(data)
      navigate('/order')
    } catch (err: any) {
      setErrorMessage(err.response.data.message)
    }
  }

  const sumArr = [] as Array<number>
  let reducedArr: number = 0
  return (
    <section className="">
      <div className="">
        <div className="">
          <p className="">Your Cart</p>
        </div>
      </div>
      <div className="">
        <div className="">
          {Carts[0].products?.map(product => {
            console.log(product)
            sumArr.push(product.quantity * Number(product.product.price))
            console.log(sumArr)
            reducedArr = sumArr.reduce((acc, current) => {
              return acc + current
            })
            console.log(reducedArr)

            return (
              <div className="" key={product._id}>
                <div className="">
                  <div className="">
                    <h2>{product.product.name}</h2>
                  </div>
                </div>

                <div className="">
                  <div>
                    {' '}
                    <img src={product.product.image} />
                  </div>
                </div>

                <div className="">
                  <p>Price: {product.product.price}</p>
                </div>

                <div className="">
                  <p>Quantity: {product.quantity}</p>
                </div>
                <div className="">
                  <p>
                    Total: {product.quantity * Number(product.product.price)}
                  </p>
                </div>
                <div>
                  {
                    <button
                      className=""
                      onClick={() => handleRemoveFromCart(product.product._id)}
                    >
                      Remove from cart
                    </button>
                  }
                </div>
              </div>
            )
          })}
        </div>
        {<p>Total: {reducedArr}</p>}
      </div>
      <div>
        {
          <button className="" onClick={() => handleAddOrder(Carts[0]._id)}>
            Order
          </button>
        }
      </div>
    </section>
  )
}

export default Cart
