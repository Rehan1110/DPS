import Client from "../Components/Client";
import "./Clients.css";
import FirstClient from "../images/firstClient.png"
import SecondClient from "../images/SecondClient.png"
import ThirdClient from "../images/ThirdClient.png"
import FourthClient from "../images/FourthClient.png"



export default function Clients() {
    return (
        <div className="client-main-container">
            <h1 className="client-heading">What Our Clients Have to Say About Us</h1>
            <p className="client-para">Take a look at our simple and straightforward process to hire software</p>
            <div className="client-comp-container">
            <Client img={FirstClient} name="Krish Bruynson" role="Director, Storloft"/>
            <Client img={SecondClient} name="Krish Bruynson" role="Director, Storloft"/>
            <Client img={ThirdClient} name="Krish Bruynson" role="Director, Storloft"/>
            <Client img={FourthClient} name="Krish Bruynson" role="Director, Storloft"/>

        </div></div>
    )
}