import React from 'react';
import data from "../data.json";
import { Link } from 'react-router-dom';

import Product1 from "../assets/images/product1.avif";
import Product2 from "../assets/images/product2.avif";
import Product3 from "../assets/images/product3.avif";
import Product4 from "../assets/images/product4.avif";
import Product5 from "../assets/images/product5.avif";
import Product6 from "../assets/images/product6.avif";
import Product7 from "../assets/images/product7.avif";
import Product8 from "../assets/images/product8.avif";
import Product9 from "../assets/images/product9.avif";
import Product10 from "../assets/images/product10.avif";
import Product11 from "../assets/images/product11.avif";
import Product12 from "../assets/images/product12.avif";
import Product13 from "../assets/images/product13.avif";
import Product14 from "../assets/images/product14.avif";
import Product15 from "../assets/images/product15.avif";
import Product16 from "../assets/images/product16.avif";
import Product17 from "../assets/images/product17.avif";
import Product18 from "../assets/images/product18.avif";
import Product19 from "../assets/images/product19.avif";
import Product20 from "../assets/images/product20.avif";
const NewProducts = () => {


    const productImages = [
        Product1, Product2, Product3, Product4, Product5,
        Product6, Product7, Product8, Product9, Product10,
        Product11, Product12, Product13, Product14, Product15,
        Product16, Product17, Product18, Product19, Product20,
    ];

    return (
        <>
            <div className="discounts-main">
                <h1 className="common-title my-3 text-center">New Products</h1>
                <div className="dis-products-sub">

                    {data.map((product, index) => (

                        <div key={index} className="prod-card" >

                            <img className='img-fluid' src={productImages[index]} alt="recently web" />
                            <div className="bg-white">
                                <h3 className="card-title">{product.name}</h3>
                                <p className="card-text">
                                    {product.category}
                                </p>
                                <div className="card-btn-main">
                                    <Link className='card-btn-sub' >Add to cart</Link>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>

                <div className="my-4 text-center">
                    <Link className='common-nav-right'> See All</Link>
                </div>


            </div>
        </>
    );
};

export default NewProducts;