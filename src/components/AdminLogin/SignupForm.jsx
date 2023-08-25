import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import PhoneInputField from './PhoneInput';
import { useMutation } from 'react-query';
import Register from '../../api/admin/auth';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../Redux/tokenSlice';

const SignUpSchema = Yup.object().shape({
    name: Yup.string().min(3 , 'Name must be 3 char long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5, 'Must be exactly 5 digits').required('Required'),
  phone: Yup.string().min(13 , "invalid phone number").max(13 , "invalid phone number").required('Phone number is required'),
});

const SignupForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
  const initialValues = {
    name: '',
    email: '',
    password: '',
    phone: '',
    isAdmin: true
  };

  const handleSubmit = async(values) => {
    console.log(values); // You can handle login logic here
    await mutateAsync(values)
    return
  };
  const {mutateAsync} = useMutation('post/register' , Register , {
    onSuccess: (data)=>{
        dispatch(setAuthToken(data.token))
        navigate('/')
        toast.success('Login Successfull!')
    },
    onError: (error)=>[
        toast.error(error.response.data.error)
    ]
  })

  return (
    <div className="absolute flex w-[300px] sm:w-[500px] h-full overflow-hidden bg-yellow-400 justify-center items-center">
      <Formik initialValues={initialValues} validationSchema={SignUpSchema} onSubmit={handleSubmit}>
        <Form className="bg-white p-8 rounded shadow-md w-[70%] h-[60%]">
          <h2 className="text-2xl font-bold mb-4">SignUp</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Field
              type="name"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>
          <PhoneInputField name="phone" label="Phone Number" />
          <div className='space-x-4'>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            SignUp
          </button>
          <button
            onClick={()=>navigate('/adminlogin')}
            className=" px-4 py-2 rounded-md hover:bg-gray-300 hover:bg-opacity-30 duration-300"
          >
            Login
          </button>
          </div>
         
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
