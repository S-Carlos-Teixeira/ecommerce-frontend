import { Link, useNavigate } from "react-router-dom"
import { IUser } from '../interfaces/user'

interface NavbarProps {
  user: IUser | null
  setUser: Function
}

function Navbar({ user, setUser }: NavbarProps) {

  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('token')
    setUser(null)
    navigate('/home')
  } 
  return(
    <>
    <header>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/home" className="navbar-item">
                Home
            </Link>
            <Link to="/signup" className="navbar-item">
                Sign Up
            </Link>
            <Link to="/login" className="navbar-item">
                Log In
            </Link>
            {user && <Link to="/addproduct" className="navbar-item">
                Add product
            </Link>}
            {user && <Link to="/cart" className="navbar-item">
                Cart
            </Link>}
            
            {user && <button onClick={logout} className="button navbar-item is-ghost">
                Logout  
              </button>}
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar