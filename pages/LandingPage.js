// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>NGO Name</h1>
                <p>Empowering the Future: Educating Underprivileged Children</p>
                <Link to="/get-involved" className="btn btn-primary btn-lg">
                    Get Involved
                </Link>
            </div>
            <div className="row">
                {/* Add more sections or content as needed */}
            </div>
        </div>
    );
};

export default LandingPage;
