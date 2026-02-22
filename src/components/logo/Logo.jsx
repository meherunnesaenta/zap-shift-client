import React from 'react'
import logo from '../../assets/logo.png'

export const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Logo" />
      <h3 className='text-3xl font-bold -ms-2.5'>ZapShift</h3>
    </div>
  )
}
