import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Details.css';
import Footer from '../Footer/Footer';
import '../../components/Home/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';
import img5 from '../../assets/img5.webp';
import img6 from '../../assets/img6.webp';

const Details = () => {
    const imageList = [
        { src: img2, href: img2 },
        { src: img3, href: img3 },
        { src: img4, href: img4 },
        { src: img5, href: img5 },
        { src: img6, href: img6 },
    ];

    return (
        <>
            <Navbar />
            <section className="product_banner global_banner">
                <div className="container">
                    <div className="global_banner__content">
                        <h1>Black & White Printed A-Line Top</h1>
                        <div className="myBreadcrumb">
                            <a href="/">Home</a>
                            <span>/</span>
                            <a href="/products">Products</a>
                            <span>/</span>
                            <p>Black & White Printed A-Line Top</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="details_wrapper global_wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product_details__left">
                                {imageList.map((image, index) => (
                                    <div className="image" key={index}>
                                        <div className="img-wrapper">
                                            <a href={image.href}>
                                                <img src={image.src} className="img-responsive" alt={`Product ${index + 1}`} loading="lazy" />
                                            </a>
                                            <div className="img-overlay">
                                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="details_wrapper__right">
                                <div className="details_box">
                                    <h3>Black & White Printed A-Line Top</h3>
                                    <div className="product_price">
                                        <p><del>₹499</del> ₹199</p>
                                    </div>
                                    <div className="stock">
                                        <p>Item in stock</p>
                                    </div>
                                    <div className="select_details">
                                        <h3>Size</h3>
                                        <label>Small</label>
                                        <label>Medium</label>
                                        <label>Large</label>
                                    </div>
                                    <div className="select_details">
                                        <h3>Color</h3>
                                        <label>Black</label>
                                        <label>White</label>
                                        <label>Blue</label>
                                    </div>
                                    <div className="select_details">
                                        <h3>Quantity</h3>
                                        <div className="quantity_box">
                                            <p>-</p>
                                            <input type="text" placeholder="1" />
                                            <p>+</p>
                                        </div>
                                    </div>

                                    <div className="shipping--details">
                                        <p><img src="/assets/images/free-delivery.png" className="img-fluid" alt="" />Free shipping on all orders over ₹199</p>
                                        <p><img src="/assets/images/shopping-carts.png" className="img-fluid" alt="" />Sold and shipped by Decor.shop</p>
                                        <p><img src="/assets/images/return-box.png" className="img-fluid" alt="" />Free 30-Day returns</p>
                                    </div>

                                    <div className="product_info">
                                        <h6>Description</h6>
                                        <p>This men's backpack has a glam look, thanks to a faux-leather build with an allover fur print. The front zip pocket keeps small things within reach, while an interior divider reins in potential chaos.</p>
                                        <h6>Shipping and Returns</h6>
                                        <p>Most items sold & shipped by Decor can be returned for free, either to a store or by mail. Decor handles the delivery, returns, and customer service for these items. Items purchased in store or items picked up or delivered from a store can only be returned to a store.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Details;
