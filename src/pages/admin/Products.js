import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoSearchOutline } from "react-icons/io5";
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';

const Products = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 20;
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    // Fetch product data
    useEffect(() => {
        const fetchproductsData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/get-products`);
                if (data?.success) {
                    const sortedProducts = data.products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    setAllProducts(sortedProducts);
                    setFilteredProducts(sortedProducts);
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

    // Handle Search
    useEffect(() => {
        const searchQuery = searchTerm.trim().toLowerCase();
        const filtered = searchQuery
            ? allProducts.filter(product => {
                const shortDescription = `${product.shortDescription} ${product.shortDescription}`.toLowerCase();
                const categoryName = product.categoryName?.toLowerCase() || '';
                const subcategory = product.subcategory?.toLowerCase() || '';
                const productDate = new Date(product.createdAt).toLocaleString().toLowerCase();
                const dbp = product.dbp.toString();

                return (
                    shortDescription.includes(searchQuery) ||
                    categoryName.includes(searchQuery) ||
                    subcategory.includes(searchQuery) ||
                    productDate.includes(searchQuery) ||
                    dbp.includes(searchQuery)
                );
            })
            : allProducts;

        setFilteredProducts(filtered);
        setCurrentPage(0); // Reset to the first page on new search
    }, [searchTerm, allProducts]);

    const handlePageClick = ({ selected }) => setCurrentPage(selected);

    const startIndex = currentPage * itemsPerPage;
    const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="wrapper d-flex align-items-stretch">
            {loading && <Loader />}
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div id="content" className=" pt-3">
                <button type="button" id="openSidebar" onClick={toggleSidebar} className="bars-btn">
                    <FaBarsStaggered />
                </button>
                <h2 className="b-clr">
                    All Products
                </h2>
                <div className="search-add-main">
                    <div className="search-main">
                        <input
                            type="text"
                            className="search-inp"
                            placeholder="Search by name, category , price"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="search-icon">
                            <IoSearchOutline />
                        </div>
                    </div>
                </div>

                <div className="tbl-main">
                    <table className="simple-table">
                        <thead>
                            <tr>
                                <th className='prod-title'>Title</th>
                                <th>CategoryName</th>
                                <th>SubCategory</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.length > 0 ? (
                                currentItems.map(product => (
                                    <tr key={product._id}>
                                        <td>{product.shortDescription}</td>
                                        <td>{product.categoryName}</td>
                                        <td>{product.subcategory}</td>
                                        <td>{product.dbp}</td>
                                        <td><img style={{ height: "100px", width: "100px" }} src={product.image} alt="" /></td>
                                        <td>
                                            <Link className='btn btn-primary' to={`/dashboard/admin/edit-product-details/${product._id}`}>Details</Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No Products Found</td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr className="table-footer">
                                <td colSpan="6">
                                    <div className="pagination-container">
                                        <span className="page-info">
                                            Page {currentPage + 1} of {Math.ceil(filteredProducts.length / itemsPerPage)}
                                        </span>
                                        <ReactPaginate
                                            previousLabel="Previous"
                                            nextLabel="Next"
                                            onPageChange={handlePageClick}
                                            pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
                                            containerClassName="pagination"
                                            activeClassName="active"
                                            forcePage={currentPage}
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Products;
