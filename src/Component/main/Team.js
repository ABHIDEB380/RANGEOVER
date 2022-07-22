import "../style/Team.css"
import ProfileCard from "./ProfileCard"
import zidanePic from "../../Assets/zidane.jpg"
import linkedin from "../../Assets/linkedin.png"

export default function Team (){
    console.log("team was clicked")

    return (
        <>
        <div className="team">
            <div className="top-text">
                Without bonding and cordination every Project is a filure. Look at who makes KICKSUP great. 
            </div>
            <div className="team-profiles">
                <ProfileCard image={zidanePic} occupation={'Leadership & Management'} name={"Zindane"} socialHandle={linkedin} />
                <ProfileCard image={zidanePic} occupation={'Leadership & Management'} name={"Zindane"} socialHandle={linkedin} />
                <ProfileCard image={zidanePic} occupation={'Leadership & Management'} name={"Zindane"} socialHandle={linkedin} />
                <ProfileCard image={zidanePic} occupation={'Leadership & Management'} name={"Zindane"} socialHandle={linkedin} />
                <ProfileCard image={zidanePic} occupation={'Leadership & Management'} name={"Zindane"} socialHandle={linkedin} />
            </div>
        </div>
        </>
    )
}