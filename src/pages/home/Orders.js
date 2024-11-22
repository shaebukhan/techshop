import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';
import axios from 'axios';

const Orders = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchOrderData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_API}/api/v1/orders/single-order/${id}`
                );
                if (data?.success) {
                    setOrder(data.order);
                }
            } catch (error) {
                console.error(error);

            } finally {
                setLoading(false);
            }
        };

        fetchOrderData();
    }, [id]);

    return (
        <>
            <Navbar />
            {loading && <Loader />}
            <div className="mt-top"></div>
            <div className="cart-container">



                {order ? (
                    <div className="cart-sub flex-column">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="cart-title my-3">Order Details</h1>
                                    <h5 style={{ fontSize: "20px" }} className="cart-title mt-3">Order ID : # {id}</h5>
                                    <h5 style={{ fontSize: "20px" }} className="cart-title">
                                        Date: {new Date(order.createdAt).toLocaleString()}
                                    </h5>
                                    <h5 style={{ fontSize: "20px" }} className="cart-title mb-3">
                                        Status : {order.orderStatus}
                                    </h5>
                                </div>
                                <div className="col-md-6">
                                    <div className="shipping-details">

                                        <h1 className="cart-title my-3">Shipping Details</h1>
                                        <h5 style={{ fontSize: "18px" }} className="cart-title mb-3">
                                            Name : {order.shippingInfo.name}
                                        </h5>
                                        <h5 style={{ fontSize: "18px" }} className="cart-title mb-3">
                                            Email : {order.shippingInfo.email}
                                        </h5>
                                        <h5 style={{ fontSize: "18px" }} className="cart-title mb-3">
                                            Phone : {order.shippingInfo.phone}
                                        </h5>
                                        <h5 style={{ fontSize: "18px" }} className="cart-title mb-3">
                                            Address : {order.shippingInfo.address}
                                        </h5>
                                        <h5 style={{ fontSize: "18px" }} className="cart-title mb-3">
                                            Postal Code : {order.shippingInfo.postalCode}
                                        </h5>
                                        <h5 style={{ fontSize: "18px" }} className="cart-title mb-3">
                                            City : {order.shippingInfo.city}
                                        </h5>
                                        <h5 style={{ fontSize: "18px" }} className="cart-title mb-3">
                                            State : {order.shippingInfo.state}
                                        </h5>
                                        <h5 style={{ fontSize: "18px" }} className="cart-title mb-3">
                                            Country : {order.shippingInfo.country}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <table className="order-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th className='text-center'>Quantity</th>
                                    <th>Price</th>
                                    <th>Sub Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.products.map((product) => (
                                    <tr key={product._id}>
                                        <td>
                                            <img src={product.image} alt={product.shortDescription} className="img-fluid" />
                                        </td>
                                        <td>{product.shortDescription}</td>
                                        <td className='text-center'>{product.quantity}</td>
                                        <td>${product.price}</td>
                                        <td>${product.price * product.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>



                        </table>
                        <div className='text-end my-3'>
                            <h5 >Total: ${order.totalAmount}</h5>
                        </div>
                    </div>
                ) : (
                    <p>No order found.</p>
                )}
            </div>
        </>
    );
};

export default Orders;
