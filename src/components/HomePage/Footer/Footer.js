import React from 'react';
import './Footer.css';


//<i class="fas fa-greater-than"></i>
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-3 col-md-4 my-2">
                            <div className="footer-title">
                                <h3 className="text-white fs-5 text-uppercase">Company</h3>
                            </div>
                            <div className="footer-link mt-3">
                                <ul>
                                    <li className=""><a href="#" className="link"><span className="mx-4">About Us</span></a></li>
                                    <li className=""><a href="#" className="link"><span className="mx-4">Our History</span></a></li>
                                    <li className=""><a href="#" className="link"><span className="mx-4">Our Services</span></a></li>
                                    <li className=""><a href="#" className="link"><span className="mx-4">Meet Us</span></a></li>
                                    <li className=""><a href="#" className="link"><span className="mx-4">Success History</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 my-2">
                            <div className="footer-title">
                                <h3 className="text-white fs-5 text-uppercase">Quick Link</h3>
                            </div>
                            <div className="footer-link mt-3">
                                <ul>
                                    <li className=""><a href="#" className="link"><span className="mx-4">Become a Member?</span></a></li>
                                    <li className=""><a href="#" className="link"><span className="mx-4">Contact With Us</span></a></li>
                                    <li className=""><a href="#" className="link"><span className="mx-4">Rules & Regulations</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 my-2">
                            <div className="footer-title">
                                <h3 className="text-white fs-5 text-uppercase">Contact Us</h3>
                            </div>
                            <div className="footer-link mt-3">
                                <ul>
                                    <li className=""><a href="#" className="link"><span className="mx-4">26 Simpson Avenue
                                        Harrisburg, USA</span></a></li>
                                    <li className=""><a href="#" className="link"><span className="mx-4">support@gmail.com</span></a></li>
                                    <li className=""><a href="#" className="link"><span className="mx-4">+012 (3456) 7788</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;