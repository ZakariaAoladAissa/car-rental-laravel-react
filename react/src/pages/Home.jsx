
import NavBar from '../components/Navbar'
import "./home.css"
import car from "../assets/car.png"
import Features from '../components/Features'
import ChooseUs from '../components/ChooseUs'
import ClientsWord from '../components/ClientsWord'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
function Home() {
  
  return (
    <>
        <div className='home'>
           <div className='home-content'>
                <div className='home-text'>
                    <span className='big-text'><span className='orange-text'>Rent a car</span> and find the best deal for you</span>
                    <br/><br/>
                    <span  className='small-text'>Choose from a collection of brand new cars, low prices are part of our every day offer</span>
                    <br/><br/>
                    <Link to="/rent"><button>Book online now!</button></Link>
                </div>
                <div className='home-image'>
                    <img src={car}/>
                </div>
           </div>
           <Features/>
           <ChooseUs/>
           <ClientsWord/>
        </div>
      
    </>
  )
}

export default Home