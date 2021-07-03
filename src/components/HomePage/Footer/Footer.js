import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="my-5">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-3 col-md-6">
                           <div className="footer-title">
                               <h3>Company</h3>
                           </div>
                           <div className="footer-link mt-3">
                               <ul>
                                   <li className=""><a href="#">About Us</a></li>
                                   <li className=""><a href="#">Our History</a></li>
                                   <li className=""><a href="#">Our Services</a></li>
                                   <li className=""><a href="#">Meet Us</a></li>
                                   <li className=""><a href="#">Success History</a></li>
                               </ul>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6"></div>
                       <div className="col-lg-3 col-md-6"></div>
                       <div className="col-lg-3 col-md-6"></div>
                   </div>
               </div>
            </footer>
        </div>
    );
};

export default Footer;