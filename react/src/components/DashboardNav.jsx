
import { Link } from "react-router-dom"
import "./dashboardNav.css"


function DashboardNav() {

  
  return (
    <>
        <div className="dashboard-nav-container">
            <h1>Logo</h1>
            <Link className="link" to="/dashboard/users"><div className="dashboard-page"><i className="fa-solid fa-users"></i>Users</div></Link>
            <Link className="link" to="/dashboard"><div className="dashboard-page"><i className="fa-solid fa-car"></i>Cars</div></Link>
            <Link className="link" to="/dashboard/rentals"><div className="dashboard-page"><i className="fa-solid fa-key"></i>Rentals</div></Link>
        </div>
      
    </>
  )
}

export default DashboardNav