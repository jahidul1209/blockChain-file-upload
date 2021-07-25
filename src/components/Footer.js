import React from 'react'
import {Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
             <section id="footer" className = 'mt-5'>
                <div className="container">
    
                <div className="row">
                    <div className="col-lg-4 col-md-12 pic">
                    <Nav.Link >  
                        <Link to="/eternity"><img src="https://i.ibb.co/qW0B4XX/rsz-logo.png" width = '80px' height = 'auto' alt="logo-pn" border="0" classNameName = 'logoImage' /></Link>
                    </Nav.Link>
                    <h3 className="footern">Eternity</h3> 
                    <p className="footern">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.</p>
                    </div>

                    <div className="col-lg-2 col-md-12">
                 
                        <p className="fot">Marketplace</p>
                        <p className="ftd">All NFTs</p>
                        <p className="ftd">Art</p>
                        <p className="ftd">Music</p>
                        <p className="ftd">Virtual Worlds</p>
                        <p className="ftd">Trading Cards</p>
                        <p className="ftd">Collectibles</p>

                    </div>

                    <div className="col-lg-2 col-md-12">
                  
                        <p className="fot">My Account</p>
                        <p className="ftd">My Profile</p>
                        <p className="ftd">My Collections</p>
                        <p className="ftd">My Favorites</p>
                        <p className="ftd">My Account Settings  </p>

                    </div>
                    <div className="col-lg-2 col-md-12">         
                        <p className="fot">Help and Support</p>
                        <p className="ftd">Help Center</p>
                        <p className="ftd">Partners</p>
                        <p className="ftd">Suggestions</p>
                        <p className="ftd">Discord Community</p>

                    </div>

                    <div className="col-lg-2 col-md-12">
                
                        <p className="fot">Social Media</p> 
                        <Link to =  '#' className= 'footericon'><i class="fab fa-facebook-square"></i></Link>
                        <Link to = '#' className= 'footericon'><i class="fab fa-twitter-square"></i></Link>
                        <Link to = '#' className= 'footericon'><i class="fab fa-telegram"></i></Link>
                    </div>
                </div>
                </div>
            </section>
            <section id="Copyright">
                <div className="container">
                    <h6 className="Copyright1">All Right Reserves by CITY IT</h6>
                </div>
           </section>
        </div>
    )
}

export default Footer
