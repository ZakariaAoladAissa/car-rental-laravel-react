import { useParams } from "react-router-dom"

import "./car.css"
import { useEffect, useState } from "react"
import axios from "axios"

function Car() {
    const {carId}=useParams()
    const [data,setData]=useState(null)
    const [rentalDate,setRentalDate]=useState("")
    const [returnDate,setReturnDate]=useState("")
    const [totalPrice,setTotalPrice]=useState(0)
    const [error,setError]=useState("")

    useEffect(()=>{
        const getCar =async ()=>{
          try{
            const result=await axios.get(`http://127.0.0.1:8000/api/cars/${carId}`)

              if(result){
                  setData(result.data)
              }
          }catch(e){
              console.log(e)
          } 
       }
       getCar()
    },[])
    const calculateTotalPrice = (rentalDate,returnDate) =>{
        const now = new Date().getTime();
        const rentDuration = returnDate - rentalDate

        if(rentalDate && returnDate){
            if(rentalDate < now || returnDate < now)  setTotalPrice(0)
            else if (rentDuration <= 0) setTotalPrice(0)
            else {
                //convert from milliseconds to days
                const price = (rentDuration / (1000 * 60 * 60 * 24)) * data.price;
                setTotalPrice(price)
            }
        }
    }
    const handleRentalDateChange = (e)=>{
        setRentalDate(Date.parse(e.target.value))
        setError("")
    }
    const handleReturnDateChange = (e)=>{
        setReturnDate(Date.parse(e.target.value))
        setError("")

    }
    useEffect(() => {
        calculateTotalPrice(rentalDate,returnDate)
      }, [returnDate,rentalDate]);

    const handleClick=async()=>{
        if(totalPrice){
                const carToRent = {
                'rental_date':rentalDate,
                'return_date':returnDate,
                'price':totalPrice,
                'car_id':carId
            }
            try{
                const result=await axios.post(`http://127.0.0.1:8000/api/rent`,carToRent)

                if(result){
                    setData(result.data)
                    window.location.href = '/my-rents'
                }
            }catch(e){
                console.log(e)
            } 
        }else{
            setError('Please enter a valid date')
        }
        
    }
  return (
    <>
        <div className="car-container">
            {data && <div className="car-card">
                <img src={`http://127.0.0.1:8000/storage/images/${data.photo}`}/> 
                <div className="car-infos">
                    <span className="title"><h1>{data.brand}</h1></span>
                    {error && <span className="error">{error}</span>}
                    <div className="date">
                        <span>Rental Date</span>
                        <input onChange={handleRentalDateChange} type="date"/>
                    </div>
                    <div className="date">
                        <span>Return Date</span>
                        <input onChange={handleReturnDateChange}  type="date"/>
                    </div>
                    <div className="general-infos">
                        <div className="info">
                            <span>Gearbox</span>
                            <span>{data.gearbox}</span>
                        </div>
                        <div className="info">
                            <span>Type</span>
                            <span>{data.fuel_type}</span>
                        </div>
                        <div className="info">
                            <span>Available</span>
                            <span>{data.available ? "yes" : "no"}</span>
                        </div>
                    </div>
                    <div className="price">
                        <span>Total</span>
                        <span className="price-dh">{totalPrice} DH</span>
                    </div>
                    <button onClick={handleClick}>Confirm Rent</button>
                </div>
            </div>}
            
        </div>
      
    </>
  )
}

export default Car