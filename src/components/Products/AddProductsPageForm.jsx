import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import Select from 'react-select';
import { useQuery } from 'react-query';
import { categorys } from '../../api/admin/product';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Label, Select } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { resetProductData, setProductDetails } from '../../Redux/AddProductDataSlice';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().required('Price is required').min(0, 'Price must be a positive number'),
  stock: Yup.number().required('Stock is required').min(0, 'Stock must be a positive number'),
  category: Yup.string().required('Category is required'),
  subcategory: Yup.string().required('Subcategory is required'),
});

const AddProductsPageForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.addProduct)
    const [subcategorieIndex , setSubcategorieIndex] = useState(0)
    const {data ,isSuccess} = useQuery('get/categorys' , categorys , {
        onError:()=>{
            navigate('/')
            toast.error('service currently unavaiable!')
        }
    })

  //   const formikProps = useFormik({
  //     initialValues,
  //     validationSchema,
  //     onSubmit: yourSubmitFunction,
  //     ...etc
  // })
  return (
    <div className=" mx-auto p-6 drop-shadow-sm bg-gray-100 rounded-lg shadow-md h-full">
      <h1 className="text-2xl font-semibold mb-4 ">Create Product</h1>
      <Formik
        initialValues={{
          name: product.name,
          description: product.description,
          price: product.price,
          stock:product.stock,
          category: null,
          subcategory: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission
          dispatch(setProductDetails(values))
          console.log(values);
          console.log(product)
        }}
      >
       {(formikProps)=>(<Form className='space-y-6'>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e)=>{
                formikProps.setFieldValue('description' , e.target.value)
              }}
            />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Price
            </label>
            <Field
              type="text"
              id="price"
              name="price"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Stock
            </label>
            <Field
              type="text"
              id="stock"
              name="stock"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="stock" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Repeat the similar structure for other fields */}
          {isSuccess && <div className='space-y-7'>
          <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <Select
                id="category"
                name="category"
                value={data.category}
                onChange={(e) => {
                  const selectedCategoryIndex = data.categorys.findIndex(
                    (category) => category.name === e.target.value
                  );
                  formikProps.setFieldValue('category', e.target.value);
                  setSubcategorieIndex(selectedCategoryIndex);
                  console.log(selectedCategoryIndex)
                }}
                required
              >
                {data.categorys.length > 0 &&
                  data.categorys.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  ))}
              </Select>
              <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">
                Subcategory
              </label>
              <Select
                id="subcategory"
                name="subcategory"
                value={data.subcategory}
                onChange={(e) => {
                    console.log(data.subcategory)
                    formikProps.setFieldValue('subcategory', e.target.value);
                }}
                required
              >
                {data.categorys.length > 0 &&
                  data.categorys[subcategorieIndex].subcategories.map((subcategory, index) => (
                    <option key={index} value={subcategory.name}>
                      {subcategory.name}
                    </option>
                  ))}
              </Select>
              <ErrorMessage
                name="subcategory"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            </div>}
            <div className='space-x-2'>
          <button
            type="submit"
            className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-800 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Submit
          </button>
          <button
          type='reset'
            className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-800 focus:outline-none focus:ring focus:ring-indigo-200"
            onClick={()=>{dispatch(resetProductData())}}
          >
            Reset
          </button>
          </div>
        </Form>)}
      </Formik>
    </div>
  );
};

export default AddProductsPageForm;
