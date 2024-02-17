import { Link } from 'react-router-dom'
import './navbar.css'
import axios from 'axios';
import { useAuth } from '../provider/authProvider';


function NavBar() {

  const { token,setToken } = useAuth();

  const handleClick =async()=>{
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/auth/logout', null, {});
     setToken(null)
      window.location.href = '/'
      console.log("logged out")
    }catch(e) {console.log(e)}
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar-links">
            <p>Logo</p>
            <li><Link style={{textDecoration:"none",color:"black"}} to="/">Home</Link></li>
            <li><Link style={{textDecoration:"none",color:"black"}} to="/rent">Rent Cars</Link></li> 
            <li><Link style={{textDecoration:"none",color:"black"}} to="/my-rents">My rentals</Link></li>

        </div>
        <div className="user-details">
             {token &&<button className='logout' onClick={(e)=>handleClick(e)}>Logout</button>}
        </div>
      </div>
    </>
  )
}

export default NavBar