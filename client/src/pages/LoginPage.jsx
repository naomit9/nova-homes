import React, { useState } from 'react'
import "../styles/login.scss"
import { setLogin } from "../redux/state"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      /* Fetch email and password JSON data and convert to strings to send to web server */
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({email, password})
      })

      /* Get data after fetching */
      const loggedIn = await response.json()
      
      /* Dispatch */
      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token
          })
        )
        /* Navigate to homepage */
        navigate("/")
      }
    } catch (err) {
      console.log("Login failed", err.message);
    }
  }

  return (
    <div className='login'>
      <div className='login_content'>
        <form className='login_content_form' onSubmit={handleSubmit}>
          <input
            placeholder='Email' 
            type='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <input 
            placeholder='Password' 
            type='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='submit'>LOG IN</button>
        </form>
        <a href='/register'>Have an account? Sign in here</a>
      </div>
    </div>
  )
}

export default LoginPage