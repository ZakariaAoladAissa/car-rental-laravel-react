
import "./login.css"
import purple from "../assets/purple.jpg"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useAuth } from "../provider/authProvider"

function Login() {
  const [email,setEmail]=useState("")
  const [pwd,setPwd]=useState("")
  const [error,setError]=useState(null)
  const { setToken } = useAuth();


  const handeClick=async(e)=>{
    e.preventDefault()
    try{
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login",{
      email:email,
      password:pwd
      })
      console.log(response)
      const token = response.data.access_token;
      setToken(token)
      window.location.href = '/'
    }catch(e) {
      console.log(e)
      setError("Email or password incorrect")
    }
  }
  return (
    <>
        <div className="login-container">
           <div className="login-card">
            <img src={purple}/>
            <div className="login-infos">
                <h1>Welcome Back.</h1>
                {error && <p style={{color:"red"}}>{error}</p>}
                <p>Welcome back! Log in to your account to view all details</p>
                <div className="login-inputs">
                    <div><i className="fa-solid fa-envelope"></i><input onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="texte"/></div>
                    <div><i className="fa-solid fa-lock"></i><input onChange={(e)=>setPwd(e.target.value)} placeholder="password" type="password"/></div>
                </div>
                <div className="button">
                    <button onClick={(e)=>handeClick(e)}>Login</button>
                    <p><Link to="/signup">No account? Register.</Link></p>
                </div>
                
            </div>
           </div>
            
        </div>
      
    </>
  )
}

export default Login