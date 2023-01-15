import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from "../config"

export default function SellerSignup() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    passwordConfirmation: "",
    isSeller:true
  })

  const [errorData, setErrorData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    passwordConfirmation: "",
    isSeller:true
  })

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    try {
      await axios.post(`${baseUrl}/seller/signup`, formData)
      navigate('/login')
    } catch (err: any) {
      setErrorData(err.response.data.errors)
    }
  }

  function handleChange(e: any) {
    const newFormData = structuredClone(formData)
    newFormData[e.target.name] = e.target.value 
    setFormData(newFormData)

    const newErrorData = structuredClone(errorData)
    newErrorData[e.target.name] = ""
    setErrorData(newErrorData)
  }

  return <div className="">
  <div className="">
    <form onSubmit={handleSubmit}>
      <div className="">
        <label className="">Username</label>
        <div className="">
          <input
            className=""
            type="text"
            name={'username'}
            onChange={handleChange}
            value={formData.username}
          />
          {errorData.username && <small className="">{errorData.username}</small>}
        </div>
      </div>

      <div className="">
        <label className="">Email</label>
        <div className="">
          <input
            className=""
            type="text"
            name={'email'}
            onChange={handleChange}
            value={formData.email}
          />
          {errorData.email && <small className="">{errorData.email}</small>}
        </div>
      </div>

      <div className="">
        <label className="">Mobile Number</label>
        <div className="">
          <input
            className=""
            type="text"
            name={'mobile'}
            onChange={handleChange}
            value={formData.mobile}
          />
          {errorData.mobile && <small className="">{errorData.mobile}</small>}     
        </div>
      </div>

      <div className="">
        <label className="">Password</label>
        <div className="">
          <input
            className=""
            type="password"
            name={'password'}
            onChange={handleChange}
            value={formData.password}
          />
          {errorData.password && <small className="">{errorData.password}</small>}
        </div>
      </div>

      <div className="">
        <label className="">Re-enter Password</label>
        <div className="">
          <input
            className=""
            type="password"
            name={'passwordConfirmation'}
            onChange={handleChange}
            value={formData.passwordConfirmation}
          />
          {errorData.passwordConfirmation && <small className="">{errorData.passwordConfirmation}</small>}
        </div>
      </div>
      <button className="">Register</button>
    </form>
  </div>
</div>
}