import "./Hire.css"
import HireImg from "../images/Hire_Img.png"
import WhiteArrowImg from "../images/whiteArrow.png"
export default function Hire() {
    return (
        <div className="hirebox-container">
            <div>
                <h1 className="hire-para">Why Hire Software Developers <br></br>in India?</h1>
                <img src={HireImg} alt="Hiring Image" className="Hiring-Image" />
            </div>
            <div className="hire-lists">
              <div className="hire-right-part">
                <p className="hire-right-para">English Speaking Programmers</p>
                <img src={WhiteArrowImg} alt="Arrow" width="14px" height="14px" className="hire-right-img" />
              </div>
              <hr className="line"></hr>
               <div className="hire-right-part">
                <p className="hire-right-para">Flexible work hours</p>
                <img src={WhiteArrowImg} alt="Arrow" width="14px" height="14px" className="hire-right-img"/>
              </div>
              <hr className="line"></hr>
               <div className="hire-right-part">
                <p className="hire-right-para">Rapid Onboarding Process</p>
                <img src={WhiteArrowImg} alt="Arrow" width="14px" height="14px" className="hire-right-img" />
              </div>
              <hr className="line"></hr>
               <div className="hire-right-part">
                <p className="hire-right-para">Expertise in Top Technologies</p>
                <img src={WhiteArrowImg} alt="Arrow" width="14px" height="14px" className="hire-right-img"/>
              </div>
              <hr className="line"></hr>
               <div className="hire-right-part">
                <p className="hire-right-para">Reliable Partner Credentials</p>
                <img src={WhiteArrowImg} alt="Arrow" width="14px" height="14px" className="hire-right-img"/>
              </div>
              <hr className="line"></hr>
            </div>
        </div>
    )
}