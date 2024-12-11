import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';
import { useCart } from '../../Context/CartContext';

const AllProducts = () => {
    const { category } = useParams();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1); // Pagination state
    const limit = 20; // Products per page
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchAllProductData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_API}/api/v1/products/get-all`,
                    { params: { page, limit } }
                );
                if (data?.success) {
                    setProducts(data.products);
                    setTotalPages(data.totalPages);
                } else {
                    toast.error('Failed to fetch products');
                }
            } catch (error) {
                console.error(error);
                toast.error('Error fetching products');
            } finally {
                setLoading(false);
            }
        };

        fetchAllProductData();
    }, [category, page]);

    // Function to handle page change
    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) setPage(newPage);
    };

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
            <Navbar />
            {loading && <Loader />}
            <div className="mt-top"></div>
            <h3 className="category-title">All Products</h3>
            <div className="dis-products-sub">
                {products.map((product) => (
                    <Link to={`/product-details/${product._id}`} key={product._id} className="prod-card">
                        <img className="img-fluid" src={product.image} alt="product" />
                        <div className="bg-white">
                            <h3 className="card-title">
                                {product.shortDescription.length > 50
                                    ? `${product.shortDescription.slice(0, 50)}...`
                                    : product.shortDescription}
                            </h3>
                            <p className="card-text">{product.categoryName}</p>
                            <div className="card-btn-main">
                                <button type='button' onClick={() => handleAddToCart(product)} className='card-btn-sub'>Add to cart</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="pagination-btn"
                >
                    Previous
                </button>
                <span className="page-info-category">Page {page} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    className="pagination-btn"
                    disabled={page === totalPages} // Disable Next if on last page
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default AllProducts;
