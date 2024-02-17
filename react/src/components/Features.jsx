import './features.css'
import car from "../assets/dacia-duster.jpg"
import car2 from "../assets/peugeot-208.png"
import car3 from "../assets/renault-megan.jpg"


function Features() {
  
  return (
    <>
      <div className="features-container">
        <div className='features-text'>
            Featured Vehicules
            <br/>
            <span>We have been working with customers all over the country.</span>
        </div>
        <div className='features-imgs'>
            <div className='features-card'>
                <img src={car}/>
                <div className='car-name'>
                   Car brand 
                    <span>201?</span> 
                </div>
                
            </div>
            <div className='features-card'>
            <img src={car2}/>
                <div className='car-name'>
                   Car brand 
                    <span>201?</span> 
                </div>
            </div>
            <div className='features-card'>
            <img src={car3}/>
                <div className='car-name'>
                   Car brand 
                    <span>201?</span> 
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Features