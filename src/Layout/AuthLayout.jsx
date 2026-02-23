import React from 'react'
import { Logo } from '../components/logo/Logo'
import { Outlet } from 'react-router'
import authImage from '../assets/authImage.png'

export const AuthLayout = () => {
  return (
    <div className='max-w-7xl mx-auto '>
        <Logo></Logo>
        <div className='flex '>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='flex-1'>
                <img src={authImage} alt="Authentication" className="w-full h-auto object-cover" />
             </div>
             <div>
            </div>
        </div>
    </div>
  )
}
