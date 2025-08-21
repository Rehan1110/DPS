import Client from "../Components/Client";
import "./Clients.css";


export default function Clients() {
    return (
        <div>
            <h1 className="client-heading">What Our Clients Have to Say About Us</h1>
            <p className="client-para">Take a look at our simple and straightforward process to hire software</p>
            <div className="client-comp-container">
            <Client/>
            <Client/>
            <Client/>
            <Client/>

        </div></div>
    )
}