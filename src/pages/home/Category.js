
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';
import { useCart } from '../../Context/CartContext';
import { Select } from 'antd';

const { Option } = Select;

const Category = () => {
    const { category } = useParams();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // To manage sorted/filtered products
    const [page, setPage] = useState(1); // Pagination state
    const limit = 20; // Products per page
    const [totalPages, setTotalPages] = useState(0);
    const [manufactures, setManufactures] = useState([]);
    const [selectedManufactures, setSelectedManufactures] = useState([]);
    const [sortOption, setSortOption] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_API}/api/v1/products/category-products/${category}`,
                    { params: { page, limit } }
                );
                if (data?.success) {
                    setProducts(data.relatedProducts);
                    setFilteredProducts(data.relatedProducts); // Initialize filtered products
                    setTotalPages(data.totalPages);

                    const uniqueManufactures = Array.from(
                        new Set(data.relatedProducts.map(product => product.manufacture).filter(Boolean))
                    );
                    setManufactures(uniqueManufactures);
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

        fetchProductData();
    }, [category, page]);
    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) setPage(newPage);
    };
    // Function to handle sorting
    const handleSort = (value) => {
        setSortOption(value);
        let sortedProducts = [...products];

        if (value === "price-low-to-high") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (value === "price-high-to-low") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (value === "date-new-to-old") {
            sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (value === "date-old-to-new") {
            sortedProducts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }

        setFilteredProducts(sortedProducts);
    };

    // Filter products by selected manufactures
    const filterByManufactures = (selected) => {
        setSelectedManufactures(selected);
        if (selected.length === 0) {
            setFilteredProducts(products); // Reset to original products
        } else {
            const filtered = products.filter(product =>
                selected.includes(product.manufacture)
            );
            setFilteredProducts(filtered);
        }
    };

    const { cart, setCart } = useCart();

    const handleAddToCart = (product) => {
        const productExists = cart.some((item) => item._id === product._id);

        if (productExists) {
            toast("Product already present in cart");
        } else {
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            toast("Product added to cart");
        }
    };

    return (
        <>
            <Navbar />
            {loading && <Loader />}
            <div className="mt-top"></div>
            <h3 className="category-title">Category {category}</h3>
            <div className="filters-main">
                {/* Filter by Company */}
                <Select
                    className="filters-sub"
                    mode="multiple"
                    placeholder="Select Company"
                    value={selectedManufactures}
                    onChange={filterByManufactures}
                >
                    {manufactures.map((type) => (
                        <Option key={type} value={type}>{type}</Option>
                    ))}
                </Select>

                {/* Sort by Date */}
                <Select
                    className="filters-sub"
                    placeholder="Sort by Date"
                    onChange={handleSort}
                >
                    <Option value="date-new-to-old">New to Old</Option>
                    <Option value="date-old-to-new">Old to New</Option>
                </Select>

                {/* Sort by Price */}
                <Select
                    className="filters-sub"
                    placeholder="Sort by Price"
                    onChange={handleSort}
                >
                    <Option value="price-low-to-high">Low to High</Option>
                    <Option value="price-high-to-low">High to Low</Option>
                </Select>
            </div>

            <div className="dis-products-sub">
                {filteredProducts?.length === 0 ? (
                    <div className="no-products-found">
                        <h3 className="category-title">No products found</h3>
                    </div>
                ) : (
                    filteredProducts.map((product) => (
                        <Link to={`/product-details/${product._id}`} key={product._id} className="prod-card">
                            <img className="img-fluid" src={product.image} alt="product" />
                            <div className="bg-white">
                                <h3 className="card-title">
                                    {product.shortDescription.length > 50
                                        ? `${product.shortDescription.slice(0, 50)}...`
                                        : product.shortDescription}
                                </h3>
                                <p className="card-text">{product.categoryName}</p>
                                <h3 className="card-title m-0">
                                    ${product.price}
                                </h3>
                                <h6 className="text-success mb-0 card-text">
                                    In Stock
                                </h6>
                                <div className="card-btn-main">
                                    <button
                                        type="button"
                                        onClick={() => handleAddToCart(product)}
                                        className="card-btn-sub"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
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
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Category;
