import { useEffect, useMemo, useState } from 'react';

import './dashboardcars.css'
import axios from 'axios';
import Modal from '../components/Modal';
import Table from '../components/Table';
import Notification from '../components/Notification';

function DashboardCars() {
    const [data,setData] = useState([])
    const [openModal,setOpenModal] = useState(false)
    const [newCar,setNewCar] = useState(false)
    const [editFlag,setEditFlag] = useState(false)
    const [notificationFlag,setNotificationFlag] = useState(false)
    const [selectedRow,setSelectedRow] = useState(null)
    const [loading,setLoading] = useState(false)

    const handleDeleteRow = async (id) => {
        try {
          await axios.delete(`http://localhost:8000/api/cars/${id}`); 
      
          setData((prevData) => {
            const updatedData = prevData.filter((row) => row.id !== id);
            return updatedData;
          });
        } catch (error) {
          console.error( error);
        }
      };
// columns.js
useEffect(()=>{
 const getCars =async ()=>{
    try{
        setLoading(true)
        const result=await axios.get('http://127.0.0.1:8000/api/cars')
        if(result){
            setData(result.data)
            setLoading(false)
        }
    }catch(e){
        //if not admin it will return an error and should be redirect it from here using Link for example
        console.log(e)
    }
 }
    if (newCar) setNotificationFlag(true)
    setTimeout(()=>{setNotificationFlag(false)},3000)

    getCars()
},[newCar])

const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Brand',
        accessor: 'brand',
    },
    {
        Header: 'Model',
        accessor: 'model',
    },
    {
        Header: 'Fuel Type',
        accessor: 'fuel_type',
    },
    {
        Header: 'Price',
        accessor: 'price',
    },
    {
        Header: 'Gearbox',
        accessor: 'gearbox',
    },
    {
        Header: 'Available',
        accessor: 'available',
    },
    ,
      {
        Header: 'Operations',
        accessor: 'delete',
        Cell: ({ row }) => (
            <>
                <button onClick={()=>handleUpdateClick(row)} className='update-button'><i className="fa-solid fa-pen-to-square"></i>Edit</button>
                <i onClick={(e) => {
                e.stopPropagation();
                handleDeleteRow(row.original.id)}
                } className="delete-button fa-solid fa-trash"></i>
            </>
        ),
      },
    ];
    const columns = useMemo(() => COLUMNS, []);
    

    const handleClick=()=>{
        setOpenModal(true)
    }
    const handleUpdateClick=(row)=>{
        setOpenModal(true)
        setEditFlag(true)
        setSelectedRow(row)
    }
  return (
    <>
        <div className="dashboard-cars-container">
            <div className='dashed-border'>
                <div className='hi-add'>
                    <h2>Hi, Admin</h2>
                    <button onClick={handleClick}><i className="fa-solid fa-plus"></i>New Item</button>
                </div>
                {notificationFlag && <Notification message="Item Created Succefully"/>}
                {/* --table-- */}
                {loading && <h3>Loading...</h3>}
                {!loading && <Table data={data} columns={columns}/>}

            </div>
            {openModal && <Modal setOpenModal={setOpenModal} setNewCar={setNewCar}/>}
            {openModal && editFlag && <Modal setEditFlag={setEditFlag} setOpenModal={setOpenModal} setNewCar={setNewCar} car={selectedRow}/>}
            
        </div>
      
    </>
  )
}

export default DashboardCars