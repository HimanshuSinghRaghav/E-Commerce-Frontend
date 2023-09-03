import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import validationSizeSchema from '../../Validation/admin/validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { setSize , setHW } from '../../Redux/AddProductDataSlice';

const ProductSize = () => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('xs');
  const product = useSelector((state)=>state.addProduct)

  const handleSizeChange = (size) => {
    dispatch(setSize({size}))
    setSelectedSize(size);
  };

  const initialValues = {
    width: product.metadata.hw.width,
    height: product.metadata.hw.height,
    widthUnit: 'inch', // Default unit
    heightUnit: 'inch', // Default unit
  };



  
  const unitOptions = ['inch', 'foot', 'cm', 'm']; // Add more units as needed
  return (
    <aside >
      
      <section className='bg-gray-100 p-2 m-2 rounded-md'>
      <div className="  flex justify-center items-center">
      <Formik
      initialValues={initialValues}
      validationSchema={validationSizeSchema}
      onSubmit={(values) => {
        // Handle form submission when both fields are filled
        if (values.width && values.height) {
          dispatch(setHW(values))
          console.log(values);
        }
      }}
    >
      {(formik)=>(<Form className="space-y-4 flex flex-col">
        <div className="space-x-2 py-2 text-sm flex items-center pb-6 border-b border-slate-200">
          <div>
            <p className="tracking-wide font-medium">WIDTH:</p>
            <div className="flex items-center">
              <Field type="number" name="width" className="w-24 p-2 border rounded-md" />
              <Field as="select" name="widthUnit" className="p-2 border rounded-md ml-2">
                {unitOptions.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </Field>
            </div>
            <ErrorMessage name="width" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <p className="tracking-wide font-medium">HEIGHT:</p>
            <div className="flex items-center">
              <Field type="number" name="height" className="w-24 p-2 border rounded-md" />
              <Field as="select" name="heightUnit" className="p-2 border rounded-md ml-2">
                {unitOptions.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </Field>
            </div>
            <ErrorMessage name="height" component="div" className="text-red-500 text-sm mt-1" />
          </div>
        </div>
        <button
          type="submit"
          className="bg-slate-800 justify-self-end hover:bg-slate-800 text-white py-2 px-4 rounded-md"
        >+
          Add
        </button>

      </Form>)}
    </Formik>
      </div>
      </section>
      <section className='bg-gray-100 p-2 m-2 rounded-md'>
      <div className=" mt-4 mb-6 pb-6 border-b border-slate-200 flex justify-center items-center">
        <div className="space-x-2 text-sm flex">
          {['xs', 's', 'm', 'l', 'xl'].map((size) => (
            <label key={size}>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value={size}
                checked={product.metadata.size === size}
                onChange={() => handleSizeChange(size)}
              />
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold ${
                  selectedSize === size
                    ? 'peer-checked:bg-slate-900 peer-checked:text-white transition-opacity duration-500 ease-in-out opacity-100'
                    : 'opacity-50 transition-opacity duration-300 ease-in-out'
                }`}
                onClick={() => handleSizeChange(size)}
              >
                {size.toUpperCase()}
              </div>
            </label>
          ))}
        </div>
      </div>
      <p className='tracking-wide font-medium text-center'>Selected Size: {selectedSize.toUpperCase()}</p>
      </section>
    </aside>
  );
};

export default ProductSize;
