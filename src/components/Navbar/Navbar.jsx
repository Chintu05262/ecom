import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <nav>
                {/* Top Navigation Bar */}
                <div className="topNav">
                    <div className="nav-text">
                        <p>
                            <svg
                                className="group-hover:animate-spin group-hover:fill-color_link_hover fill-slate-500 ml-1"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z"></path>
                            </svg>
                            Welcome to our <b>store</b>
                            <svg
                                className="group-hover:animate-spin group-hover:fill-color_link_hover fill-slate-500 ml-1"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z"></path>
                            </svg>
                        </p>
                    </div>
                </div>

                {/* Main Navigation Bar */}
                <div className="myNav">
                    <div className="container">
                        <div className="myNav_content">
                            {/* Logo Section */}
                            <div className="logo">
                                <Link to="/">foesta.</Link>
                            </div>

                            {/* Menu Section */}
                            <div className="menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="#">Categories</Link></li>
                                    <li><Link to="#">Blog</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>

                            {/* Header Icons */}
                            <div className="header_icon">
                                <div className="search">
                                    <i className='bx bx-search'></i>
                                </div>
                                <div className="whishlist">
                                    <i className='bx bx-heart'></i>
                                    <span>0</span>
                                </div>
                                <div className="cart">
                                    <i className='bx bxs-shopping-bag'></i>
                                    <span>1</span>
                                </div>
                            </div>

                            {/* Search Input */}
                            <div className="search_input">
                                <input type="text" placeholder="Search products here..." />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
