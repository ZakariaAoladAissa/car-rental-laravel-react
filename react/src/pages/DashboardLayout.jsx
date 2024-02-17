
import "./dashboardLayout.css"

import { Outlet } from "react-router-dom"
import DashboardNav from "../components/DashboardNav"

function DashboardLayout() {

  
  return (
    <>
      <div className="dashboard-container">
        <DashboardNav/>
        <Outlet/>
      </div>  
    </>
  )
}

export default DashboardLayout