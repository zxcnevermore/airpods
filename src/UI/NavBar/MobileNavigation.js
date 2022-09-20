import React from 'react'
import NavLinks from './NavLinks'
import { CgMenuRound } from 'react-icons/cg'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const MobileNavigation = () => {

  const [open, setOpen] = React.useState(false)

  const hamburger = <CgMenuRound className='Hamburger'
    size='40px' color='white'
    onClick={() => setOpen(!open)}
  />
  const close = <IoMdCloseCircleOutline className='Hamburger'
    size='40px' color='white'
    onClick={() => setOpen(!open)}
  />

  return (

    <div className='MobileNavigation'>
      {open ? close : hamburger}
      {open && <NavLinks />}
    </div>

  )
}

export default MobileNavigation
