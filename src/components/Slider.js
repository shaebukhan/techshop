import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';
import img1 from "../assets/images/adampic.png"; // Your local image

const Slider = () => {
    const reviews = [
        {
            image: img1, // Local image
            name: "John Doe",
            date: "12 AUG 2024",
            text: "TechShop exceeded my expectations! Fast delivery. Highly recommended!",
            stars: 5,
        },
        {
            image: "https://picsum.photos/200/250", // Placeholder image
            name: "Jane Smith",
            date: "03 SEP 2024",
            text: "Great prices and top-notch products. TechShop is my go-to for all tech-related needs.",
            stars: 5,
        },
        {
            image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=TechShop", // Placeholder with text
            name: "Michael Johnson",
            date: "28 JUL 2024",
            text: "Superb quality and support. They even helped me set up my new laptop. Will buy again!",
            stars: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200", // Unsplash image
            name: "Emily Davis",
            date: "05 OCT 2024",
            text: "I love TechShop! Their deals are unbeatable, and the product quality is amazing.",
            stars: 4,
        },
        {
            image: "https://picsum.photos/200/300", // Random image
            name: "Chris Wilson",
            date: "15 OCT 2024",
            text: "Quick delivery, affordable pricing, and excellent communication. Can't ask for more.",
            stars: 4,
        },
    ];

    return (
        <div className='p-2 bg-little-dark'>
            <h3 className="common-sm-title text-center my-3 text-uppercase">
                What TechShop customers are saying
            </h3>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                grabCursor={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index} className='p-3'>
                        <div className="testimonial-img">
                            <img src={review.image} alt={`${review.name}'s review`} />
                        </div>
                        <h4 className='text-center'>{review.name}</h4>
                        <p className="card-text">{review.text}</p>
                        <div className="stars-main">
                            {[...Array(review.stars)].map((_, starIndex) => (
                                <FaStar key={starIndex} />
                            ))}
                        </div>
                        <p className='text-center mt-3 card-text'>{review.date}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
