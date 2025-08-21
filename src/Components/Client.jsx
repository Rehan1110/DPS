import StarImg from "../images/StarImg.png"
import FirstClient from "../images/firstClient.png"
import PlayImg from "../images/PlayImg.png"
import "./Client.css"
export default function Client({img, name, role}) {
    return(
        <div className="client-container">   
            <div className="client-image">
                <img src={img} width="250px" height="280px" alt="Client Image" className="client-image"/>
                <div className="green-circle">
                    <img src={PlayImg} width="72px" height="72px" alt="Play button" />
                </div>
                </div>
                <div>
                <h1 className="client-name">{name}</h1>
                <p className="client-role">{role}</p>
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