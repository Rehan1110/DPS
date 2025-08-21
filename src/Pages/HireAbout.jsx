import FirstImg from "../images/HireAbout_First.png";
import TickImg from "../images/green-tick.png"
import "./HireAbout.css"
export default function HireAbout() {
    return(
        <div>
            <h1 className="heading">Why Hire Developers From Our Name</h1>
            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
            <div className="box">
                <div>
                    <img src={FirstImg} alt="About Image" width="472px" />
                </div>
                <div>
                    <h1 className="box-heading">High Quality/Cost Ratio</h1>
                    <div style={{display:'flex'}}>
                    <div className="green-image-container">
                        <img src={TickImg} alt="tcik"  />
                    </div>
                    <div>
                        <p className="box-heading-second">Hire Silicon Valley Calliber At Half The Cost</p>
                        <p className="box-para">Hire the top 1% of 15Million+ Developer From 150+ Countries Who Have Applied To Turing</p>
                    </div>
                    </div>
                    <div style={{display:'flex'}}>
                    <div className="green-image-container">
                        <img src={TickImg} alt="tcik"  />
                    </div>
                    <div>
                        <p className="box-heading-second">Hire Silicon Valley Calliber At Half The Cost</p>
                        <p className="box-para">Hire the top 1% of 15Million+ Developer From 150+ Countries Who Have Applied To Turing</p>
                    </div>
                    </div>
                </div>
            </div>
             <div className="box">
                <div>
                    <h1 className="box-heading">High Quality/Cost Ratio</h1>
                    <div style={{display:'flex'}}>
                    <div className="green-image-container">
                        <img src={TickImg} alt="tcik"  />
                    </div>
                    <div>
                        <p className="box-heading-second">Hire Silicon Valley Calliber At Half The Cost</p>
                        <p className="box-para">Hire the top 1% of 15Million+ Developer From 150+ Countries Who Have Applied To Turing</p>
                    </div>
                    </div>
                    <div style={{display:'flex'}}>
                    <div className="green-image-container">
                        <img src={TickImg} alt="tcik"  />
                    </div>
                    <div>
                        <p className="box-heading-second">Hire Silicon Valley Calliber At Half The Cost</p>
                        <p className="box-para">Hire the top 1% of 15Million+ Developer From 150+ Countries Who Have Applied To Turing</p>
                    </div>
                    </div>
                </div>
                 <div>
                    <img src={FirstImg} alt="About Image" width="472px" />
                </div>
            </div>
        </div>
    )
}