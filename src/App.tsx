import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { IUser } from './interfaces/user'
import AddProduct from './pages/AddProduct'
import Home from './pages/Home'
import Login from './pages/Login'
import ShowProduct from './pages/ShowProduct'
import Signup from './pages/Signup'
// import Address from "./components/Address"
import Order from './pages/Order'
import Cart from './pages/Cart'
import SellerSignup from './pages/SellerSignup'

function App() {
  const [user, setUser] = useState<null | IUser>(null)

  async function fetchUser() {
    const token = localStorage.getItem('token')
    const { data } = await axios.get('/api/user', {
      headers: { Authorization: `Bearer ${token}` }
    })
    console.log(data)

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login fetchUser={fetchUser} />} />
          <Route
            path="/product/:productId"
            element={<ShowProduct user={user} setUser={setUser} />}
          />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/seller/signup" element={<SellerSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          {/* <Route path="/address" element={<Address />} /> */}
          {/* <Route path="/payment" element={<Payment />} /> */}
        </Routes>
      </main>
    </Router>
  )
}

export default App
