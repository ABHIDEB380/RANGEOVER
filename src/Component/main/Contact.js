import Card from "./Card";
import "../style/Contact.css"
import linkedin from "../../Assets/linkedin.png"

export default function Contact(){
    return(
        <>
        <div className="contact-main">
            <div className="contact">
                <Card/>
            <div className="social-handle">
                <div>
                Stay In Touch
                </div>
                <div className="handles">
                    <div  className="social-media-icon" >
                        <img src={linkedin} alt="" />
                    </div>
                    <div  className="social-media-icon" >
                        <img src={linkedin} alt="" />
                    </div>
                    <div  className="social-media-icon" >
                        <img src={linkedin} alt="" />
                    </div>
                </div>
            </div>
            </div>
            
        </div>
        </>
    )
}