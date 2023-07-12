import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { hamburger, cross, facebook, instagram } from '../../assets';
import { useState } from 'react'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(prev => !prev)
  }

  return (
    <div className='navbar'>
      <div className='navbar-largescreens'>
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
      <img
        className='navbar__rightside-hamburger'
        onClick={handleToggle}
        src={hamburger}
        alt="hamburger" />
      {toggle && (
        <div className='navbar__mobile'>
          <img
            className='navbar__rightside-hamburger'
            onClick={handleToggle}
            src={cross}
            alt="cross" />
          <ul className='navbar__mobile-mainlist'>
            <li onClick={handleToggle}>
              <NavLink className='navlinks-mobile' to='/'>
                Home
              </NavLink>
            </li>
            <li onClick={handleToggle}>
              <NavLink className='navlinks-mobile' to='/about'>
                About
              </NavLink>
            </li>
            <li onClick={handleToggle}>
              <NavLink className='navlinks-mobile' to='/influencers'>
                Influencers
              </NavLink>
            </li>
            <li onClick={handleToggle}>
              <NavLink className='navlinks-mobile' to='/services'>
                Services
              </NavLink>
            </li>
            <li onClick={handleToggle}>
              <NavLink className='navlinks-mobile' to='/contact'>
                Contact
              </NavLink>
            </li>
            <li className='social-icons'>
              <img className='facebook-img' src={facebook} />
              <img className='instagram-img' src={instagram} />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar