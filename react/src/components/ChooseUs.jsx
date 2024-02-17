import './chooseus.css'
import car from "../assets/dacia-duster.jpg"
import car2 from "../assets/peugeot-208.png"
import car3 from "../assets/renault-megan.jpg"


function ChooseUs() {
  
  return (
    <>
      <div className='choose-container'>
        <div className='choose-text'>
                Why choose Us
                <br/>
                <span>Experience hassle-free rentals with exceptional service and a wide selection of vehicules.</span>
        </div>
        <div className='choose-cards'>
            <div className='choose-card'>
                <div className='choose-icon'><i className="fa-solid fa-car"></i></div>
                <div className='choose-card-text'>
                    Wide Selection of Cars<br/>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </span>
                </div>
            </div>
            <div className='choose-card'>
                <div className='choose-icon'><i className="fa-solid fa-dollar-sign"></i></div>
                <div className='choose-card-text'>
                    Competitive Prices<br/>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  nisi ut aliquip ex ea commodo consequat
                    </span>
                </div>
            </div>
            <div className='choose-card'>
                <div className='choose-icon'><i className="fa-solid fa-calendar"></i></div>
                <div className='choose-card-text'>
                    Easy Booking Process<br/>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis o laboris nisi ut aliquip ex ea commodo consequat
                    </span>
                </div>
            </div>
            <div className='choose-card'>
                <div className='choose-icon'><i className="fa-solid fa-shield"></i></div>
                <div className='choose-card-text'>
                    Trust And Reliability<br/>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    </span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ChooseUs