import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader';
import { useSearch } from '../../Context/SearchContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useSearch();
    const [page, setPage] = useState(1); // Pagination state
    const limit = 20; // Products per page

    // Fetch data only when the component mounts or page changes, not on every keyword update
    useEffect(() => {
        if (!values.keyword) return; // Ensure there's a keyword to search for
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/search/${values.keyword}`, {
                    params: { page, limit }
                });
                setValues({ ...values, results: data.results, totalPages: data.totalPages });
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page, setValues]); // Only trigger on page change, not on keyword change

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= values.totalPages) setPage(newPage);
    };

    return (
        <>
            <Navbar />
            {loading && <Loader />}
            <div className="mt-top">
                <h3 className='search-title'>
                    {values?.results?.length < 1 ? "No Products Found" : ` Results Found for ${values.keyword}`}
                </h3>
            </div>
            <div className="dis-products-sub">
                {values?.results?.map((product) => (
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
                                <button className="card-btn-sub">Add to cart</button>
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
                <span className="page-info-category">Page {page} of {values.totalPages}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    className="pagination-btn"
                    disabled={page === values.totalPages}
                >
                    Next
                </button>
            </div>

        </>
    );
};

export default Search;
