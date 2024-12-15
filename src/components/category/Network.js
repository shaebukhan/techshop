import React from 'react';
import { Link } from 'react-router-dom';

const Network = () => {
    return (
        <div className="components-main justify-content-start">
            <div className="components-item  peripheral-item">
                <Link className='components-link  '>Networing</Link>
                <Link className='components-link-sm'>Accessories</Link>
                <Link className='components-link-sm'>Dishes</Link>
                <Link className='components-link-sm'>Wireless Antennas</Link>
                <Link className='components-link-sm'>4G (LTE)</Link>
                <Link className='components-link-sm'> ADSL/VDSL Modern Routers  </Link>
                <Link className='components-link-sm'> Wireless Adapters  </Link>
            </div>

            <div className="components-item  peripheral-item">
                <Link className='components-link  '>Network Storage </Link>
                <Link className='components-link-sm'> Two Bay & Below </Link>
                <Link className='components-link-sm'> Four Bay </Link>
                <Link className='components-link-sm'> Five Bay </Link>
                <Link className='components-link-sm'> Six Bay </Link>
                <Link className='components-link-sm'>Eight Bay & Above </Link>
                <Link className='components-link-sm'>Ten Bay & Above </Link>
                <Link className='components-link-sm'>WD Business Solutions </Link>

            </div>

            <div className="components-item  peripheral-item">
                <Link className='components-link  '>Printers & Consumables </Link>
                <Link className='components-link-sm'>Consumables </Link>
                <Link className='components-link-sm'> Printer & Other  </Link>
                <Link className='components-link-sm'> InkJet Standalone </Link>
                <Link className='components-link-sm'> InkJet Multifunction </Link>
                <Link className='components-link-sm'>Laser Standalone </Link>
                <Link className='components-link-sm'>Laser Multifunction </Link>
                <Link className='components-link-sm'>Scanner</Link>
            </div>
            <div className="components-item  peripheral-item">
                <Link className='components-link  '>Rack & Accessories </Link>
                <Link className='components-link-sm'>Power Distribution Units(PDUs)</Link>
                <Link className='components-link-sm'>Rack Accessories</Link>
                <Link className='components-link-sm'>Racks</Link>


            </div>
            <div className="components-item  peripheral-item">
                <Link className='components-link  '>Smart Home</Link>
                <Link className='components-link-sm'>Indoor</Link>
                <Link className='components-link-sm'>Outdoor </Link>
                <Link className='components-link-sm'>Lights</Link>
                <Link className='components-link-sm'>Power</Link>
                <Link className='components-link-sm'>Doorbells</Link>
            </div>
        </div>
    );
};

export default Network;