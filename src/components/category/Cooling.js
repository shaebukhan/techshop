import React from 'react';
import { Link } from 'react-router-dom';

const Cooling = () => {
    return (
        <div className="components-main justify-content-start">
            <div className="components-item">
                <Link className='components-link  '>Cooling Fans</Link>
                <Link className='components-link-sm'>GPU Coolers </Link>
                <Link className='components-link-sm'>Fan Accessories  </Link>
                <Link className='components-link-sm'>Fans  </Link>
                <Link className='components-link-sm'>Fans Controllers </Link>
            </div>

            <div className="components-item">
                <Link className='components-link  '>CPU Coolers </Link>
                <Link className='components-link-sm'>Thermal Pads </Link>
                <Link className='components-link-sm'>CPU Cooler Accessories </Link>
                <Link className='components-link-sm'>AMD Ryzen Coolers </Link>
                <Link className='components-link-sm'>AMD Threadripper Coolers </Link>
                <Link className='components-link-sm'>Air Coolers-Multi-Platform </Link>
                <Link className='components-link-sm'>Air Coolers-AMD Only </Link>
                <Link className='components-link-sm'>Air Coolers-Intel Only </Link>
                <Link className='components-link-sm'>Liquid Coolers-Multi-Platform </Link>
            </div>

            <div className="components-item">
                <Link className='components-link  '>Custom Water Cooling </Link>
                <Link className='components-link-sm'>Blocks </Link>
                <Link className='components-link-sm'>Coolent & Addictives </Link>
                <Link className='components-link-sm'>fitting & Adapters </Link>
                <Link className='components-link-sm'>Kits </Link>
                <Link className='components-link-sm'>Pumps </Link>
                <Link className='components-link-sm'>Radiators </Link>
                <Link className='components-link-sm'>Reserviors </Link>
                <Link className='components-link-sm'>Thermal Compound </Link>
            </div>
        </div>
    );
};

export default Cooling;