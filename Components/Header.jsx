import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>

          <NavLink to="/host"
          style={({isActive}) => {return isActive ? activeStyle : null}}
          >Host</NavLink>
          <NavLink to="/about"
          style={({isActive}) => {return isActive ? activeStyle : null}}
          >About</NavLink>
          <NavLink to="/vans"
          style={({isActive}) => {return isActive ? activeStyle : null}}
          >Vans</NavLink>
        </nav>
      </header>
  )
}

export default Header
