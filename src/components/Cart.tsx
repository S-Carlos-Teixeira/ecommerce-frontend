import React, { SyntheticEvent, useState } from 'react'
import { IProduct } from "../interfaces/product"
import { ICartProduct } from '../interfaces/cart'
import Product from "./Product"
import { useParams } from "react-router-dom"
import axios from "axios"
import ICart from "../interfaces/cart"

type TCart = null | Array<ICart> | Array <ICartProduct>

function Cart({ products, status, price, quantity }: ICart) {
  const [Carts, updateCarts] = React.useState<TCart>(null)
  const [errorMessage, setErrorMessage] = useState('')


  React.useEffect(() => {
    async function updateCart() {
      try {
        const token = localStorage.getItem('token')
        const { data } = await axios.get(`/api/cart`,
          {
            headers: { Authorization: `Bearer ${token}` },
          })
        console.log(data)
        updateCarts(data)
        // .then(function(response) {
        // console.log(response)
        // })
      } catch (err: any) {
        setErrorMessage(err.response.data.message)
      }
    }

    updateCart()
  }, [])


  if (!Carts) {
    return (
      <p> Loading Cart</p>
    )
  }

  return (
    <section className="hero is-link is-fullheight-with-navbar is-link">
      <div className="hero-body has-text-centered">
        <div className="container">
          <p className="title">Your Cart</p>
        </div>
      </div>
      <div className="is-flex-direction-row">
        <div className="is-flex-direction-row">
          {Carts[0].products?.map((product) => {
            console.log(product);

            return (
            <div className="card">
              <div className="card-header">
                <div className="card-header-title">{product.product[0].name}</div>
              </div>

              <div className="card-content">
                <div>Status: {status}</div>
              </div>

              <div className="card-content">
                <div>Price: {price}</div>
              </div>

              <div className="card-content">
                <div>Quantity: {quantity}</div>
              </div>

            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Cart