import React, { SyntheticEvent, useState, ChangeEvent } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from "../config"

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
      const { data } = await axios.post(`${baseUrl}/addproduct`, newProduct, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(data)
      navigate('/')
    } catch (err: any) {
      setErrorData(err.response.data.errors)
    }
  }

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    const newFormData = structuredClone(newProduct) 
    newFormData[e.target.name] = e.target.value
      setNewProduct(newFormData)
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
    <section>
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
              <textarea
                placeholder="Enter Description"
                name={'description'}
                onChange={handleChange}
                value={newProduct.description}
              ></textarea>
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
              <div>
                <select
                  defaultValue="Options"
                  name={'categories'}
                  value={newProduct.categories}
                  onChange={handleSelect}
                  >
                  <option> Electronics </option>
                  <option> Clothing </option>
                  <option> Home and Kitchen </option>
                  <option> Personal care </option>
                  <option> Books </option>
                  <option> Pet supplies </option>
                </select>
              </div>
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

          <div className="">
            <label className="">I agree to the <a href="#">terms and conditions</a> </label>
            <input type="checkbox" />
          </div>

          <button>Add Product</button>
        </form>
      </div>
    </section>
  )
}