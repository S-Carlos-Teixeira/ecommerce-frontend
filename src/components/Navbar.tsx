import { Link, useNavigate } from 'react-router-dom'
import { IUser } from '../interfaces/user'
import { baseUrl } from "../config"
import logo from "../resources/img/logo-no-bg.png"

interface NavbarProps {
  user: IUser | null
  setUser: Function
}

function Navbar({ user, setUser }: NavbarProps) {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('token')
    setUser(null)
    navigate('/')
  }
  return (
    <>
      <header>
        <nav className="">
          <div className="">
            <Link to="/" className="">
              <img
                className=""
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <a role="button" className="" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
          <div className="">
            <Link to="/" className="">
              Home
            </Link>
            {user?.isSeller && (
              <Link to="/addproduct" className="">
                Add product
              </Link>
            )}
            {user && (
              <Link to="/cart" className="">
                Cart
              </Link>
            )}
            {user && (
              <Link to="/order" className="">
                Order
              </Link>
            )}
          </div>
          <div className="">
            {!user && (
              <Link to="/signup" className="">
                Sign Up
              </Link>
            )}
            {!user && (
              <Link to="/login" className="">
                Log In
              </Link>
            )}
            {user && (
              <button onClick={logout} className="">
                Logout
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
