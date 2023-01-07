import axios from "axios"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Login from "./components/Login"
import { IUser } from "./interfaces/user"
import AddProduct from "./components/AddProduct"
import ShowProduct from "./components/ShowProduct"
import Payment from "./components/Payment"
import Address from "./components/Address"

function App() {
  const [user, setUser] = useState<null | IUser>(null)

  async function fetchUser() {
    const token = localStorage.getItem('token')
    const { data } = await axios.get('/api/user', {
      headers: { Authorization: `Bearer ${token}` }
    })
    setUser(data)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) fetchUser()
  }, [])
  return (
  <Router>
    <Navbar user={user} setUser={setUser} />
    <main>
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login fetchUser={fetchUser} />} />
      <Route path="/product/:productId" element={<ShowProduct />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<Payment />} />
    </main>

  </Router>
  )
}

export default App
