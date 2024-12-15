import React, { useEffect, useState } from 'react';
import data from "../data.json";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from './Loader';
import { useCart } from '../Context/CartContext';

const NewProducts = () => {


    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchNewproductsData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/get-products`);
                if (data?.success) {
                    // Sort products by date in descending order (latest first) and get only the first 100
                    const sortedProducts = data.products
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .slice(0, 100);

                    // Shuffle the array to randomize it
                    const shuffledProducts = sortedProducts.sort(() => Math.random() - 0.5);

                    // Get only the first 20 products from the shuffled array
                    const randomProducts = shuffledProducts.slice(0, 20);

                    setAllProducts(randomProducts);
                } else {
                    toast.error(data.message);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNewproductsData();
    }, []);

    const { cart, setCart } = useCart();
    const handleAddToCart = (product) => {
        // Check if the product already exists in the cart
        const productExists = cart.some((item) => item._id === product._id);

        if (productExists) {
            toast("Product already present in cart");
        } else {
            // Add the product to the cart
            const updatedCart = [...cart, { ...product, quantity: 1 }]; // Set initial quantity to 1 for new product
            setCart(updatedCart); // Update the cart state
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save the updated cart to localStorage
            toast("Product added to cart");
        }
    };
    return (
        <>
            {loading && <Loader />}
            <div className="discounts-main">
                <h1 className="common-title my-3 text-center">New Products</h1>
                <div className="dis-products-sub">

                    {allProducts.map((product, index) => (

                        <Link to={`/product-details/${product._id}`} key={index} className="prod-card" >

                            <img className='img-fluid' src={product.image} alt={product.shortDescription} />
                            <div className="bg-white">
                                <h3 className="card-title">
                                    {product.shortDescription.length > 50
                                        ? `${product.shortDescription.slice(0, 50)}...`
                                        : product.shortDescription}
                                </h3>
                                <p className="card-text">
                                    {product.categoryName}
                                </p>
                                <h3 className="card-title m-0">
                                    ${product.price}
                                </h3>
                                <h6 className="text-success mb-0 card-text">
                                    In Stock
                                </h6>
                                <div className="card-btn-main">
                                    <button type='button' onClick={() => handleAddToCart(product)} className='card-btn-sub'>Add to cart</button>
                                </div>
                            </div>
                        </Link>


                    ))}
                </div>

                <div className="my-4 text-center">
                    <Link to={"/products"} className='common-nav-right'> See All</Link>
                </div>


            </div>
        </>
    );
};

export default NewProducts;