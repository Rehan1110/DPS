import "./Hire.css"
import HireImg from "../images/Hire_Img.png"
import WhiteArrowImg from "../images/WhiteArrow.png"
export default function Hire() {
    return (
        <div className="hirebox-container">
            <div>
                <h1 className="hire-para">Why Hire Software Developers <br></br>in India?</h1>
                <img src={HireImg} width="600px" />
            </div>
            <div>
              <div className="hire-right-part">
                <p className="hire-right-para">English Speaking Programmers</p>
                <img src={WhiteArrowImg} alt="Arrow" width="14px" height="14px" />
              </div>
              <hr className="line"></hr>
               <div className="hire-right-part">
                <p className="hire-right-para">Flexible work hours</p>
                <img src={WhiteArrowImg} alt="Arrow" width="14px" height="14px" />
              </div>
              <hr className="line"></hr>
               <div className="hire-right-part">
                <p className="hire-right-para">Rapid Onboarding Process</p>
                <img src={WhiteArrowImg} alt="Arrow" width="14px" height="14px" />
              </div>
              <hr className="line"></hr>
               <div className="hire-right-part">
                <p className="hire-right-para">Expertise in Top Technologies</p>
                <img src={WhiteArrowImg} alt="Arrow" width="14px" height="14px" />
              </div>
              <hr className="line"></hr>
               <div className="hire-right-part">
                <p className="hire-right-para">Reliable Partner Credentials</p>
                <img src={WhiteArrowImg} alt="Arrow" width="14px" height="14px" />
              </div>
              <hr className="line"></hr>
            </div>
        </div>
    )
}