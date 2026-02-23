import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router'


export const Logo = () => {
  return (
    <Link to="/" >
    <div className="flex items-center">
      <img src={logo} alt="Logo" />
      <h3 className='text-3xl font-bold -ms-2.5'>ZapShift</h3>
    </div>
    </Link>
  )
}
