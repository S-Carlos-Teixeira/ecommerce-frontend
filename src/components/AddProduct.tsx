import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {

  const navigate = useNavigate()

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    categories: "",
    image: "",
    quantity: ""
  })

  const [errorData, setErrorData] = useState({
    name: "",
    description: "",
    price: "",
    categories: "",
    image: "",
    quantity: ""
  })

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.post('/api/addproduct', newProduct, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(data)
      navigate('/home')
    } catch (err: any) {
      setErrorData(err.response.data.errors)
    }
  }

  function handleChange(e: any) {
    const newFormData = structuredClone(newProduct)
    newFormData[e.target.name] = e.target.value
    setNewProduct(newFormData)

    const newErrorData = structuredClone(errorData)
    newErrorData[e.target.name] = ""
    setErrorData(newErrorData)
  }

  return (
  <div>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <div>
            <input
              type="text"
              name={'name'}
              onChange={handleChange}
              value={newProduct.name}
            />
            {errorData.name && <small>{errorData.name}</small>}
          </div>
        </div>

        <div>
          <label>Product Description</label>
          <div>
            <input
              type="text"
              name={'description'}
              onChange={handleChange}
              value={newProduct.description}
            />
            {errorData.description && <small>{errorData.description}</small>}
          </div>
        </div>

        <div>
          <label>Product Price</label>
          <div>
            <input
              type="text"
              name={'price'}
              onChange={handleChange}
              value={newProduct.price}
            />
            {errorData.price && <small>{errorData.price}</small>}
          </div>
        </div>

        <div>
          <label>Product Category</label>
          <div>
            <input
              type="text"
              name={'categories'}
              onChange={handleChange}
              value={newProduct.categories}
            />
            {errorData.categories && <small>{errorData.categories}</small>}
          </div>
        </div>

        <div>
          <label>Product Image</label>
          <div>
            <input
              type="text"
              name={'image'}
              onChange={handleChange}
              value={newProduct.image}
            />
            {errorData.image && <small>{errorData.image}</small>}
          </div>
        </div>

        <div>
          <label>Product Quantity</label>
          <div>
            <input
              type="text"
              name={'quantity'}
              onChange={handleChange}
              value={newProduct.quantity}
            />
            {errorData.quantity && <small>{errorData.quantity}</small>}
          </div>
        </div>

        <button className="button">Add Product</button>
      </form>
    </div>
  </div>
  )
}