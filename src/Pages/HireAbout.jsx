import FirstImg from "../images/HireAbout_first.png";
import HireAboutSecondImg from "../images/HireAboutSecond.png"
import TickImg from "../images/green-tick.png"
import "./HireAbout.css"
export default function HireAbout() {
    return(
        <div className="hire-about-container">
            <h1 className="heading">Why Hire Developers From Our Name</h1>
            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br></br>The industry's standard dummy text ever since</p>
            <div className="box">
                <div>
                    <img src={FirstImg} alt="About Image" width="450px" />
                </div>
                <div>
                    <h1 className="box-heading">High Quality/Cost Ratio</h1>
                    <div className="tick-box-container">
                    <div className="green-image-container">
                        <img src={TickImg} alt="tcik"  />
                    </div>
                    <div>
                        <p className="box-heading-second">Hire Silicon Valley Calliber At Half The Cost</p>
                        <p className="box-para">Hire the top 1% of 15Million+ Developer From 150+ Countries Who Have Applied To Turing</p>
                    </div>
                    </div>
                    <div className="tick-box-container">
                    <div className="red-image-container">
                        <img src={TickImg} alt="tcik"  />
                    </div>
                    <div>
                        <p className="box-heading-second">100+ Skills Available</p>
                        <p className="box-para">Hire the top 1% of 15Million+ Developer From 150+ Countries Who Have Applied To Turing</p>
                    </div>
                    </div>
                </div>
            </div>
             <div className="box">
                <div>
                    <h1 className="box-heading">Rigorous Vetting</h1>
                    <div className="tick-box-container">
                    <div className="green-image-container">
                        <img src={TickImg} alt="tcik"  />
                    </div>
                    <div>
                        <p className="box-heading-second">5+ Hours of Tests and Interviews</p>
                        <p className="box-para">Hire the top 1% of 15Million+ Developer From 150+ Countries Who Have Applied To Turing</p>
                    </div>
                    </div>
                    <div className="tick-box-container">
                    <div className="red-image-container">
                        <img src={TickImg} alt="tcik"  />
                    </div>
                    <div>
                        <p className="box-heading-second">Seniority tests</p>
                        <p className="box-para">Hire the top 1% of 15Million+ Developer From 150+ Countries Who Have Applied To Turing</p>
                    </div>
                    </div>
                </div>
                 <div>
                    <img src={HireAboutSecondImg} alt="About Image" width="450px" />
                </div>
            </div>
        </div>
    )
}