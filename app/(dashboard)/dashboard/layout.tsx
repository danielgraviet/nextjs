import React from 'react'
import Navbar from '../../components/navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Navbar />
        <h1 className='text-2xl font-bold'>Special Dashboard NavBar</h1>
        {children}
    </div>
  )
}

export default Layout