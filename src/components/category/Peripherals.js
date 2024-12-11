import React from 'react';
import { Link } from 'react-router-dom';

const Peripherals = () => {
    return (
        <div className="components-main justify-content-start">
            <div className="components-item  peripheral-item">
                <Link className='components-link  '>Headphones & Microphones</Link>
                <Link className='components-link-sm'>Audio Interfaces </Link>
                <Link className='components-link-sm'> Earphones  </Link>
                <Link className='components-link-sm'>Headphones  </Link>
                <Link className='components-link-sm'> Headset  </Link>
                <Link className='components-link-sm'> Accessories  </Link>
                <Link className='components-link-sm'> Microphones  </Link>
            </div>

            <div className="components-item  peripheral-item">
                <Link className='components-link  '>Keyboard </Link>
                <Link className='components-link-sm'> Accessories </Link>
                <Link className='components-link-sm'> Corded </Link>
                <Link className='components-link-sm'> Keycaps </Link>
                <Link className='components-link-sm'> Cordless </Link>
                <Link className='components-link-sm'>Switches </Link>
                <Link className='components-link-sm'>Keyboard & Mouse Kit </Link>
                <Link className='components-link-sm'>Mechanical Keyboards </Link>
            </div>

            <div className="components-item  peripheral-item">
                <Link className='components-link  '>Mice & Mousemats </Link>
                <Link className='components-link-sm'>Mouse Accessories </Link>
                <Link className='components-link-sm'> Corded </Link>
                <Link className='components-link-sm'> Cordless </Link>
                <Link className='components-link-sm'>Drawing Tablet </Link>
                <Link className='components-link-sm'>Mats </Link>
                <Link className='components-link-sm'>Track Ball </Link>
            </div>
            <div className="components-item  peripheral-item">
                <Link className='components-link  '>Speakers </Link>
                <Link className='components-link-sm'>Sound bar</Link>
                <Link className='components-link-sm'> Stereo </Link>
                <Link className='components-link-sm'> 2.1 </Link>
                <Link className='components-link-sm'>5.1 </Link>
                <Link className='components-link-sm'>Portable </Link>
                <Link className='components-link-sm'>Bluetooth </Link>
            </div>
            <div className="components-item  peripheral-item">
                <Link className='components-link  '>Webcams </Link>
                <Link className='components-link-sm'>Streaming</Link>
                <Link className='components-link-sm'>Business </Link>
                <Link className='components-link-sm'>Home </Link>

            </div>
        </div>
    );
};

export default Peripherals;