import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    passwordConfirmation: "",
  })

  const [errorData, setErrorData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    passwordConfirmation: "",
  })

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    try {
      await axios.post('/api/signup', formData)
      navigate('/address')
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

  return <div>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <div>
            <input
              type="text"
              name={'username'}
              onChange={handleChange}
              value={formData.username}
            />
            {errorData.username && <small>{errorData.username}</small>}
          </div>
        </div>

        <div>
          <label>Email</label>
          <div>
            <input
              type="text"
              name={'email'}
              onChange={handleChange}
              value={formData.email}
            />
            {errorData.email && <small>{errorData.email}</small>}
          </div>
        </div>

        <div>
          <label>Mobile Number</label>
          <div>
            <input
              type="text"
              name={'mobile'}
              onChange={handleChange}
              value={formData.mobile}
            />
            {errorData.mobile && <small>{errorData.mobile}</small>}     
          </div>
        </div>

        <div>
          <label>Password</label>
          <div>
            <input
              type="password"
              name={'password'}
              onChange={handleChange}
              value={formData.password}
            />
            {errorData.password && <small>{errorData.password}</small>}
          </div>
        </div>

        <div>
          <label>Re-enter Password</label>
          <div>
            <input
              type="password"
              name={'passwordConfirmation'}
              onChange={handleChange}
              value={formData.passwordConfirmation}
            />
            {errorData.passwordConfirmation && <small>{errorData.passwordConfirmation}</small>}
          </div>
        </div>
        <button className="button">Add your address</button>
      </form>
    </div>
  </div>
}