import React from 'react';
import Brand1 from "../assets/images/brand1.avif";
import Brand2 from "../assets/images/brand2.avif";
import Brand3 from "../assets/images/brand3.avif";
import Brand4 from "../assets/images/brand4.avif";
import Brand5 from "../assets/images/brand5.avif";
import Brand6 from "../assets/images/brand6.avif";
import Brand7 from "../assets/images/brand7.avif";
import Brand8 from "../assets/images/brand8.avif";
import Brand9 from "../assets/images/brand9.avif";
import { Link } from 'react-router-dom';
const Brands = () => {

    const BrandImages = [
        Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9
    ];

    return (
        <>
            <div className="p-3">

                <h1 className="common-title text-center my-3">Famous   Companies</h1>

                <marquee behavior="" direction="left">
                    {BrandImages.map((brand, index) => (
                        <img key={index} className='brand-img' src={BrandImages[index]} />
                    ))}
                </marquee>

            </div>
        </>
    );
};

export default Brands;