import CompaniesImg from "../images/Companies.png";
import GreenMark from "../images/green-mark.png"
import "./Companies.css"
export default function Companies() {
    return (
        <div className="companies-container">
           <div>
            <img src={CompaniesImg} width="520px" height="520px" />
           </div>
           <div>
            <h1 className="companies-heading">Top Companies Trust ValueCoders For Hiring Software Developers</h1>
            <p className="companies-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
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
           </div>
        </div>
    )
}