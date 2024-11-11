import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';
import EmptyCart from "../../assets/images/empty-cart.png";
import { RxCross2 } from "react-icons/rx";
import { useCart } from '../../Context/CartContext';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import axios from 'axios';

const Cart = () => {
    const navigate = useNavigate("");
    const { cart, updateQuantity, removeFromCart, setCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [showShippingForm, setShowShippingForm] = useState(false); // Toggle between cart and form views
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        postalCode: '',
        city: '',
        state: '',
        country: ''
    });

    useEffect(() => {
        setLoading(true);
        setLoading(false);
    }, []);

    // Helper function to ensure valid price and quantity
    const getValidPrice = (price) => {
        return isNaN(price) ? 0 : parseFloat(price);
    };

    const getValidQuantity = (quantity) => {
        return isNaN(quantity) || quantity < 1 ? 1 : parseInt(quantity);
    };

    // Calculate product total with fallback for NaN
    const getProductTotal = (product) => {
        const price = getValidPrice(product.dbp);
        const quantity = getValidQuantity(product.quantity);
        return price * quantity;
    };

    // Calculate cart total
    const getCartTotal = () => {
        return cart.reduce((sum, product) => sum + getProductTotal(product), 0);
    };

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    };

    // Handle order submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Prepare order data to send to the backend
        const orderData = {
            products: cart.map((product) => ({
                productId: product._id,
                quantity: product.quantity,
                price: product.dbp,
                total: getProductTotal(product)
            })),
            shippingInfo
        };

        try {

            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/orders/create-order`, orderData);
            if (res.data.success) {
                toast.success(res.data.message);
                localStorage.removeItem('cart');
                setCart([]);
                setShowShippingForm(false);
                navigate(`/order/${res.data.order._id}`);
            } else {
                toast.error(res.data.message);

            }

        } catch (error) {
            toast.error('Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            {loading && <Loader />}
            <div className="mt-top"></div>

            <div className="cart-container">
                {showShippingForm ? (
                    <form className="shipping-form" onSubmit={handleSubmit}>
                        <h2 className='cart-title mb-3'>Shipping Information</h2>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={shippingInfo.name}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={shippingInfo.email}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone"
                                            value={shippingInfo.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>Address *</label>
                                        <textarea
                                            name="address"
                                            placeholder="Address"
                                            value={shippingInfo.address}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>Postal Code *</label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            placeholder="Postal Code"
                                            value={shippingInfo.postalCode}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            value={shippingInfo.city}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>State *</label>
                                        <input
                                            type="text"
                                            name="state"
                                            placeholder="State"
                                            value={shippingInfo.state}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>Country *</label>
                                        <input
                                            type="text"
                                            name="country"
                                            placeholder="Country"
                                            value={shippingInfo.country}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="common-nav-right mt-3 w-100">Place Order</button>
                    </form>
                ) : cart.length > 0 ? (
                    <>
                        <h1 className="cart-title">Shopping Bag</h1>
                        <p className='cart-text'>{`${cart.length} items in your bag`}.</p>
                        <div className="cart-sub">
                            <div className="cart-sub-left">
                                {cart.map((product) => (
                                    <div key={product._id} className="cart-item">
                                        <div className="cart-item-image">
                                            <img src={product.image} alt={product.shortDescription} />
                                            <button
                                                className='remove-cart-btn'
                                                onClick={() => removeFromCart(product._id)}
                                            >
                                                <RxCross2 />
                                            </button>
                                        </div>
                                        <div className="cart-item-details">
                                            <p className='cart-item-text'>{product.shortDescription}</p>
                                            <h5 className='cart-bold'>${getValidPrice(product.dbp).toFixed(2)}</h5>
                                            <div className="quantity-controls">
                                                <button
                                                    className='cart-q-btn'
                                                    onClick={() => updateQuantity(product._id, 'decrease')}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <span className='cart-bold'>{getValidQuantity(product.quantity)}</span>
                                                <button
                                                    className='cart-q-btn'
                                                    onClick={() => updateQuantity(product._id, 'increase')}
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                            <h5 className='cart-bold'>Total: ${getProductTotal(product).toFixed(2)}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-sub-right">
                                <div className="cart-summary">
                                    <p className="cart-summary-text">Total</p>
                                    <h3>${getCartTotal().toFixed(2)}</h3>
                                    <button
                                        onClick={() => setShowShippingForm(true)}
                                        className='common-nav-right mt-3'
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="empty-cart mt-5">
                        <img src={EmptyCart} alt="Empty cart" />
                        <div className="d-flex flex-column gap-3">
                            <h1 className='cart-title'>Your cart is empty.</h1>
                            <Link className='common-nav-right' to={"/products"}>See All Products</Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
