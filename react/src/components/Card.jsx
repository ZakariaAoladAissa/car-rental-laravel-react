import './card.css'
import { Link } from 'react-router-dom'


function Card({data}) {
  return (
    <>
      <div className='card-container'>
        <img src={`http://127.0.0.1:8000/storage/images/${data.photo}`}/>
        <div className='card-infos'>
            <div className='name-date'>
                <h3>{data.brand}</h3>
                <span>{data.model}</span> 
            </div>
            <div className='price'>{data.price}DH <span>/day</span></div>
            <div className='rent-button'><Link to={`/car/${data.id}`}><button>Rent Now</button></Link></div>
        </div>
      </div>
    </>
  )
}

export default Card