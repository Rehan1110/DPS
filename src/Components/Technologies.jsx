import "./Technologies.css"
export default function Technologies({img,para,bgColor,bdColor}) {
    return (
        <div className="container-box"> 
            <div style={{backgroundColor:bgColor,padding:'30px', borderBottom: `2px solid ${bdColor}`}}>
                <img src={img} alt="Backend Image" width="48px" height="47px"/>
                <p className="paragraph">{para}</p>
                 <ul className="lists">
                    <li>.NET</li>
                    <li>C/C++</li>
                    <li>DJANGO</li>
                    <li>Firebase</li>
                    <li>GOLANG</li>
                    <li>SYMFONY</li>
                    <li>LARAVEL</li>
                    <li>NODE</li>  
                    <li>PHP</li>  
                    <li>PYTHON</li>    
                     <li>RUBY ON RAILS</li>
                     <li>JAVA</li> 
                 </ul>
            </div>
        </div>
    )
}