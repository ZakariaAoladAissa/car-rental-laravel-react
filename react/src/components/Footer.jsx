import './footer.css'
import car from "../assets/dacia-duster.jpg"
import car2 from "../assets/peugeot-208.png"
import car3 from "../assets/renault-megan.jpg"


function Footer() {
  
  return (
    <>
      <div className='footer-container'>
        <div className='site-infos'>
            <div className='about'>
                <span>About Company</span>
                A wide selection of vehicules, competiive prices to make your experience enjoyable.
            </div>
            <div className='about'>
                <span> Company</span>
                <a>Blog</a>
                <a>About Us</a>
                <a>Contact Us</a>
            </div>
            <div className='about'>
                <span>Legal</span>
                <a>Cookies Policy</a>
                <a>Privacy policy</a>
                <a>Terms of Service</a>
            </div>
            <div className='about'>
                <span>Install App</span>
                <div>Android</div>
                <div>IOS</div>
            </div>
        </div>
        <div className='copyright'>
            Copyright. All rights reserved.
        </div>
            
      </div>
    </>
  )
}

export default Footer