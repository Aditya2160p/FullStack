import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';


const Register =()=> {
  const baseURL="http://localhost:8080/api"
  const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
  const loginData={username,password}
const navigate = useNavigate();

const handleLoginSubmit = (e) => {
  e.preventDefault();
        console.log(loginData);
        axios.post(`${baseURL}/login`,loginData)
    .then((response) => {
      console.log(response.data);
      navigate('/');
    })
    .catch((error) => {
      console.error(error.response.data); // Log the error response from the server
      // Display an appropriate error message to the user
      if (error.response.status === 401) {
        alert('Invalid username or password');
      } else if (error.response.status === 404) {
        alert('Username does not exist');
      } else {
        alert('An error occurred during login');
      }
    });
};  

// const handleLoginChange=(e)=>{
//   setLoginData({...loginData,[e.target.name]:e.target.value});
// } 
// const handleLoginChange = (e) => {
//   setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   console.log(loginData);
// }

  return (
  <>
     <div className="bgjan"></div>
      <div className="bgjan bgjan2"></div>
      <div className="bgjan bgjan3"></div>
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
    <form className='register' onSubmit={handleLoginSubmit}>
      <h3 className='loginreg'>LOGIN HERE</h3>
    <div className='regisuse'>
      <label htmlFor="username" className='labuser'>Username</label>
      <input type="text" className='inputuser' placeholder="Username" id="username" value={loginData.username}
                  onChange={(e)=>{setUsername(e.target.value)}} />
      </div>
      <div className='regispass'>
      <label htmlFor="password" className='labpass'>Password</label>
      <input type="password" className='input' placeholder="Password" id="password" value={loginData.password} onChange={(e)=>{setPassword(e.target.value)}} />
      </div>
      
      <div className='reg'>
      <button type='submit' className='regissub' onClick={handleLoginSubmit}>
        Log In
      </button>
    </div>
      </form>
    
    </>
  );
};



export default Register;