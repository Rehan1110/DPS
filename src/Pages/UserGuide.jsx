import "./UserGuide.css";
import GuideImg from "../images/GuideImg.png"
import GreenMark from "../images/green-mark.png"
export default function UserGuide() {
    return (
        <div>
            <h1 className="guide-heading">User Guide to Hire Dedicated Software Developers</h1>
            <div className="guide-inner-container">
                <div className="para-lists">
                    <p className="guide-para">Benefits of Hiring Developers</p>
                    <p className="active-para guide-para">Key Factors to Consider While Hiring</p>
                    <p className="guide-para">Defining Your Project Requirements</p> 
                    <p className="guide-para">Choosing the Right Development Model</p>  
                    <p className="guide-para">Typical Challenges for Hiring Developers</p>
                    <p className="guide-para">Hiring Freelancers vs. Dedicated Developers</p>  
                    <p className="guide-para">Communication with Remote Developers</p>    
                </div>
                <div>
                    <h1 className="inner-heading">Benefits of Hiring Developers</h1>
                    <p className="inner-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     <div className="inner-container">
                                    <div className="companies-inner">
                                        <img src={GreenMark} width="18px" height="18px" alt="Green Tick"/>
                                        <p className="comapny-para">Client-centric approach</p>
                                    </div>
                                     <div className="companies-inner">
                                        <img src={GreenMark} width="18px" height="18px" alt="Green Tick"/>
                                        <p className="comapny-para">Best-in-class project management</p>
                                    </div>
                                     <div className="companies-inner">
                                        <img src={GreenMark} width="18px" height="18px" alt="Green Tick"/>
                                        <p className="comapny-para">Global quality standards</p>
                                    </div>
                                     <div className="companies-inner">
                                        <img src={GreenMark} width="18px" height="18px" alt="Green Tick"/>
                                        <p className="comapny-para">Time-zone compatibility</p>
                                    </div>
                                     <div className="companies-inner">
                                        <img src={GreenMark} width="18px" height="18px" alt="Green Tick"/>
                                        <p className="comapny-para">Cutting-edge infrastructure</p>
                                    </div>
                                     <div className="companies-inner">
                                        <img src={GreenMark} width="18px" height="18px" alt="Green Tick"/>
                                        <p className="comapny-para">Agile adaptability</p>
                                    </div>
                                </div>
                                <img src={GuideImg} />
                </div>
            </div>
        </div>
    )
}