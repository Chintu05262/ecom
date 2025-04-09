import React from "react";
import Slider from "react-slick";
import Navbar from "../Navbar/Navbar";
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

import men from '../../assets/men.jpg';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';
import img5 from '../../assets/img5.webp';
import img6 from '../../assets/img6.webp';
import bannerImage from '../../assets/offer_banner.webp';
import blogImg1 from '../../assets/bg_01.progressive.webp';
import blogImg2 from '../../assets/bg_02.progressive.webp'; // Assuming you have a second blog image

const products = [
    { img: img2, label: "Best Seller", name: "Trending Product Name", oldPrice: 499, newPrice: 199 },
    { img: img3, label: "Best Seller", name: "Trending Product Name", oldPrice: 499, newPrice: 199 },
    { img: img4, label: "Best Seller", name: "Trending Product Name", oldPrice: 499, newPrice: 199 },
    { img: img5, label: "Best Seller", name: "Trending Product Name", oldPrice: 499, newPrice: 199 },
    { img: img6, label: "Best Seller", name: "Trending Product Name", oldPrice: 499, newPrice: 199 },
];

const blogs = [
    {
        date: '10 May 2023',
        imgSrc: blogImg1,
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium impedit omnis eaque architecto aperiam cumque similique corrupti nam recusandae excepturi.',
    },
    {
        date: '10 May 2023',
        imgSrc: blogImg2,
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium impedit omnis eaque architecto aperiam cumque similique corrupti nam recusandae excepturi.',
    },
];

const Home = () => {
    const categories = [
        { imgSrc: men, altText: "Men", categoryName: "Men", link: "#" },
        { imgSrc: men, altText: "Men", categoryName: "Men", link: "#" },
        { imgSrc: men, altText: "Men", categoryName: "Men", link: "#" },
        { imgSrc: men, altText: "Men", categoryName: "Men", link: "#" },
    ];

    const sliderSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <>
            <Navbar />
            <Banner />
            <section className="categories_wrapper">
                <div className="container">
                    <div className="categories_wrapper__content">
                        <div className="main_heading">
                            <span>Our Exclusive Collections</span>
                            <h1>Shop By Categories</h1>
                        </div>
                        <div className="global_content">
                            <Slider {...sliderSettings} className="categories_list">
                                {categories.map((category, index) => (
                                    <div className="categories_list__box" key={index}>
                                        <a href={category.link}>
                                            <div className="categories_img">
                                                <img
                                                    src={category.imgSrc}
                                                    className="img-fluid"
                                                    alt={category.altText}
                                                />
                                            </div>
                                            <div className="categories_content">
                                                {category.categoryName}
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trending_wrapper">
                <div className="container">
                    <div className="trending_wrapper__content">
                        <div className="main_heading">
                            <h1>Trending Products</h1>
                            <p>Follow the most popular trends and get exclusive items from Foesta shop.</p>
                        </div>
                        <div className="global_content">
                            <Slider {...sliderSettings} className="trending_slider">
                                {products.map((product, index) => (
                                    <div key={index} className="trending_box">
                                        <div className="trending_img">
                                            <img src={product.img} className="img-fluid" alt={product.name} />
                                            <span>{product.label}</span>
                                        </div>
                                        <div className="trending_content">
                                            <h3>{product.name}</h3>
                                            <p>
                                                <del>₹{product.oldPrice}</del> ₹{product.newPrice}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product_banner">
                <a href="#">
                    <img src={bannerImage} className="img-fluid" alt="Offer Banner" />
                </a>
            </section>
            <section className="blog_wrapper global_wrapper">
                <div className="container">
                    <div className="main_heading">
                        <h1>Our Blogs</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique totam atque fugit voluptate magni.</p>
                        <div className="view-all">
                            <a href="#">View All</a>
                        </div>
                    </div>
                    <div className="global_content">
                        <div className="row">
                            {blogs.map((blog, index) => (
                                <div className="col-lg-6" key={index}>
                                    <div className="blog_box">
                                        <div className="blog_box__img">
                                            <img src={blog.imgSrc} alt={`Blog ${index + 1}`} />
                                        </div>
                                        <div className="blog_content">
                                            <span>{blog.date}</span>
                                            <p>{blog.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
