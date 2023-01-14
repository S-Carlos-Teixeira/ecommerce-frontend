import axios from "axios"
import React, { useState } from "react"
import { IOrder } from "../interfaces/order"



export default function Order() {
  const [orders, updateOrders] = useState<IOrder | null>(null)
  const [errorMessage, setErrorMessage] = useState('')

  async function updateOrder() {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.get(`/api/order`, {
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

  )

}
