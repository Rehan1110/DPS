import HiringOneImg from "../images/Hiring_One.png"
import RightArrow from "../images/RightArrow.png"
import "./Process.css"
export default function Process() {
    return (
        <div className="process-container">
           <h1 className="process-heading">Our Hiring Process</h1>
           <p className="process-para">Take a look at our simple and straightforward process to hire software developers from ValueCoders.</p>
           <div>
            <div className="process-inner-container">
                <div>
                <div className="process-image-container">
                    <img src={HiringOneImg} alt="Image" width="66px" height="72px"/>
                    <div className="notifications-box">
                    <p className="notifications-para">1</p>
                    </div>
                </div>
                <p className="process-inquiry">INQUIRY</p>
                <p className="process-last">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <img src={RightArrow} width="28px" height="15px" alt="Arrow Image" />
                </div>
                 <div>
                <div className="process-image-container">
                    <img src={HiringOneImg} alt="Image" width="66px" height="72px"/>
                    <div className="notifications-box">
                    <p className="notifications-para">1</p>
                    </div>
                </div>
                <p className="process-inquiry">INQUIRY</p>
                <p className="process-last">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <img src={RightArrow} width="28px" height="15px" alt="Arrow Image" />
                </div>
                 <div>
                <div className="process-image-container">
                    <img src={HiringOneImg} alt="Image" width="66px" height="72px"/>
                    <div className="notifications-box">
                    <p className="notifications-para">1</p>
                    </div>
                </div>
                <p className="process-inquiry">INQUIRY</p>
                <p className="process-last">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <img src={RightArrow} width="28px" height="15px" alt="Arrow Image" />
                </div>
                 <div>
                <div className="process-image-container">
                    <img src={HiringOneImg} alt="Image" width="66px" height="72px"/>
                    <div className="notifications-box">
                    <p className="notifications-para">1</p>
                    </div>
                </div>
                <p className="process-inquiry">INQUIRY</p>
                <p className="process-last">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
           </div>
        </div>
    )
}