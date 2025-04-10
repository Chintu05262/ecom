import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer_wrapper global_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3">
                                <div className="footer_left">
                                    <div className="logo">
                                        <Link to="/">foesta.</Link>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fuga deleniti atque quisquam voluptatum tenetur aut.</p>
                                    <div className="social_link">
                                        <a href="#"><i className='bx bxl-facebook'></i></a>
                                        <a href="#"><i className='bx bxl-instagram'></i></a>
                                        <a href="#"><i className='bx bxl-youtube'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-6">
                                <div className="footer_box">
                                    <h3>Quick Links</h3>
                                    <div className="footer_links">
                                        <Link to="/about">About Us</Link>
                                        <Link to="#">Blogs</Link>
                                        <Link to="/products">Our Products</Link>

                                        <Link to="/Contact">Contact</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-6">
                                <div className="footer_box">
                                    <h3>Legal Pages</h3>
                                    <div className="footer_links">
                                        <a href="#">Terms & Conditions</a>
                                        <a href="#">Privacy Policy</a>
                                        <a href="#">Returns/Exchange Policy</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4">
                                <div className="footer_box">
                                    <h3>Contact</h3>
                                    <div className="footer_links">
                                        <a href="#"><i className='bx bxs-phone-call'></i> +91 9876543210</a>
                                        <a href="#" className="text-lowercase"><i className='bx bxs-envelope'></i> info@viva.com</a>
                                        <a href="#"><i className='bx bxs-map'></i> Vishal Mega Mart, Najafgarh, 110043</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>© Copyright 2023 - 2024 | VR Digital</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer