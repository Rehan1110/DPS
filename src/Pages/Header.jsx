import Logo from "../images/Vector.png"
export default function Header() {
    return (
        <div style={{display:'flex',alignItems:'center'}}>
        <div style={{display:'flex',alignItems:'center',backgroundColor:'#FFFFFF',padding:'0px 10%'}}>
            <div>
            <img src={Logo} />
            </div>
              <p style={{color:"#340E0E",fontWeight:"bold",display:'inline-block'}}>Logoipsum</p>
        </div>
        <ul style={{display:'flex',listStyle:'none',gap:'25px',fontFamily:'poppins',fontSize:'16px',fontWeight:'400'}}>
            <li>Software Team</li>
             <li>Services</li>
              <li>Technologies</li>
               <li>Resources</li>
                <li>Company</li>
        </ul>
         <button style={{fontSize:'16px',fontWeight:'500',fontFamily:'poppins',padding:'14px',border:'2px solid',borderColor:'#2DC67D',marginLeft:'25px',backgroundColor:"#FFFFFF",borderRadius:'3px'}}>Get in Touch</button>
        </div>
    )
}