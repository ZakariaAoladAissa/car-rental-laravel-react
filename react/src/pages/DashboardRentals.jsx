import { useEffect, useMemo, useState } from 'react';

import './dashboardcars.css'
import axios from 'axios';
import Table from '../components/Table';

function DashboardRentals() {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

// columns.js
useEffect(()=>{
 const getCars =async ()=>{
    try{
        setLoading(true)
        const result=await axios.get('http://127.0.0.1:8000/api/rent')
        if(result){
            setData(result.data)
            setLoading(false)
        }
    }catch(e){
        console.log(e)
    }
    
 }
 getCars()
},[])

const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Rental Date',
        accessor: 'rental_date',
    },
    {
        Header: 'Return Date',
        accessor: 'return_date',
    },
    {
        Header: 'Price',
        accessor: 'price',
    },
    {
        Header: 'User ID',
        accessor: 'user_id',
    },
    {
        Header: 'Car ID',
        accessor: 'car_id',
    },

    ];
    const columns = useMemo(() => COLUMNS, []);

   
  return (
    <>
        <div className="dashboard-cars-container">
            <div className='dashed-border'>
                <div className='hi-add'>
                    <h2>Hi, Admin</h2>
                </div>

                {/* --table-- */}
                {loading && <h3>Loading...</h3>}

                {!loading && <Table data={data} columns={columns}/>}

            </div>  
        </div>
      
    </>
  )
}

export default DashboardRentals