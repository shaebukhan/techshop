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
import { payments } from '@square/web-sdk';

const Cart = () => {
    const navigate = useNavigate();
    const { cart, updateQuantity, removeFromCart, setCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [showShippingForm, setShowShippingForm] = useState(false);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [paymentForm, setPaymentForm] = useState(null);
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

    // Helper functions
    const getValidPrice = (price) => isNaN(price) ? 0 : parseFloat(price);
    const getValidQuantity = (quantity) => isNaN(quantity) || quantity < 1 ? 1 : parseInt(quantity);
    const getProductTotal = (product) => getValidPrice(product.price) * getValidQuantity(product.quantity);
    const getCartTotal = () => cart.reduce((sum, product) => sum + getProductTotal(product), 0);

    // Handle shipping form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    };

    // Handle shipping form submission
    const handleShippingSubmit = (e) => {
        e.preventDefault();
        setShowPaymentForm(true); // Show payment form after shipping info submission
    };

    // Handle payment and order creation
    const handlePayment = async () => {
        try {
            setLoading(true);

            // Tokenize the payment form
            const { token } = await paymentForm.tokenize();
            if (!token) throw new Error('Payment failed.');

            // Process payment on the backend
            const paymentResponse = await axios.post('/api/process-payment', {
                sourceId: token.id,
                amount: getCartTotal(),
            });

            if (paymentResponse.data.success) {
                toast.success('Payment successful!');

                // Create order after successful payment
                const orderData = {
                    products: cart.map((product) => ({
                        productId: product._id,
                        quantity: product.quantity,
                        price: product.price,
                        total: getProductTotal(product),
                    })),
                    shippingInfo,
                };

                const orderResponse = await axios.post(`${process.env.REACT_APP_API}/api/v1/orders/create-order`, orderData);

                if (orderResponse.data.success) {
                    toast.success('Order placed successfully!');
                    localStorage.removeItem('cart');
                    setCart([]);
                    setShowShippingForm(false);
                    setShowPaymentForm(false);
                    navigate(`/order/${orderResponse.data.order._id}`);
                } else {
                    toast.error(orderResponse.data.message);
                }
            } else {
                toast.error('Payment failed. Please try again.');
            }
        } catch (error) {
            toast.error(`Payment error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (showPaymentForm) {
            const initializePaymentForm = async () => {
                try {
                    const payment = await payments('sandbox-sq0idb-Nyg6__oT1ov9dXKKwJE-Jg', 'LNXQ3MF02NYXS');
                    const card = await payment.card();
                    await card.attach('#card-container');
                    setPaymentForm(payment);
                } catch (error) {
                    toast.error('Failed to initialize payment form.');
                }
            };
            initializePaymentForm();
        }
    }, [showPaymentForm]);

    return (
        <>
            <Navbar />
            {loading && <Loader />}
            <div className="mt-top"></div>

            <div className="cart-container">
                {showPaymentForm ? (
                    <div className="payment-form">
                        <h2 className="cart-title">Payment</h2>
                        <div id="card-container" className="card-container"></div>
                        <button
                            onClick={handlePayment}
                            className="common-nav-right mt-3 w-100"
                        >
                            Pay ${getCartTotal().toFixed(2)}
                        </button>
                    </div>
                ) : showShippingForm ? (
                    <form className="shipping-form" onSubmit={handleShippingSubmit}>

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
                        <button type="submit" className="common-nav-right mt-3 w-100">Next</button>
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
                                            <h5 className='cart-bold'>${getValidPrice(product.price).toFixed(2)}</h5>
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
