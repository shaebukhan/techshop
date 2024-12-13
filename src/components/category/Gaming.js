import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Gaming = () => {
    return (
        <div className="components-main">

            <div className="components-item">
                <Link className='components-link' to={"/category/Fan & Cooling Products"}>Gaming PCs</Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd50f2"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>  MSI Stealth Series Gaming Notebook
                </Link>

            </div>


        </div>
    );
};

export default Gaming;