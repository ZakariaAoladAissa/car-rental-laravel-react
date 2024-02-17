
import { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from 'axios';
import "./rent.css"

function Rent() {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    const getCars =async ()=>{
      try{
          setLoading(true)
          const result=await axios.get('http://127.0.0.1:8000/api/cars')
          if(result){
              console.log(result)
              setLoading(false)
              setData(result.data)
          }
      }catch(e){
          console.log(e)
      }
      
   }
   getCars()
  },[])
  return (
    <>
        <div className="rent-container">
            <div className="cards-div">
              {loading && <h2 style={{marginTop:"25px"}}>Loading...</h2>}
              {data && data.map((car,key)=>{return(
                <Card data={car} key={key}/>
              )})}
                
            </div>
            
        </div>
      
    </>
  )
}

export default Rent