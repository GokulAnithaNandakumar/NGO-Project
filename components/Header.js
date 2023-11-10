// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                NGO Name
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/get-involved">
                            Get Involved
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
