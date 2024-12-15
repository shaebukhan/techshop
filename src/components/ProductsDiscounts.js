import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { useCart } from '../Context/CartContext';

const ProductsDiscounts = () => {

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
                    const randomProducts = shuffledProducts.slice(0, 20);

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
                <h1 className="common-title my-3 text-center">Big Sale !!</h1>
                <div className="dis-products-sub">
                    {allProducts.map((product, index) => {

                        return (
                            <Link to={`/product-details/${product._id}`} key={index} className="prod-card">
                                {/* <div className="discount-num">{percentage}%</div> */}
                                <img className='img-fluid' src={product.image} alt={product.shortDescription} />
                                <div className="bg-white">
                                    <h3 className="card-title">
                                        {product.shortDescription
                                            ? product.shortDescription.length > 50
                                                ? `${product.shortDescription.slice(0, 50)}...`
                                                : product.shortDescription
                                            : ""}
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
                        );
                    })}

                </div>

                <div className="my-4 text-center">
                    <Link to={"/products"} className='common-nav-right'> See All</Link>
                </div>


            </div>
        </>
    );
};

export default ProductsDiscounts;
