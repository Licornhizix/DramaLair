import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navigation.css"


function Navigation() {

    return (
        
        <div className="navbar">
            
            <div className="nav-links">
                <NavLink exact to
                    ="/" activeClassName="active"
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/Lair" activeClassName="active"
                >
                    Lair
                </NavLink>
                <NavLink
                    to="/LoginPage" activeClassName="active"
                >
                    Login
                </NavLink>
            </div>
        </div>
    )
}

export default Navigation;