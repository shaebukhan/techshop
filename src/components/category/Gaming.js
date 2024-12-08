import React from 'react';
import { Link } from 'react-router-dom';

const Gaming = () => {
    return (
        <div className="components-main">

            <div className="components-item">
                <Link className='components-link  '> Gaming PCs </Link>
                <Link className='components-link-sm'> Custom Gaming PCs </Link>
                <Link className='components-link-sm'>  Ready to go Gaming PCs  </Link>
            </div>

            <div className="components-item">
                <Link className='components-link  '>Apparel</Link>
                <Link className='components-link-sm'> T-Shirts </Link>
                <Link className='components-link-sm'> Hats </Link>
            </div>

            <div className="components-item">
                <Link className='components-link  '>Gaming Accessories</Link>
                <Link className='components-link-sm'> Digital Eyewear </Link>
                <Link className='components-link-sm'>  Gamepads & Controllers </Link>
                <Link className='components-link-sm'> Streaming Gear </Link>
                <Link className='components-link-sm'> Video Capture </Link>
            </div>

            <div className="components-item">
                <Link className='components-link  '>Simulation</Link>
                <Link className='components-link-sm'>Flight simulation </Link>
                <Link className='components-link-sm'>Joysticks </Link>
                <Link className='components-link-sm'>Steering Wheels </Link>
            </div>
            <div className="components-item">
                <Link className='components-link  '>Gaming Furniture</Link>
                <Link className='components-link-sm'>Floor Mats  </Link>
                <Link className='components-link-sm'>Gaming Chairs </Link>
                <Link className='components-link-sm'>Gaming Desks </Link>
            </div>
            <div className="components-item">
                <Link className='components-link  '>Virtual Reality</Link>
                <Link className='components-link-sm'>Headsets </Link>
                <Link className='components-link-sm'>Accessories</Link>
            </div>
        </div>
    );
};

export default Gaming;