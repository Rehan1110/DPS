import "./SectionTwo.css";
import ArrowImg from "../images/Arrow.png";
import GreenRectangleImg from "../images/green-rectangle.png"
import WhiteArrow from "../images/WhiteArrow.png"
export default function SectionTwo() {
    return (
        <div className="container">
        <div className="heading-left-container">
        <p className="heading-one">
            HIRE DEDICATED
            <img src={GreenRectangleImg} alt="Rectangle-Image"/>
            </p>
        <p className="heading-two">DEVELOPERS</p>
        <p className="para-one">Top 1% Pre-Vetted, In-house & Dedicated Software Programmers</p>
        <p className="para-two">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble</p>
        <div>
        <button className="view-more-button">
            View More
            <img src={WhiteArrow} className="Arrow-Img"/>
        </button>
        <button className="get-in-touch-button">
            Get in Touch
             <img src={ArrowImg} className="Arrow-Img"/>
            </button>
            </div>
        </div>
        <div style={{maxWidth:'460px',width:'100%'}}>
            <div style={{maxWidth:'400px',width:'100%'}}> 
              <div className="form-container">
            <div className="form-heading"> 
                <h2 className="form-text">Create Your Team</h2>
                <p className="form-para">Lorem Ipsum is Simply Dummy Text of the Printing</p>
            </div>
           <form className="form-box">
  <div>
    <label>Full Name</label>
    <input type="text" placeholder="Enter your Name"/>
  </div>
  <div>
    <label>Email Address</label>
    <input type="email" placeholder="Enter your Email"/>
  </div>
  <div>
    <label>Phone Number</label>
    <input type="text" placeholder="Enter your Number"/>
  </div>
  <div>
    <label>Country</label>
    <input type="text" placeholder="Enter your Country"/>
  </div>
  <div className="full-width">
    <label>Project Brief</label>
    <textarea placeholder="Enter your Project Brief"></textarea>
  </div>
</form>
<button className="view-more-button" style={{marginLeft:'20px',paddingLeft:'20%',paddingRight:'20%'}}>
    Hire Software Developer
     <img src={WhiteArrow} className="Arrow-Img"/>
    </button>
    </div>
        </div>
        </div>
        </div>
    )
}