import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='w-screen p-4 flex items-center space-x-2 font-semibold text-xl bg-yellow-200'>
        <FontAwesomeIcon icon={faCartShopping} className=''/>
        <p className='tracking-wide font-medium'>Seller control</p>
        </div>
    </div>
  )
}

export default Navbar