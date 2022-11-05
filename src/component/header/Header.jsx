import React from "react"
import "./Header.css"
import ME from "../../assets/joex.jpg"
import {RiShareForwardLine} from "react-icons/ri"
import {BsThreeDots} from "react-icons/bs"

const Header = () => {

   let none = {
        display: 'none'
    }

    return(
        <header>
            <div className="header__icons">
                <p className="share__desktop" style={none}>Share Link</p>
                <div className="icon icon__1">
                <RiShareForwardLine />
                </div>

                <div className="icon icon__2" >
                <BsThreeDots />
                </div>
            </div>

            <div className="profile__img">
                <img src={ME} alt="Profile Img" className="header__profile-img" id="profile__img" />
            </div>

            <div className="user__name">
                <p className="twitter" id="twitter">@ojtech2000</p>
                <p className="slack" id="slack">Joex</p>
            </div>

        </header>

    )
}

export default Header