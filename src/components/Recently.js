import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RecentlyImg from "../assets/images/recently web.jpg";
import { Link } from 'react-router-dom';
import Carousel1 from "../assets/images/carousel1.avif";
import Carousel2 from "../assets/images/carousel2.avif";
import Carousel3 from "../assets/images/carousel3.avif";
import Carousel4 from "../assets/images/carousel4.avif";
import Carousel5 from "../assets/images/carousel5.avif";
// Data for carousel items
const carouselData = [
    { id: 2, imgSrc: Carousel1, text: "Miami Beach" },
    { id: 3, imgSrc: Carousel2, text: "New York City" },
    { id: 4, imgSrc: Carousel3, text: "San Francisco" },
    { id: 5, imgSrc: Carousel4, text: "Chicago" },
    { id: 6, imgSrc: Carousel5, text: "Tokyo" },
];

const Recently = () => {




    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Auto slide
        autoplaySpeed: 3000,

    };
    return (
        <div>
            <h3 className="common-title text-center my-3">
                Top Sold Products
            </h3>
            <div className="py-5">
                <div className="carousel-container">
                    <Slider {...settings}>
                        {carouselData.map((item) => (
                            <div key={item.id}>
                                <div className="web-card">
                                    <img
                                        className="img-fluid"
                                        src={item.imgSrc}
                                        alt={`Carousel ${item.id}`}
                                    />
                                    <p className="card-text">{item.text}</p>
                                    <div className="card-btn-main">
                                        <Link className="card-btn-sub">VIEW MORE</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Recently;


