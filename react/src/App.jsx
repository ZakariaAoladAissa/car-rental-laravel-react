import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout';
import Rent from './pages/Rent';
import Car from './pages/Car';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardLayout from './pages/DashboardLayout';
import  { useAuth } from './provider/authProvider';
import DashboardCars from './pages/DashboardCars';
import DashboardUsers from './pages/DashboardUsers';
import MyRents from './pages/MyRents';
import DashboardRentals from './pages/DashboardRentals';

function App() {
  const { token,setToken } = useAuth();

  //logout when token expires (experimental)
  //removes token from localStorage and authorization header in authProvider
  if(token && JSON.parse(atob(token.split('.')[1])).exp * 1000 < Date.now()) setToken(null)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/rent",
          element: <Rent />,
        },
        {
          path: "/car/:carId",
          element: token ? <Car /> : <Navigate to="/login" />,
        },
        {
          path: "/my-rents",
          element: token ? <MyRents /> : <Navigate to="/login" />,
        },
      ],
      
    },
    {
      path: "/dashboard",
      element: <DashboardLayout/>,
      children:[
        {
          path: "",
          element: <DashboardCars />,
        },
        {
          path: "users",
          element: <DashboardUsers />,
        },
        {
          path: "rentals",
          element: <DashboardRentals />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    }
  ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
