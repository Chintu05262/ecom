import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';

const products = [
    { id: 1, imgSrc: '/src/assets/img2.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
    { id: 2, imgSrc: '/src/assets/img3.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
    { id: 3, imgSrc: '/src/assets/img4.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
    { id: 4, imgSrc: '/src/assets/img5.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
    { id: 5, imgSrc: '/src/assets/img3.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
    { id: 6, imgSrc: '/src/assets/img2.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
    { id: 7, imgSrc: '/src/assets/img3.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
    { id: 8, imgSrc: '/src/assets/img4.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
    { id: 9, imgSrc: '/src/assets/img5.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
    { id: 10, imgSrc: '/src/assets/img2.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
    { id: 11, imgSrc: '/src/assets/img3.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
    { id: 12, imgSrc: '/src/assets/img4.webp', title: 'Black & White Printed A-Line Top', originalPrice: 499, salePrice: 199 },
];
const Products = () => {
    return (
        <>
            <Navbar />
            <section className="product_banner global_banner">
                <div className="container">
                    <div className="global_banner__content">
                        <h1>All Products</h1>
                        <div className="myBreadcrumb">
                            <a href="/">Home</a>
                            <span>/</span>
                            <p>All Products</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="filter global_wrapper">
                <div className="container">
                    <div className="filter_content">
                        <div className="filter_btn">
                            <p>
                                <svg
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="2"
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="!h-6 !w-6"
                                >
                                    <g transform="translate(-391 -235)">
                                        <path d="m405.626 274c.445-1.724 2.012-3 3.874-3s3.429 1.276 3.874 3h21.626c.14 0 .278.029.406.086.119.053.228.13.318.224.086.09.155.197.202.312.043.106.068.219.073.333.005.109-.008.219-.039.325-.027.093-.068.182-.121.264-.116.179-.29.318-.49.393-.109.041-.226.062-.343.063h-.006-21.626c-.445 1.724-2.012 3-3.874 3s-3.429-1.276-3.874-3h-10.626c-.117 0-.234-.02-.344-.061-.202-.074-.378-.214-.495-.395-.053-.082-.094-.171-.121-.264-.031-.106-.044-.216-.039-.325.005-.114.03-.227.073-.333.047-.115.116-.222.202-.312.09-.094.199-.171.318-.224.128-.057.266-.086.406-.086zm3.874-1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm12.126-15c.445-1.724 2.012-3 3.874-3s3.429 1.276 3.874 3h5.626c.14 0 .278.029.406.086.119.053.228.13.318.224.086.09.155.197.202.312.043.106.068.219.073.333.005.109-.008.219-.039.325-.027.093-.068.182-.121.264-.116.179-.29.318-.49.393-.109.041-.226.062-.343.063h-.006-5.626c-.445 1.724-2.012 3-3.874 3s-3.429-1.276-3.874-3h-26.626c-.14 0-.278-.029-.406-.086-.119-.053-.228-.13-.318-.224-.086-.09-.155-.197-.202-.312-.043-.106-.068-.219-.073-.333-.005-.109.008-.219.039-.325.027-.093.068-.182.121-.264.117-.181.293-.321.495-.395.11-.041.227-.061.344-.061zm3.874-1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-26.374-15c.445-1.724 2.012-3 3.874-3s3.429 1.276 3.874 3h28.126c.14 0 .278.029.406.086.119.053.228.13.318.224.086.09.155.197.202.312.043.106.068.219.073.333.005.109-.008.219-.039.325-.027.093-.068.182-.121.264-.116.179-.29.318-.49.393-.109.041-.226.062-.343.063h-.006-28.126c-.445 1.724-2.012 3-3.874 3s-3.429-1.276-3.874-3h-4.126c-.117 0-.234-.02-.344-.061-.202-.074-.378-.214-.495-.395-.053-.082-.094-.171-.121-.264-.031-.106-.044-.216-.039-.325.005-.114.03-.227.073-.333.047-.115.116-.222.202-.312.09-.094.199-.171.318-.224.128-.057.266-.086.406-.086zm3.874-1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z" />
                                    </g>
                                </svg>
                                Filter and sort
                            </p>
                        </div>
                        <div className="total-products">
                            <p>20 products</p>
                        </div>
                    </div>
                </div>

                <div className="filter_sidebar">
                    <div className="filter_sidebar__content">
                        <div className="filter_heading">
                            <h6>Filter and sort</h6>
                            <div className="cancel_filter">
                                <i className="bx bx-x"></i>
                            </div>
                        </div>
                        <div className="filter_type">
                            <h6>Availability</h6>
                            <div className="filter_type__input">
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>
                                        in stock <span>(20)</span>
                                    </label>
                                </div>
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>
                                        out of stock <span>(10)</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="filter_type filter_select">
                            <h6>color</h6>
                            <div className="filter_type__input filter_select__flex">
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>red</label>
                                </div>
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>blue</label>
                                </div>
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>black</label>
                                </div>
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>white</label>
                                </div>
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>orange</label>
                                </div>
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>skyblue</label>
                                </div>
                            </div>
                        </div>
                        <div className="filter_type filter_select">
                            <h6>size</h6>
                            <div className="filter_type__input filter_select__flex">
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>S</label>
                                </div>
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>L</label>
                                </div>
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>XL</label>
                                </div>
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>XXL</label>
                                </div>
                                <div className="filter_input">
                                    <input type="checkbox" />
                                    <label>XXXL</label>
                                </div>
                            </div>
                        </div>
                        <div className="filter_type filter_select border-none">
                            <h6>
                                price <span>( highest price ₹1999* )</span>
                            </h6>
                            <div className="price_input">
                                <div className="price_input__box">
                                    <label>from (₹)</label>
                                    <input type="number" />
                                </div>
                                <div className="price_input__box">
                                    <label>to (₹)</label>
                                    <input type="number" />
                                </div>
                            </div>
                        </div>
                        <div className="bottom_btn">
                            <button className="clear_btn">clear</button>
                            <button className="apply_btn">apply</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product_wrapper">
                <div className="container">
                    <div className="row">
                        {products.map((product) => (
                            <div key={product.id} className="col-xl-3 col-lg-4 col-6">
                                <div className="product_box">
                                    <Link to="/details">
                                        <div className="product_box__img">
                                            <img src={product.imgSrc} className="img-fluid" alt={product.title} />
                                            <span>Best Seller</span>
                                            <p>add to cart</p>
                                            <div className="heart">
                                                <div className="blank_heart">
                                                    <i className="bx bx-heart"></i>
                                                </div>
                                                <div className="fill_heart">
                                                    <i className="bx bxs-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product_box__content">
                                            <h3>{product.title}</h3>
                                            <p>
                                                <del>₹{product.originalPrice}</del>₹{product.salePrice}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <a href="#" className="pagination_btn">
                            previous
                        </a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#" className="pagination_btn">
                            Next
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>

    )
}

export default Products