import React, { SyntheticEvent, useState } from 'react'
import { IProduct } from "../interfaces/product"
import Product from "./Product"
import { useParams } from "react-router-dom"
import axios from "axios"
import ICart from "../interfaces/cart"

type Products = null | Array<ICart>

function Cart({user, products, status}: ICart) {
  const [Carts, updateCarts] = React.useState<ICart | null>(null)
  const [errorMessage, setErrorMessage] = useState('')

  // React.useEffect(() => {
  //   async function fetchCart() {
  //     const resp = await fetch("/api/cart")
  //     const data = await resp.json()
  //     updateCarts(data)
  //   }
  //   fetchCart() 
  // }, [])

  async function updateCart() {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.get(`/api/cart`, 
      {headers: { Authorization: `Bearer ${token}` },
    })
    console.log(data)
  // .then(function(response) {
    // console.log(response)
  // })
    } catch (err: any) {
      setErrorMessage(err.response.data.message)
    }
  }
  React.useEffect(() => {
    updateCart()
  },[])
  

  return (
    <section className="hero is-link is-fullheight-with-navbar is-link">
      <div className="hero-body has-text-centered">
        <div className="container">
          <p className="title">Your Cart</p>
        </div>
      </div>
      <div className="is-flex-direction-row">
      <div className="is-flex-direction-row">
      {/* {Carts?.map((product: ICart) => {
          return <Cart 
            key={product._id}
            {...product}
          />
        })} */}
      </div>
    </div>
    </section>
  )
}

export default Cart