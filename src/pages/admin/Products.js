import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";

const Products = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // 1-based index
    const itemsPerPage = 20;

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    // Fetch products data
    const fetchProducts = async (page = 1, keyword = "") => {
        setLoading(true);
        try {
            const endpoint = keyword.trim()
                ? `search/${keyword.trim()}`
                : "get-all";

            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/products/${endpoint}`,
                { params: { page, limit: itemsPerPage } }
            );

            if (data) {
                setProducts(data.results || data.products);
                setTotalPages(data.totalPages || 0);
            } else {
                toast.error("No data received from server.");
            }
        } catch (error) {
            console.error("Error fetching products:", error);

        } finally {
            setLoading(false);
        }
    };

    // Initial load and update on page or search term change
    useEffect(() => {
        fetchProducts(currentPage, searchTerm);
    }, [currentPage, searchTerm]);

    // Handle search submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setCurrentPage(1); // Reset to the first page
        fetchProducts(1, searchTerm.trim());
    };

    // Handle page change
    const handlePageClick = ({ selected }) => setCurrentPage(selected + 1);

    return (
        <div className="wrapper d-flex align-items-stretch">
            {loading && <Loader />}
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div id="content" className="pt-3">
                <button type="button" id="openSidebar" onClick={toggleSidebar} className="bars-btn">
                    <FaBarsStaggered />
                </button>
                <h2 className="b-clr">All Products</h2>

                {/* Search Section */}
                <div className="search-add-main">
                    <form className="d-flex gap-3" onSubmit={handleSearchSubmit}>
                        <div className="search-main">
                            <input
                                type="text"
                                className="search-inp"
                                placeholder="Search by name, category, price"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="search-icon">
                                <IoSearchOutline />
                            </div>
                        </div>
                        <button className="btn-sm common-nav-right" type="submit">
                            Search
                        </button>
                    </form>
                </div>

                {/* Product Table */}
                <div className="tbl-main">
                    <table className="simple-table">
                        <thead>
                            <tr>
                                <th className="prod-title">Title</th>
                                <th>Category Name</th>
                                <th>SubCategory</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.length > 0 ? (
                                products?.map((product) => (
                                    <tr key={product._id}>
                                        <td>{product.shortDescription}</td>
                                        <td>{product.categoryName}</td>
                                        <td>{product.subcategory}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <img
                                                style={{ height: "100px", width: "100px" }}
                                                src={product.image}
                                                alt=""
                                            />
                                        </td>
                                        <td>
                                            <Link
                                                className="btn btn-primary"
                                                to={`/dashboard/admin/edit-product-details/${product._id}`}
                                            >
                                                Details
                                            </Link>
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
                                            Page {currentPage} of {totalPages}
                                        </span>
                                        <ReactPaginate
                                            previousLabel="Previous"
                                            nextLabel="Next"
                                            onPageChange={handlePageClick}
                                            pageCount={totalPages}
                                            containerClassName="pagination"
                                            activeClassName="active"
                                            forcePage={currentPage - 1} // Adjust for zero-based React-Paginate
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
