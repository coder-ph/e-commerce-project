import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div>
      <nav className="nav nav-pills card-header-pills ">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/promo" className="nav-link">
          Promo
        </NavLink>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
        <NavLink to="/additem" className="nav-link">
          Add Item
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar
