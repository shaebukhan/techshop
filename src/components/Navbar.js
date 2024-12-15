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
import Components from "./category/Components";
import Gaming from "./category/Gaming";
import Peripherals from "./category/Peripherals";
import Cables from "./category/Cables";
import { FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [subCategories, setSubCategories] = useState({});
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
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/categories`);
                if (data?.success) {
                    setCategories(data.categories);
                } else {
                    toast.error(data.data.message);
                }
            } catch (error) {
                console.error(error);

            }
        };
        fetchCategories();
    }, []);

    const fetchSubCategories = async (category) => {
        setLoading(true);
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/products/subcategories/${category}`,
                { params: { limit: 20 } }
            );
            setSubCategories(data?.success ? data.subCategories : []);
        } catch (error) {
            console.error(`Error fetching subcategories for ${category}:`, error);
        } finally {
            setLoading(false);
        }
    };


    const randomCategories = [
        { label: "Desktop Computers", value: "Desktop Computers", search: "Desktop Computers" },
        { label: "Notebooks", value: "notebooks", search: "Notebooks" },
        // { label: "Components", value: "components", search: "" },
        // { label: "Gaming", value: "gaming", search: "" },
        { label: "Cases & Moding", value: "cases_moding", search: "Cases & Accessories" },
        { label: "Cooling", value: "cooling", search: "Fan & Cooling Products" },
        { label: "Monitors", value: "monitors", search: "Monitors" },
        // { label: "Peripherals", value: "peripherals", search: "" },
        { label: "Cable & Accessories", value: "cable_accessories", search: "Notebook Accessories" },
        { label: "Network Devices", value: "network_devices", search: "Network - Consumer" },

    ];


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
                    onMouseEnter={() => handleMouseEnter('allcategories')}
                    onMouseLeave={handleMouseLeave}
                >
                    All Categories <IoIosArrowDown />
                    {openDropdown === 'allcategories' && (
                        <ul className="dropdown-menu-c">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <Link className="nav-link-nhv" to={`/category/${category}`}>{category}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {randomCategories.map((category) => (
                    <Link to={`/category/${category.search}`}
                        key={category.value}
                        className="nav-link-nhv dropdown-main"
                        onMouseEnter={() => {
                            handleMouseEnter(category.value);
                            fetchSubCategories(category.search);
                        }}
                        onMouseLeave={handleMouseLeave}
                    >
                        {category.label} <IoIosArrowDown />
                        {openDropdown === category.value && (
                            <ul className="dropdown-menu-c">
                                {loading ? (
                                    <li>Loading...</li>
                                ) : subCategories.length > 0 ? (
                                    subCategories.map((subCategory, index) => (
                                        <Link to={`/subcategory/${subCategory}`} key={index} className="notebook-link">
                                            <div className="notebook-icon"><FaLongArrowAltRight /></div>
                                            <div className="sub-cat">{subCategory}</div>
                                        </Link>
                                    ))
                                ) : (
                                    <li>No subcategories found</li>
                                )}
                            </ul>

                        )}
                    </Link>
                ))}
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('components')}
                    onMouseLeave={handleMouseLeave}
                >
                    Components <IoIosArrowDown />
                    {openDropdown === 'components' && (
                        <ul className="dropdown-menu-c">
                            <Components />
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('Gaming')}
                    onMouseLeave={handleMouseLeave}
                >
                    Gaming <IoIosArrowDown />
                    {openDropdown === 'Gaming' && (
                        <ul className="dropdown-menu-c">
                            <Gaming />
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown-main"
                    onMouseEnter={() => handleMouseEnter('Peripherals')}
                    onMouseLeave={handleMouseLeave}
                >
                    Peripherals <IoIosArrowDown />
                    {openDropdown === 'Peripherals' && (
                        <ul className="dropdown-menu-c">
                            <Peripherals />
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
