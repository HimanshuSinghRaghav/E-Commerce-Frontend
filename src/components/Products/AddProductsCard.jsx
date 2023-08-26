import React from 'react'
import { Card, Dropdown } from 'flowbite-react';
import product from '../../api/admin/product';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';

const AddProductsCard = () => {
  const navigate = useNavigate()
  const {data , isSuccess} = useQuery('get/product' , product , {
    onError: (error)=>{
      toast.error(error.response.data.error)
    }
  })
  return (
    <div className=''>
         <Card className='dark:bg-gray-100 shadow-md border-none w-full '>
       
      <div className="flex  justify-end px-4 pt-4">
        <Dropdown
          inline
          label=""
        >
          <div>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              <p>
                Edit
              </p>
            </a>
          </div>
          <div>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              <p>
                Export Data
              </p>
            </a>
          </div>
          <div>
            <a
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              <p>
                Delete
              </p>
            </a>
          </div>
        </Dropdown>
      </div>
      <div className="flex flex-col divs-center pb-10  justify-center items-center">
        {isSuccess && <div className='mb-3 rounded-full w-24 h-24 font-bold text-4xl shadow-md flex justify-center items-center bg-white'>{data.products.length}</div>}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <button
            className="inline-flex divs-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            onClick={()=>navigate('/addProduct')}
          >
            <p>
              Add Product
            </p>
          </button>
          <a
            className="inline-flex divs-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            href="#"
          >
            <p>
              Message
            </p>
          </a>
        </div>
      </div>
     
    </Card>
    </div>
  )
}

export default AddProductsCard