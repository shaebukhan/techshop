import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { Modal } from "antd";
import { useModal } from "../Context/ModalContext";
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import data from "../data.json";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    const handleMouseEnter = (menu) => setOpenDropdown(menu);
    const handleMouseLeave = () => setOpenDropdown(null);
    const { visible, showModal, hideModal } = useModal();
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle search query here (e.g., send it to the backend or filter results)
        console.log('Search query:', searchQuery);
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
                    <form className="search-form d-flex align-items-center" onSubmit={handleSubmit}>
                        <div className="search-input-wrapper">
                            <input
                                className=" search-input"
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="search-button">
                                <IoMdSearch />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="navbar-right">
                    <Link className="common-nav-right" to={"/login"}>
                        Login
                    </Link>
                    <Link className="cart-btn" to={"/"}><FaCartShopping />
                        <div className="cart-number">0</div>
                    </Link>
                    <button className="open-nav" onClick={openMenu}>
                        <FaBarsStaggered />
                    </button>
                </div>
            </div>
            <div className="categories">
                <div
                    className="nav-link-nhv dropdown"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    All Categories <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            {data.map((data) => (
                                <li><Link className="nav-link-nhv" to="/crm">{data.category}</Link></li>

                            ))}
                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Desktop Computers <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <li><Link className="nav-link-nhv" to="/crm">Pc</Link></li>

                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Notebooks <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <li><Link className="nav-link-nhv" to="/crm">Chrome book</Link></li>

                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Components <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <li><Link className="nav-link-nhv" to="/crm">Chrome book</Link></li>

                        </ul>
                    )}
                </div>
                <div
                    className="nav-link-nhv dropdown"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                >
                    Gaming <IoIosArrowDown />
                    {openDropdown === 'features' && (
                        <ul className="dropdown-menu-c">
                            <li><Link className="nav-link-nhv" to="/crm">Chrome book</Link></li>

                        </ul>
                    )}
                </div>
            </div>

        </>
    );
};

export default Navbar;
