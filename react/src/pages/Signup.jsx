
import "./login.css"
import purple from "../assets/purple.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Signup() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [pwd,setPwd]=useState("")
  const [error,setError]=useState(null)

  const handleClick =async(e)=>{
    e.preventDefault()
    try{const response = await axios.post("http://127.0.0.1:8000/api/auth/register",{
      name:name,
      email:email,
      password:pwd
    })
    window.location.href = '/login'
    console.log('account created')
    //console.log(response.data)
    }catch(e){
    console.log(e)
    setError(e.response.data.message)

  }
  }
  return (
    <>
        <div className="login-container">
           <div className="login-card">
            <img src={purple}/>
            <div className="login-infos signup-infos">
                <h1>Create An Account.</h1>
                {error && <p style={{color:"red"}}>{error}</p>}
                <p>Welcome! Create an account to view all details</p>
                <div className="login-inputs signup-inputs">
                    <div><i className="fa-solid fa-user"></i><input onChange={(e)=>setName(e.target.value)} placeholder="Name" type="texte"/></div>
                    <div><i className="fa-solid fa-envelope"></i><input onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="texte"/></div>
                    <div><i className="fa-solid fa-lock"></i><input onChange={(e)=>setPwd(e.target.value)} placeholder="Password" type="password"/></div>
                </div>
                <div className="button">
                    <button onClick={handleClick} >Register</button>
                    <p><Link to="/login">Already have an account? Sign in.</Link></p>
                </div>
                
            </div>
           </div>
            
        </div>
      
    </>
  )
}

export default Signup