import StarImg from "../images/StarImg.png"
import FirstClient from "../images/FirstClient.png"
import PlayImg from "../images/PlayImg.png"
import "./Client.css"
export default function Client() {
    return(
        <div>   <div className="client-image">
                <img src={FirstClient} width="266px" height="300px" alt="Client Image" className="client-image"/>
                <div className="green-circle">
                    <img src={PlayImg} width="72px" height="72px" alt="Play button" />
                </div>
                </div>
                <div>
                <h1>Krish Bruynson</h1>
                <p>Director, Storloft</p>
                <div>
                    <img src={StarImg} width="14px" height="14px" alt="Start Image" />
                    <img src={StarImg} width="14px" height="14px" alt="Start Image" />
                    <img src={StarImg} width="14px" height="14px" alt="Start Image" />
                    <img src={StarImg} width="14px" height="14px" alt="Start Image" />     
                    <img src={StarImg} width="14px" height="14px" alt="Start Image" />  
                </div>
                </div>
        </div>
    )
}