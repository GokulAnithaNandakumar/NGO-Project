// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-white">
            <div className="container">
                <span>&copy; NGO Name {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
};

export default Footer;
