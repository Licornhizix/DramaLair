import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navigation.css"


function Navigation() {

    return (
        
        <div className="navbar">
            
            <div className="nav-links">
                <NavLink
                    to="/"
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/gate"
                >
                    Gate
                </NavLink>
                <NavLink
                    to="/login"
                >
                    Login
                </NavLink>
            </div>
        </div>
    )
}

export default Navigation;