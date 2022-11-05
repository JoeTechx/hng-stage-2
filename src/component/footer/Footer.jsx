import React from "react"
import "./Footer.css"
import I4GLogo from "../../assets/I4G-Logo.png"
import ZuriLogo from "../../assets/zurilogo.png"


const Footer = () => {
    
    return(
        <footer className="footer">
            <hr/>
            <div className="footer__content"> 
            <img src= {ZuriLogo}alt="Zuri Logo"  className="zuri__logo"/>
            <p className="footer__title">HNG Internship 9 Frontend Task</p>
            <img src={I4GLogo} alt="I4G Logo" className="i4g__logo"/>
            </div>
        </footer>

    )
}

export default Footer