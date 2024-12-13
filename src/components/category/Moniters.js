import React from 'react';
import { Link } from 'react-router-dom';

const Moniters = () => {
    return (
        <div className="components-main justify-content-start">
            <div className="components-item">
                <Link className='components-link  '>Moniters</Link>
                <Link className='components-link-sm'>23" and below </Link>
                <Link className='components-link-sm'>23.6" - 25" </Link>
                <Link className='components-link-sm'>27" - 29" </Link>
                <Link className='components-link-sm'>30" - 38" </Link>
                <Link className='components-link-sm'>40" and Above" </Link>
                <Link className='components-link-sm'>2K WQHD </Link>
                <Link className='components-link-sm'>4K UHD </Link>
                <Link className='components-link-sm'>OLED </Link>
            </div>
        </div>
    );
};

export default Moniters;