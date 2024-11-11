import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import Adam from "../assets/images/adampic.png";
import { FaStar } from 'react-icons/fa6';

const Slider = () => {

    const totalStars = 5; // Number of stars to display
    const starsArray = Array(totalStars).fill(0);

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
                    disableOnInteraction: true, // Continue autoplay after user interaction
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
                <SwiperSlide className='p-3'>
                    <div className="testimonial-img">
                        <img src={Adam} alt="testimonial" />
                    </div>
                    <h4 className='text-center'>Adam Dow</h4>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore temporibus placeat iste laudantium quisquam.
                        Magni dolore temporibus placeat iste laudantium quisquam.
                    </p>
                    <div className="stars-main">
                        {starsArray.map((_, index) => (
                            <FaStar key={index} />
                        ))}
                    </div>
                    <p className='text-center mt-3 card-text'>15 OCT 2024 </p>
                </SwiperSlide>

                <SwiperSlide className='p-3'>
                    <div className="testimonial-img">
                        <img src={Adam} alt="testimonial" />
                    </div>
                    <h4 className='text-center'>Adam Dow</h4>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore temporibus placeat iste laudantium quisquam.
                        Magni dolore temporibus placeat iste laudantium quisquam.
                    </p>
                    <div className="stars-main">
                        {starsArray.map((_, index) => (
                            <FaStar key={index} />
                        ))}
                    </div>
                    <p className='text-center mt-3 card-text'>15 OCT 2024 </p>
                </SwiperSlide><SwiperSlide className='p-3'>
                    <div className="testimonial-img">
                        <img src={Adam} alt="testimonial" />
                    </div>
                    <h4 className='text-center'>Adam Dow</h4>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore temporibus placeat iste laudantium quisquam.
                        Magni dolore temporibus placeat iste laudantium quisquam.
                    </p>
                    <div className="stars-main">
                        {starsArray.map((_, index) => (
                            <FaStar key={index} />
                        ))}
                    </div>
                    <p className='text-center mt-3 card-text'>15 OCT 2024 </p>
                </SwiperSlide><SwiperSlide className='p-3'>
                    <div className="testimonial-img">
                        <img src={Adam} alt="testimonial" />
                    </div>
                    <h4 className='text-center'>Adam Dow</h4>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore temporibus placeat iste laudantium quisquam.
                        Magni dolore temporibus placeat iste laudantium quisquam.
                    </p>
                    <div className="stars-main">
                        {starsArray.map((_, index) => (
                            <FaStar key={index} />
                        ))}
                    </div>
                    <p className='text-center mt-3 card-text'>15 OCT 2024 </p>
                </SwiperSlide><SwiperSlide className='p-3'>
                    <div className="testimonial-img">
                        <img src={Adam} alt="testimonial" />
                    </div>
                    <h4 className='text-center'>Adam Dow</h4>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore temporibus placeat iste laudantium quisquam.
                        Magni dolore temporibus placeat iste laudantium quisquam.
                    </p>
                    <div className="stars-main">
                        {starsArray.map((_, index) => (
                            <FaStar key={index} />
                        ))}
                    </div>
                    <p className='text-center mt-3 card-text'>15 OCT 2024 </p>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;
