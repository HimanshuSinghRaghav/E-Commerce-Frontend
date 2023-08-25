import React from 'react'
import LoginForm from '../components/AdminLogin/LoginForm'
import AdminLoginImage from '../assets/AdminLogin.png'
import SignupForm from '../components/AdminLogin/SignupForm'
const AdminLogin = ({purpose}) => {
    console.log(purpose)
  return (
    <div className='w-screen h-screen flex'>
        <div className='w-full lg:w-1/4 relative'>
            {purpose==='login' && <LoginForm/>}
            {purpose==='signup' && <SignupForm/>}
        </div>
        <div className="hidden lg:block w-3/4 bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${AdminLoginImage})` }}></div>
    </div>
  )
}

export default AdminLogin