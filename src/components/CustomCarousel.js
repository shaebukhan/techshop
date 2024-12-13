import React, { useRef } from 'react';
import { Carousel } from 'antd'; // Import Ant Design Carousel
import Carousel1 from "../assets/images/carousel1.avif";
import Carousel2 from "../assets/images/carousel2.avif";
import Carousel3 from "../assets/images/carousel3.avif";
import Carousel4 from "../assets/images/carousel4.avif";
import Carousel5 from "../assets/images/carousel5.avif";


const CustomCarousel = () => {
    const carouselRef = useRef(null);
    const contentStyle = {
        width: '100%',
        // height: '700px', // Adjust the height as needed
        // objectFit: 'cover',

    };

    return (
        <Carousel autoplay ref={carouselRef} effect="fade" arrows infinite >
            <div>
                <img src={Carousel1} style={contentStyle} alt="Slide 1" />
            </div>
            <div>
                <img src={Carousel2} style={contentStyle} alt="Slide 2" />
            </div>
            <div>
                <img src={Carousel3} style={contentStyle} alt="Slide 3" />
            </div>
            <div>
                <img src={Carousel4} style={contentStyle} alt="Slide 4" />
            </div>
            <div>
                <img src={Carousel5} style={contentStyle} alt="Slide 5" />
            </div>

        </Carousel>
    );
};

export default CustomCarousel;
