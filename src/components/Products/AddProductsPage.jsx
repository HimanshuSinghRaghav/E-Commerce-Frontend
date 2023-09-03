import React from 'react'
import ImageUpload from './ImageUpload';
import AddProductsPageForm from './AddProductsPageForm';
import ProductSize from './ProductSize';
const AddProductsPage = () => {
  return (
    <div className='w-full flex p-4'>
        <div className='w-[30%]'>
        
        <div className="col-span-full p-2">
        <ImageUpload/>
              </div> 
              <ProductSize/>                         
        </div>

        <div className='w-3/4'>
            <AddProductsPageForm/>
        </div>
    </div>
  )
}

export default AddProductsPage

