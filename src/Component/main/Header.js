// import {websiteLogo} from './'
// import * as images from 'Assets'
import '../style/Header.css'
import { Outlet, Link } from "react-router-dom";
export default function Header() {
    return(
    <>
    <div className='main'>
    <ion-icon name="logo-apple"  size="large"></ion-icon>
    <ul className='main-item'>
        {/* <img src='./'/> */}
        <li className="header-item">
        <Link to="/">THE JOURNEY</Link>
        </li>
        <li className="header-item">
        <Link to="team">TEAM</Link>
        </li>
        <li className="header-item">
        <Link to="store">STORE</Link>
        </li>
        <li className="header-item">
        <Link to="contact">CONTACT</Link>
        </li>
    </ul>
        <Outlet/>
    <div className='profile'>Gagan</div>
    </div>

    </>
    )
}