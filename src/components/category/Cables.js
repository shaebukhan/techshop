import React from 'react';
import { Link } from 'react-router-dom';

const Cables = () => {
    return (
        <div className="components-main">

            <div className="components-item">
                <Link className='components-link  '>Accessories </Link>
                <Link className='components-link-sm'> Batteries </Link>
                <Link className='components-link-sm'>  Cleaning  Supplies</Link>
                <Link className='components-link-sm'>   Misc </Link>
                <hr />
                <Link className='components-link  '>Bay Devices </Link>
                <Link className='components-link-sm'>Bay Adapters </Link>
                <Link className='components-link-sm'>Internal Card Readers</Link>
                <Link className='components-link-sm'>Drive Carriers </Link>
            </div>

            <div className="components-item">
                <Link className='components-link  '> Blank Media</Link>
                <Link className='components-link-sm'>DVD Blu-Ray</Link>
            </div>

            <div className="components-item">
                <Link className='components-link  '>Cables & Adapters</Link>
                <Link className='components-link-sm'> Adapters </Link>
                <Link className='components-link-sm'>Apple  </Link>
                <Link className='components-link-sm'>Audio </Link>
                <Link className='components-link-sm'> DisplayPort </Link>
                <Link className='components-link-sm'>DVI  </Link>
                <Link className='components-link-sm'>Ethernet </Link>
                <Link className='components-link-sm'>HDMI </Link>
            </div>
            <div className="components-item">
                <Link className='components-link  '>Caddies & Dockers</Link>
                <Link className='components-link-sm'>Hard Drive & SSD Cadies </Link>
                <Link className='components-link-sm'>Hard Drive & SSD Docks </Link>
                <hr />
                <Link className='components-link  '>Flash Memory</Link>
                <Link className='components-link-sm'>SD Flash </Link>
                <Link className='components-link-sm'>USB Memory bar </Link>
            </div>
            <div className="components-item">
                <Link className='components-link  '>Gadgets</Link>
                <Link className='components-link-sm'>Power Banks </Link>
                <Link className='components-link-sm'>Smart Lighting </Link>
                <Link className='components-link-sm'>Wearables   </Link>
                <Link className='components-link-sm'>Wireless charges   </Link>
            </div>
            <div className="components-item">
                <Link className='components-link  '>Hard Drives & SSDs-External</Link>
                <Link className='components-link-sm'> External Portables (2.5") </Link>
                <Link className='components-link-sm'> External Desktop (3.5") </Link>
                <Link className='components-link-sm'> External Portables (SSD) </Link>
                <Link className='components-link-sm'> WD Personal Cloud </Link>
                <hr />
                <Link className='components-link  '>Home Entertainment</Link>
                <Link className='components-link-sm'>Media Players  </Link>
                <Link className='components-link-sm'> TV Tuners </Link>
            </div>
        </div>
    );
};

export default Cables;