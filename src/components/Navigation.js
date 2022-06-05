import React from "react";
import { NavLink } from "react-router-dom";
import "../Stylesheets/Navigation.css"

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container" >
                    <NavLink className="navbar-brand" to="/News">
                        COVID-19 DATA LATEST NEWS
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Info">
                                    More Information
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;