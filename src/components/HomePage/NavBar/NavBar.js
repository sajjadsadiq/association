import React from 'react';
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faBars ,faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);
    
    return (
        <>
            {/* <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#">Shadhona Shomiti</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-outline-success" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </nav> */}

            <header>
                <div className="header-container">
                    <nav>
                        <h1 className="brand"><a href="#" style={{ color: "blue" }}>SA<span>DH</span>ONA Somiti</a></h1>
                        <FontAwesomeIcon icon={faCode} />
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Dashboard</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><button type="button" className="btn btn-danger"><span style={{ fontWeight: "bold", fontSize: "17px" }}>Login</span></button></li>
                        </ul>
                    </nav>
                </div>
            </header>




        </>
    );
};

export default NavBar;