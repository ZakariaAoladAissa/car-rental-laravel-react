import './clientword.css'
import car from "../assets/dacia-duster.jpg"
import car2 from "../assets/peugeot-208.png"
import car3 from "../assets/renault-megan.jpg"


function ClientsWord() {
  
  return (
    <>
      <div className='clients-container'>
        <div className='choose-text'>
                What Our Clients Say
                <br/>
                <span>Working with clients from around the country.</span>
        </div>
        <div className='clients-cards'>
            <div className='client-card'>
                <div className='client-text down'>
                        Efficient Collaboration
                        <br/>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
                <div className='clients-info'>
                        <div className='client-img'><i className="fa-solid fa-user"></i></div>
                        Ann Black
                        <br/>
                        <span>CEO at ABC Corporation</span>
                </div>
            </div>
            <div className='client-card'>
                <div className='client-text down'>
                        Intuitive Design
                        <br/>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
                <div className='clients-info'>
                        <div className='client-img'><i className="fa-solid fa-user"></i></div>
                        Ann Black
                        <br/>
                        <span>CEO at ABC Corporation</span>
                </div>
            </div>
            <div className='client-card'>
                <div className='client-text down'>
                        Mindblowing Service
                        <br/>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
                <div className='clients-info'>
                        <div className='client-img'><i className="fa-solid fa-user"></i></div>
                        Ann Black
                        <br/>
                        <span>CEO at ABC Corporation</span>
                </div>
            </div>
                
        </div>
            
      </div>
    </>
  )
}

export default ClientsWord