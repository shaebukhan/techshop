import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';
import { useCart } from '../../Context/CartContext';
import DOMPurify from "dompurify";
const ProductDetailsClient = () => {
    const { id } = useParams();
    const [product, setProduct] = useState("");
    const [loading, setLoading] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);


    useEffect(() => {
        const fetchProductData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/single-product/${id}`);
                if (data?.success) setProduct(data.product);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProductData();
    }, [id]);
    const categoryCode = product.categoryCode;

    console.log(product);

    useEffect(() => {
        const fetchRelatedProductsData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/get-related-products/${categoryCode}?exclude=${id}`);
                if (data?.success) setRelatedProducts(data.relatedProducts);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchRelatedProductsData();
    }, [categoryCode, id]);


    const { cart, setCart } = useCart();
    const handleAddToCart = (product) => {
        // Check if the product already exists in the cart
        const productExists = cart.some((item) => item._id === product._id);

        if (productExists) {
            toast("Product already present in cart");
        } else {
            // Add the product to the cart
            const updatedCart = [...cart, { ...product, quantity: 1 }]; // Set initial quantity to 1 for new product
            setCart(updatedCart); // Update the cart state
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save the updated cart to localStorage
            toast("Product added to cart");
        }
    };


    const formatDescriptionForHTML = (htmlContent) => {
        // Create a temporary container to manipulate the HTML
        const container = document.createElement("div");
        container.innerHTML = htmlContent;

        // Iterate over all child nodes
        const traverseAndTransform = (node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                // Replace `:` with `:\n` and `•` with `\n•`
                const updatedText = node.nodeValue
                    .replace(/\.\s/g, '.<br>')
                    .replace(/:/g, ':<br>')
                    .replace(/•/g, '<br>•&nbsp;'); // Add `<br>` before `•`
                const span = document.createElement('span');
                span.innerHTML = updatedText;
                node.parentNode.replaceChild(span, node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Recursively process child nodes
                Array.from(node.childNodes).forEach(traverseAndTransform);
            }
        };

        traverseAndTransform(container);

        // Return the updated HTML
        return container.innerHTML;
    };
    const formattedDescription = formatDescriptionForHTML(product.longDescription);

    return (
        <>
            <Navbar />
            {loading && <Loader />}
            <div className="mt-top"></div>
            <div className="user-prod-main py-3">
                <div className="user-prod-left">
                    <img src={product.image} alt={product.shortDescription} />
                </div>
                <div className="user-prod-right">
                    <h5 className="user-prod-right-title">{product.shortDescription}</h5>
                    {/* <p className='user-prod-right-text'>{product.longDescription}</p> */}
                    <p>
                        {product._id}
                    </p>

                    <h5 className="user-prod-right-title">Category : {product.categoryName}</h5>
                    <h5 className="user-prod-right-title">Price : ${product.price}</h5>
                    <h5 className="text-success p-0 card-text">
                        In Stock
                    </h5>
                    {/* <div className="quantity-prod">
                        <button><RiSubtractFill /></button>
                        <div className="quantity-num">
                            {quantity}
                        </div>
                        <button><IoMdAdd /></button>
                    </div> */}

                    <div className="pt-3">
                        <button onClick={() => handleAddToCart(product)} className='common-nav-right mt-3 w-100' type="button">Add to cart</button>
                    </div>
                    <div className="user-product-sub-details">
                        <div className="user-product-sub-detail">
                            <strong> Subcategory
                            </strong> <br /> {product.subcategory
                            }
                        </div>
                        <div className="user-product-sub-detail">
                            <strong>Manufacture</strong>
                            <br />
                            {product.manufacturerSku}
                            {/* {product.manufacturerSku.map((manu, index) => (
                                <span key={index}>{manu}</span>
                            ))} */}
                        </div>

                        <div className="user-product-sub-detail">
                            <strong> Weight</strong> <br /> {product.weight}
                        </div>
                        <div className="user-product-sub-detail">
                            <strong> Height</strong> <br /> {product.height}
                        </div>
                        <div className="user-product-sub-detail">
                            <strong> Width</strong> <br /> {product.width}
                        </div>
                        <div className="user-product-sub-detail">
                            <strong> warranty</strong> <br /> {product.warranty}
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="product-description">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(formattedDescription),
                        }}
                    />
                </div>
                {/* <div className="user-product-sub-detail">
                    <strong>optional Accessories</strong>
                    <br />
                    {product.optionalAccessories.map((optacc, index) => (
                        <span key={index}>{optacc}</span>
                    ))}
                </div> */}
            </div>

            <hr />
            <h3 className="category-title">Related Products</h3>

            <div className="dis-products-sub">

                {relatedProducts.map((product, index) => (

                    <Link to={`/product-details/${product._id}`} key={index} className="prod-card" >

                        <img className='img-fluid' src={product.image} alt={product.shortDescription} />
                        <div className="bg-white">
                            <h3 className="card-title">
                                {product.shortDescription.length > 50
                                    ? `${product.shortDescription.slice(0, 50)}...`
                                    : product.shortDescription}
                            </h3>
                            <p className="card-text">
                                {product.categoryName}
                            </p>
                            <h3 className="card-title m-0">
                                ${product.price}
                            </h3>
                            <h6 className="text-success mb-0 card-text">
                                In Stock
                            </h6>
                            <div className="card-btn-main">
                                <button type='button' onClick={() => handleAddToCart(product)} className='card-btn-sub' >Add to cart</button>
                            </div>
                        </div>
                    </Link>


                ))}
            </div>
            <div className="text-center mb-5">
                <Link to={`/category/${product.categoryName}`} className='common-nav-right'>See All</Link>
            </div>

        </>
    );
};

export default ProductDetailsClient;
