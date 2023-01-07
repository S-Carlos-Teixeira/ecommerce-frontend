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
    navigate('/')
  } 
  return(
    <>
    <header>
      <nav>
        <div>
          <div>
            <Link to="/">
                Home
            </Link>
            <Link to="/signup">
                Sign Up
            </Link>
            <Link to="/login">
                Log In
            </Link>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar