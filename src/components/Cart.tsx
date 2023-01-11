import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import ICart, { ICartProduct } from '../interfaces/cart'
import { IProduct } from '../interfaces/product'
import Product from './Product'

type TCart = null | Array<ICart>

function Cart() {
  const [Carts, updateCarts] = React.useState<TCart>(null)
  const [errorMessage, setErrorMessage] = useState('')



  async function updateCart() {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.get(`/api/cart`, {
        headers: { Authorization: `Bearer ${token}` }
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
  React.useEffect(() => {
    updateCart()
  }, [])
  console.log(Carts);
  
  if (!Carts) {
    return <p> Loading Cart</p>
  }

  async function handleRemoveFromCart(productId: String) {
    
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.delete(`/api/product/${productId}/cart`, 
      {headers: { Authorization: `Bearer ${token}` }
    })
    updateCart()
    } catch (err: any) {
      setErrorMessage(err.response.data.message)
    }
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
          {Carts[0].products?.map(product => {
            console.log(product)

            return (
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">
                    {product.product[0].name}
                  </div>
                </div>

                <div className="card-content">
                  <div> <img src={product.product[0].image} /></div>
                </div>

                <div className="card-content">
                  <div>Price: {product.product[0].price}</div>
                </div>

                <div className="card-content">
                  <div>Quantity: {product.quantity}</div>
                </div>

                <div>
                  {<button className="button" onClick={() => handleRemoveFromCart(product.product[0]._id)}>Remove from cart</button>}
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
