import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import SearchInput from "../form/SearchInput";
import { useCart } from "../Context/CartContext";
import DesktopComputers from "./category/DesktopComputers";
import Notebooks from "./category/Notebooks";
import Components from "./category/Components";
import Gaming from "./category/Gaming";
import Cases from "./category/Cases";
import Cooling from "./category/Cooling";
import Moniters from "./category/Moniters";
import Peripherals from "./category/Peripherals";
import Cables from "./category/Cables";
import Network from "./category/Network";


const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const { cart } = useCart();
    const openMenu = () => setIsMenuOpen(true);
    const openCategory = () => setIsCategoryMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);
    const closeCatMenu = () => setIsCategoryMenuOpen(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleMouseEnter = (menu) => setOpenDropdown(menu);
    const handleMouseLeave = () => setOpenDropdown(null);

    // Logout function
    const handleLogout = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/logout`);
            if (res.data.success) {
                Cookies.remove("token");
                Cookies.remove("auth");
                toast.info("Logged out successfully");
                navigate('/login');
            } else {
                toast.error("Logout failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during logout:", error);
            toast.error("An error occurred while logging out. Please try again.");
        }
    };

    // Retrieve auth data
    const authDataString = Cookies.get('auth');
    const auth = authDataString ? JSON.parse(authDataString) : null;

    // Fetch categories
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/categories`);
                if (data?.success) {
                    setCategories(data.categories);
                } else {
                    toast.error(data.data.message);
                }
            } catch (error) {
                console.error(error);
                toast.error('Error fetching products');
            }
        };
        fetchProductData();
    }, []);


    const randomCategories = [
        "Desktop Computers", "Notebooks", "Components", "Gaming", "Cases&Moding", "Cooling", "Moniters", "Peripherals", "Cable&Accessories", "Network Devices", "Specials"
    ];


    // Fetch products on hover for a specific category
    const fetchCategoryProducts = async (category) => {
        if (categoryProducts[category]) return;  // Skip fetch if already loaded

        try {
            setLoading(true);
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/category-products/${category}`, { params: { limit: 10 } });
            if (data?.success) {
                setCategoryProducts((prev) => ({
                    ...prev,
                    [category]: data.relatedProducts,
                }));
            } else {

            }
        } catch (error) {
            console.error(error);
            toast.error('Error fetching products');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={`navbarr ${isMenuOpen ? 'open' : ''}`}>
                <div className="navbar-logo">
                    <Link to="/">
                        <img className="logo" src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className={`navbar-left ${isMenuOpen ? 'active' : ''}`}>
                    <button className="close-btn" onClick={closeMenu}>
                        <IoClose />
                    </button>
                    <SearchInput />
                </div>
                <div className="navbar-right">
                    {!auth?.user ? (
                        <Link className="common-nav-right" to="/login">Login</Link>
                    ) : (
                        <div className="custom-nav-item">
                            <button
                                className="acc-circle border-0"
                                onClick={toggleDropdown}
                                aria-expanded={dropdownOpen}
                            >
                                {auth.user.name[0].toUpperCase()}
                            </button>
                            {dropdownOpen && (
                                <ul className="custom-dropdown-menu">
                                    <li>
                                        <Link
                                            className="custom-dropdown-item"
                                            to={`/dashboard/${auth.user.role === 1 ? "admin" : "user"}`}
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li
                                        className="custom-dropdown-item border-0"
                                        onClick={() => {
                                            handleLogout();
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        Logout
                                    </li>
                                </ul>
                            )}
                        </div>
                    )}
                    <Link className="cart-btn" to="/cart"><FaCartShopping />
                        <div className="cart-number">{cart.length}</div>
                    </Link>
                    <button className="open-nav" onClick={openMenu}>
                        <FaBarsStaggered />
                    </button>
                </div>
            </div>
            <button className="open-category" onClick={openCategory}>
                <FaBarsStaggered />
            </button>
            <div className={`categories ${categoryMenuOpen ? 'cat-open' : ''}`}>
                <button className="close-btn-cat" onClick={closeCatMenu}>
                    <IoClose />
                </button>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    All Categories <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <Link className="nav-link-nhv" to={`/category/${category}`}>{category}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Desktop Computers <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <DesktopComputers />
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    NoteBooks <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <Notebooks />
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Components <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <Components />
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Gaming <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <Gaming />
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Cases & Modding <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <Cases />
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Cooling <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <Cooling />
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Moniters <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <Moniters />
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Peripherals <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <Peripherals />
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Cable & Accessories <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <Cables />
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Network Devices <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <Network />
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
