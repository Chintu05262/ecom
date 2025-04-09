import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';

// import images
import banner1 from '../../assets/bg_01.progressive.webp';
import banner2 from '../../assets/bg_02.progressive.webp';
import Products from '../Products/Products';

const banners = [
    {
        imgSrc: banner1,
        altText: "banner 1",
        heading: "summer style sensations.",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia natus accusantium cumque, ad incidunt quidem sunt iusto quod, perspiciatis ratione illo explicabo vel dolorum doloremque.",
        link: "products.html",
    },
    {
        imgSrc: banner2,
        altText: "banner 2",
        heading: "summer style sensations.",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia natus accusantium cumque, ad incidunt quidem sunt iusto quod, perspiciatis ratione illo explicabo vel dolorum doloremque.",
        link: "products.html",
    },
    {
        imgSrc: banner1,
        altText: "banner 3",
        heading: "summer style sensations.",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia natus accusantium cumque, ad incidunt quidem sunt iusto quod, perspiciatis ratione illo explicabo vel dolorum doloremque.",
        link: "products.html",
    },
];

const BannerWrapper = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="banner_wrapper">
            <Slider {...settings} className="banner_slider">
                {banners.map((banner, index) => (
                    <div className="banner_bg global_section" key={index}>
                        <div className="banner_video__content">
                            <img
                                src={banner.imgSrc}
                                className="img-fluid"
                                alt={banner.altText}
                            />
                        </div>
                        <div className="banner_video__text">
                            <h1>{banner.heading}</h1>
                            <p>{banner.description}</p>
                            <div className="shop-now">
                                <Link to="/products" className="global_btn">
                                    shop now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default BannerWrapper;
