import "../style/ProfileCard.css"
import christianoPic from "../../Assets/christiano.jpg"
export default function ProfileCard(props){
    return(
        <>
        <div className="profile-card">
            <img src={props.image} alt="" />
            <div className='profile-name'>{props.name}</div>
            <div className='profile-occupation'>{props.occupation}</div>
            <div className='profile-handle'>
                <img style={{width:'20px'}} src={props.socialHandle} alt="" />
            </div>
        </div>
        </>
    )
}