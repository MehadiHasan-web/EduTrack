import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Dashboard from './page/admin/Dashboard';
import axios from 'axios';

function App() {

  const [auth, setAuth] = useState(false);

  useEffect(()=>{
    if (localStorage.token != undefined) {
      setAuth(true)
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`
    }
  })



  return (
    
    <Router>
      <Routes>  
          
        {auth ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path='/Register' element={<Register />}/>  
      
      </Routes>
    </Router>
  
  )
}

export default App
