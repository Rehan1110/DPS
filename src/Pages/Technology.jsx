import Technologies from "../Components/Technologies";
import "./Technology.css"
import BackendImg from "../images/BackendDevelopment_Img.png";
import WebDevImg from "../images/webdev.png";
import AppDevImg from "../images/appdev.png";
import BlockchainImg from "../images/blockchain.png";
import DevOpsImg from "../images/DevOps.png";
import EcomImg from "../images/Ecom.png";
export default function() {
    return(
        <div className="Technology-outer-container">
            <h1>Our Diverse Technology Competency</h1>
            <p style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
        <div className="technology-container"> 
            <Technologies img={BackendImg} para="Backend Development" bgColor="#F3F5FF" bdColor="#B0BDFF" />
            <Technologies img={WebDevImg} para="Frontend Development" bgColor="#FFF3E6" bdColor="#FFC093"/>
            <Technologies img={AppDevImg} para="Mobile Development" bgColor="#FBEEFD" bdColor="#F6BCFF"/>
            <Technologies img={BlockchainImg} para="Blockchain, Ai/ML" bgColor="##EFFDFF" bdColor="#9FF3FF"/>
            <Technologies img={DevOpsImg} para="DevOps & Low-Code" bgColor="##FBFFF1" bdColor="#FFDAA2"/>
            <Technologies img={EcomImg} para="E-commerce & CMS" bgColor="#FFBCBC42" bdColor="#FFBCBC"/>
        </div>
        </div>
    )
}