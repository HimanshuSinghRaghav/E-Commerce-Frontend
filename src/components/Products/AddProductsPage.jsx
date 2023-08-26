import React from 'react'
import ImageUpload from './ImageUpload';
import AddProductsPageForm from './AddProductsPageForm';
const AddProductsPage = () => {
  return (
    <div className='w-full flex p-4'>
        <div className='w-1/4 '>
        <div className="col-span-full p-2">
        <ImageUpload/>
              </div>              
        </div>
        <div className='w-3/4'>
            <AddProductsPageForm/>
        </div>
    </div>
  )
}

export default AddProductsPage

