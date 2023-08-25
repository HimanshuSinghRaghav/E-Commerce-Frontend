import { useState } from 'react'
import AdminLogin from './pages/AdminLogin'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProducts from './pages/AddProducts';
function App() {

  localStorage.setItem("AUTH_TOKEN" , '')
  return (
    <>
    <Router>
        <Routes>
          <Route exact path='/adminlogin' element={<AdminLogin purpose="login"/>}/>
          <Route exact path='/adminsignup' element={<AdminLogin purpose="signup"/>}/>
          <Route exact path='/' element={<AddProducts/>}/>          
        </Routes>
    </Router>
    <ToastContainer className="z-50" />
    </>
  )
}

export default App
