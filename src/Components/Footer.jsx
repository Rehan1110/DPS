import Logo from "../images/Vector.png"
import FbImg from "../images/fbImg.png"
import TwitterImg from "../images/twitterImg.png"
import LinkedinImg from "../images/linkedinImg.png"
import YoutubeImg from "../images/ytImg.png"
import Location from "../images/Location.png";
import telephone from "../images/Telephone.png"
import "./Footer.css"
export default function Footer() {
    return (
        <div className="footer-outer-container">
        <div className="footer">
            <div>
                <div className="footer-logo-text">
                    <img src={Logo} alt="Logo" width="40px" height="40px"/>
                    <p>Logoipsum</p>
                </div>
                <p className="footer-para">Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore et</p>
                <div className="logo-container">
                <div className="logo-footer">
                    <div>
                        <img src={FbImg}/>
                    </div>
                </div>
                <div className="logo-footer">
                    <div>
                        <img src={TwitterImg}/>
                    </div>
                </div>
                <div className="logo-footer">
                    <div>
                        <img src={LinkedinImg}/>
                    </div>
                </div>
                <div className="logo-footer">
                    <div>
                        <img src={YoutubeImg}/>
                    </div>
                </div>
                </div>
            </div>
           <div className="quick-links">
            <h1>Quick Links</h1>
            <p>Software Team</p>
            <p>Technologies</p>
            <p>Resources</p>
             <p>Company</p>
             <p>Contact Us</p>
             <p>FAQ</p>
           </div>
            <div className="services">
                 <h1>Services</h1>
            <p>Dedicated Development</p>
            <p>Staff Augmentation Services</p>
            <p>Software Development</p>
             <p>Development Center</p>
            </div>
           <div className="contact-us">
             <h1>Contact Us</h1>
             <div className="footer-service-container">
                <img src={Location} alt="Location" width="24px" height="24px" />
                <p>Envato, Level 13, 2 Elizabeth Victoria 3000 India</p>
             </div>
              <div className="footer-service-container">
                <img src={telephone} alt="Location" width="24px" height="24px" />
                <p>+91 861 944 1176</p>
             </div>
              <div className="footer-service-container">
                <img src={telephone} alt="Location" width="24px" height="24px" />
                <p>ezyoga@gmail.com</p>
             </div>
            </div>    
        </div>
         <div className="logo-last-part">
            <p>logoname. 2023. All rights reserved</p>
            </div>
            </div>
    )
}