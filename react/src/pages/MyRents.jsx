import './myRents.css'
import axios from 'axios';
import Table from '../components/Table';
import { useEffect, useMemo, useState } from 'react';


function MyRents() {
  const [data,setData] = useState([])
  const [noRentals,setNoRentals] = useState(false)
  const [loading,setLoading] = useState(false)

    const COLUMNS = [
        {
            Header: 'Brand',
            accessor: 'car.brand',
        },
        {
            Header: 'Model',
            accessor: 'car.model',
        },
        {
            Header: 'Fuel Type',
            accessor: 'car.fuel_type',
        },
        {
            Header: 'Price',
            accessor: 'price',
        },
        {
            Header: 'Gearbox',
            accessor: 'car.gearbox',
        },
        {
            Header: 'Rental Date',
            accessor: 'rental_date',
        },
        {
            Header: 'Return Date',
            accessor: 'return_date',
        },
        ,
          {
            Header: 'Operations',
            accessor: 'delete',
            Cell: ({ row }) => (
                <>
                    <i onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteRow(row.original.id)}
                    } className="delete-button fa-solid fa-trash" title="Delete"></i>
                </>
            ),
          },
        ];
        const columns = useMemo(() => COLUMNS, []);

        const handleDeleteRow = async (id) => {
            try {
                const token = localStorage.getItem('token')
                const user_id = JSON.parse(atob(token.split('.')[1])).sub
              await axios.delete(`http://localhost:8000/api/${user_id}/rent/${id}`); 
          
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
        const token = localStorage.getItem('token')
        const user_id = JSON.parse(atob(token.split('.')[1])).sub
     const getCars =async ()=>{
        try{
            setLoading(true)
            const result=await axios.get(`http://127.0.0.1:8000/api/${user_id}/rent`)
            if(result){
                //console.log(result)
                setData(result.data)
                setLoading(false)
            }
        }catch(e){
            console.log(e)
        }
        
     }

    getCars()

    },[])

    useEffect(() => {
      if (data.length === 0) {
          setNoRentals(true);
      } else {
          setNoRentals(false);
      }
  }, [data]);
  return (
    <>
      <div className="rentals-container">
        <h2>List Of All Your Rentals</h2>
        {loading && <h3 style={{marginTop:"25px"}}>Loading...</h3>}
        {!loading && noRentals && <h2 className='no-rentals'>You Have No Rentals Yet.</h2>}
        {data.length > 0 && <Table data={data} columns={columns}/>}

      </div>
    </>
  )
}

export default MyRents