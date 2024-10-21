import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
        <li>
                <NavLink to='/' className={({isActive}) => (isActive ? 'error' : '')}>
                    Inicio
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar