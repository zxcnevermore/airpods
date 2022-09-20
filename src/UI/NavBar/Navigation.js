import React from 'react'
import NavLinks from './NavLinks'
import { CgMenuRound } from 'react-icons/cg'
const Navigation = () => {
  return (

    <div className='Navigation'>
      <CgMenuRound className='Hamburger' size='40px' color='white' />
      <NavLinks />
    </div>

  )
}

export default Navigation
