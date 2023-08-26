import { useState } from 'react'
import AdminLogin from './pages/AdminLogin'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './pages/Products';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path='/adminlogin' element={<AdminLogin purpose="login"/>}/>
          <Route exact path='/adminsignup' element={<AdminLogin purpose="signup"/>}/>
          <Route exact path='/' element={<Products route='dashboard'/>}/>   
          <Route exact path='/addProduct' element={<Products route='addProduct'/>}/>        
        </Routes>
    </Router>
    <ToastContainer className="z-50" />
    </>
  )
}

export default App
