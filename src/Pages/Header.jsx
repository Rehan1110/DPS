import Logo from "../images/Vector.png";
import "./Header.css";
import DownArrowImg from "../images/DownArrow.png"
import ArrowImg from "../images/Arrow.png"
export default function Header() {
    return (
        <div className="header-container">
        <div className="header-logo-container">
            <div>
            <img src={Logo} />
            </div>
              <h1 className="logo-name">Logoipsum</h1>
        </div>
        <div></div>
        <ul style={{display:'flex',listStyle:'none',gap:'25px',fontFamily:'poppins',fontSize:'16px',fontWeight:'400'}} className="navlist">
            <li>
                Software Team
                <img src={DownArrowImg} alt="arrow" width="12px" height="7px" style={{marginLeft:"5px"}} />
                </li>
             <li>Services</li>
              <li>Technologies</li>
               <li>Resources</li>
                <li>Company</li>
        </ul>
         <button style={{fontSize:'16px',fontWeight:'500',padding:'12px 18px 12px 18px',border:'2px solid',borderColor:'#2DC67D',marginLeft:'25px',backgroundColor:"#FFFFFF",borderRadius:'3px',cursor:'pointer'}} className="header-button">
            Get in Touch
            <img  src={ArrowImg} alt="Arrow Image" width="14px" height="14px" style={{marginLeft:"8px"}}/>
            </button>
        </div>
    )
}