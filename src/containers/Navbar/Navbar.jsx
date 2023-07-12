import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <p>MEDLAR MEDIA</p>

      <div className='navbar__leftside'>
        <ul>
          <li>
            <NavLink className='navlinks' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='navlinks' to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className='navlinks' to='/influencers'>
              Influencers
            </NavLink>
          </li>
          <li>
            <NavLink className='navlinks' to='/services'>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className='navlinks' to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar