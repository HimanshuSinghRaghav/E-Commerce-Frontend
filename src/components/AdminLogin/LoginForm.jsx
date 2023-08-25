import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { Login } from '../../api/admin/auth';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { setAuthToken } from '../../Redux/tokenSlice';
import { toast } from 'react-toastify';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5, 'Must be exactly 5 digits').required('Required'),
});

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async(values) => {
    console.log(values); // You can handle login logic here
    await mutateAsync(values)
  };

  const {mutateAsync} = useMutation('post/login' , Login , {
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
    <div className="absolute flex w-full h-full bg-yellow-400 justify-center items-center">
      <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
        <Form className="bg-white p-8 rounded shadow-md w-[70%] h-[40%]">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
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
          <div className='space-x-4'>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <button
            onClick={()=>navigate('/adminsignup')}
            className=" px-4 py-2 rounded-md hover:bg-gray-300 hover:bg-opacity-30 duration-300"
          >
            SignUp
          </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
