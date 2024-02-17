import React, { useState } from "react";
import "./modal.css";
import axios from "axios";

function Modal({ setOpenModal,setNewCar,car=null,setEditFlag }) {
    const [brand,setBrand] = useState(car ? car.cells[1].value : "")
    const [model,setModel] = useState(car ? car.cells[2].value :"")
    const [fuelType,setFuelType] = useState(car ? car.cells[3].value :"")
    const [price,setPrice] = useState(car ? car.cells[4].value :"")
    const [gearbox,setGearbox] = useState(car ? car.cells[5].value :"")
    const [available,setAvailable] = useState(car ? car.cells[6].value :"")
    const [photo,setPhoto] = useState(null)
    const [error,setError] = useState(false)
  const handleClick=async ()=>{
   
    try{
      const formData= new FormData();
      formData.append('brand', brand);
      formData.append('model', model);
      formData.append('fuel_type', fuelType);
      formData.append('price', price);
      formData.append('gearbox', gearbox);
      formData.append('available', available);
      if (photo) formData.append('photo', photo);
      const token = localStorage.getItem('token');

      //Create a new car
      if(!car){

        const response= await axios.post("http://127.0.0.1:8000/api/cars", formData, {
            headers:{
              'Content-Type':"multipart/form-data",
            },
        } );
        console.log(response)
      }else{
        //!!IMPORTANT
        //laravel has a different way of handling data incoming from a put request
        //appending put and sending it as a post request is simpler
        //also there is a problem of cors policy when using dd($request)
        formData.append('_method', 'PUT'); // Override method

            const response= await axios.post(`http://127.0.0.1:8000/api/cars/${car.cells[0].value}`, formData, {
            headers:{
              'Content-Type':"multipart/form-data",
              'Authorization': `Bearer ${token}`
            },
        } );
        console.log(response)
      }
      
      /*await axios.post("http://127.0.0.1:8000/api/",{
      title:title,
      description:description,
      image:formData
    })*/
      setOpenModal(false)
      if (car) setEditFlag(false)
      setNewCar((prevState)=> !prevState)
   }catch(e){
      console.log(e.response)
      setError(true)
    }
    
  }
  const handleFileChange=(e)=>{
    setPhoto(e.target.files[0])
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
              if(car) setEditFlag(false)
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h2>{car ? "Edit a car" : "Add a new car"} </h2>
        </div>
        <div className="content">
          {error && <div className="error-msg">Missing Field ! </div>}
          <div className="body">
                <p>Brand : </p><input onChange={(e)=>setBrand(e.target.value)} type="texte" value={brand}/>  
                <p>Model : </p><input onChange={(e)=>setModel(e.target.value)} value={model}/>
                <p>Fuel Type : </p><input onChange={(e)=>setFuelType(e.target.value)} value={fuelType}/>
                <p>Price : </p><input onChange={(e)=>setPrice(e.target.value)} value={price}/>
                <p>Gearbox : </p><input onChange={(e)=>setGearbox(e.target.value)} value={gearbox}/>
                <p>Availabality : </p><input onChange={(e)=>setAvailable(e.target.value)} value={available}/>
                <p >Car Image : </p><div className="upload"><input onChange={handleFileChange} type="file"/>  </div>
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
              if(car) setEditFlag(false)
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={handleClick}>{car ? "Update" : "Create"}</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;