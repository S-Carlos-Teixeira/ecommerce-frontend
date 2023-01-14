import axios from "axios"
import React, { useState } from "react"
import { IOrder } from "../interfaces/order"
import { baseUrl } from "../config"

export default function Order() {
  const [orders, updateOrders] = useState<IOrder | null>(null)
  const [errorMessage, setErrorMessage] = useState('')

  async function updateOrder() {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.get(`${baseUrl}/order`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      updateOrders(data)
    } catch (err: any) {
      setErrorMessage(err.response.data.message)
    }
  }
  React.useEffect(() => {
    updateOrder()
  }, [])
  console.log(orders);

  if (!orders) {
    return <p> Loading Your Items</p>
  }

  return (
    <div className="section">
      <div className="container">
      <h2 className="is-size-3">Your order</h2>
      <h2 className="is-size-5">Order summary:</h2>
      </div>
    </div>
  )
}
