import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm bg-white py-3">
                <div className="container-fluid">
                    <Link className="navbar-brand text-uppercase" to="/">
                        Publicis Sapient
                    </Link >
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active text-uppercase custom-nav-link"
                                    aria-current="page"
                                    to="/"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase custom-nav-link" to="#">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase custom-nav-link" to="#">
                                    FAQ
                                </Link>
                            </li>
                        </ul>

                        <div className="buttons">
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;