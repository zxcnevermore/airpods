import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const Nav = () => {
  return (
    <div className='NavBar'>
      <MobileNavigation />
      <Navigation />
    </div>
  )
}

export default Nav
