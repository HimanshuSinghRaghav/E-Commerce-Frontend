import React from 'react'
import Navbar from '../components/Layouts/Navbar'
import AddProductsCard from '../components/Products/AddProductsCard'
import AddProductsPage from '../components/Products/AddProductsPage'


const Products = ({route}) => {
  return (
    <div>
        <Navbar/>
        <div className='w-screen p-4 bg-yellow-200 tracking-wide'>
            Dashboard
        </div>
        {route==='dashboard' &&<div className='p-2 grid grid-cols-5'>
        <AddProductsCard/>
        </div>}
        {route==='addProduct' && <AddProductsPage/>}
    </div>
  )
}

export default Products