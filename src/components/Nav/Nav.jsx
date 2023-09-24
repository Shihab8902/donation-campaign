import React from 'react'
import "./nav.css"

import logo from "../../assets/images/Logo.png"
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return <nav className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center pt-8 px-5 '>
        <div>
            <img src={logo} alt="Donation Campaign" />
        </div>

        <ul className='flex gap-12 font-bold text-lg'>
            <li> <NavLink to="/" >Home</NavLink>  </li>
            <li> <NavLink to="/donation" >Donation</NavLink>  </li>
            <li> <NavLink to="/statistics" >Statistics</NavLink>  </li>
        </ul>
    </nav>
}

export default Nav