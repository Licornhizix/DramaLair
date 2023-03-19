import React from "react";
import LogoHeader from '../LogoHeader';
import Navigation from '../Navigation';
import "../../styles/header.css"


function Header() {

    return (
        <>
        <div className="header-main">
            <LogoHeader/>
            <Navigation/>
        </div>
        <div className="header-extend">
        </div>
        </>
    )
}

export default Header;