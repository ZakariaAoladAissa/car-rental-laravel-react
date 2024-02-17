import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import './layout.css'

function Layout() {
  
  return (
    <div className="layout-container">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout