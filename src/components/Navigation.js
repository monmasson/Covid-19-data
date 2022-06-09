import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import "../Stylesheets/Navigation.css"

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container" >
                    <NavLink className="navbar-brand" to="/News">
                        COVID-19 DATA LATEST NEWS
                    </NavLink>
                    <NavLink className="navbar-brand" to="/TrackUsa">
                       Track USA DATA
                    </NavLink>

                    <NavLink to='/sign-up'>
                                    SUBSCRIBE to our e-newsletter
                                </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <a class="active" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                        </svg> Home</a>
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