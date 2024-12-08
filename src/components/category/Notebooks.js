import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
const Notebooks = () => {
    return (
        <div className="notebook-main">
            <div className="notebook-item">
                <Link className='notebook-link'> <div className="notebook-icon"><FaAngleRight /></div> NoteBooks & Tablets </Link>
                <Link className='notebook-link'> <div className="notebook-icon"><FaAngleRight /></div> Bags &  Accessories </Link>

                <Link className='notebook-link'> <div className="notebook-icon"><FaAngleRight /></div> Docking Stations </Link>
                <Link className='notebook-link'> <div className="notebook-icon"><FaAngleRight /></div> Power Adaptors </Link>
                <Link className='notebook-link'> <div className="notebook-icon"><FaAngleRight /></div>Extnded Device Warranty  </Link>
            </div>
            <div className="notebook-item">
                <Link className='notebook-link border-0'>  I need a device : </Link>
                <Link className='notebook-link-sm'> For Home or school </Link>
                <Link className='notebook-link-sm'>  For Business </Link>
                <Link className='notebook-link-sm'> For Creating content </Link>
                <Link className='notebook-link-sm'>  For Gaming  </Link>
                <Link className='notebook-link-sm'>  That's Ultra Portable </Link>
                <Link className='notebook-link-sm'>  That converts to a tablet-2 in 1  </Link>
            </div>
            <div className="notebook-item">
                <Link className='notebook-link border-0'> Shop by screen size : </Link>
                <Link className='notebook-link-sm'>  14" and under </Link>
                <Link className='notebook-link-sm'>  Classic 15.6" </Link>
                <Link className='notebook-link-sm'>  17" and up </Link>

            </div>
        </div>
    );
};

export default Notebooks;