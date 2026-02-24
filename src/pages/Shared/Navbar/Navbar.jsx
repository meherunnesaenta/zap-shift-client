import React from 'react'
import { Logo } from '../../../components/logo/Logo'
import { Link, NavLink } from 'react-router'
import { useAuth } from '../../../hooks/useAuth'

export const Navbar = () => {
  const {user, logOut}=useAuth();
    const links=<>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/services">Services</NavLink></li>
    <li><NavLink to="/coverage">Coverage</NavLink></li>
    <li><NavLink to="/about">About Us</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
   <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
     {
      
        user ? <button onClick={logOut} className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary
                         text-white font-bold py-3 px-10 rounded-full shadow-lg 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg" >Logout</button> : <NavLink to="/auth/login" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary
                         text-white font-bold py-3 px-10 rounded-full shadow-lg 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg" > Login</NavLink>
     }

     <Link to='/be-a-rider' className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary
                         text-white font-bold px-5 py-3 rounded-full shadow-lg 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"> Become rider</Link>
  </div>
</div>
  )

}

