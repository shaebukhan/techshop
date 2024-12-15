import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

// Data for carousel items


const Recently = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchproductsData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/get-products`);
                if (data?.success) {
                    // Shuffle the array to randomize it
                    const shuffledProducts = data.products.sort(() => Math.random() - 0.5);

                    // Get only the first 20 products from the shuffled array
                    const randomProducts = shuffledProducts.slice(0, 10);

                    // Sort by date if needed (optional, remove if you want them in random order)
                    const sortedProducts = randomProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                    setAllProducts(sortedProducts);
                } else {
                    toast.error(data.message);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchproductsData();
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Auto slide
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // screens <= 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // screens <= 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // screens <= 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }]

    };
    return (
        <div>
            <h3 className="common-title text-center my-3">
                Top Sold Products
            </h3>
            <div className="py-5">
                <div className="carousel-container">
                    <Slider {...settings}>
                        {allProducts.map((item) => (
                            <div key={item._id}>
                                <div className="web-card">
                                    <div className="d-flex justify-content-center">

                                        <img
                                            className="img-fluid p-2"
                                            src={item.image}
                                            alt={`${item.shortDescription}`}
                                        />
                                    </div>

                                    <h3 className="card-title">
                                        {item.categoryName}
                                    </h3>
                                    <h3 className="card-title">
                                        ${item.price}
                                    </h3>
                                    <h6 className="text-success mb-0 card-text">
                                        In Stock
                                    </h6>
                                    <div className="card-btn-main">
                                        <Link to={`product-details/${item._id}`} className="card-btn-sub">VIEW MORE</Link>
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


