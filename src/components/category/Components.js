import React from 'react';
import { Link } from 'react-router-dom';

const Components = () => {
    return (
        <div className="components-main">

            <div className="components-item">
                <Link className='components-link  '> CPUs </Link>
                <Link className='components-link-sm'>  Intel LGA1700 </Link>
                <Link className='components-link-sm'>  Intel LGA1851 </Link>
                <Link className='components-link-sm'>   AMD AM4 </Link>
                <Link className='components-link-sm'>   AMD AM5 </Link>
                <Link className='components-link-sm'>  AMD sTR5 </Link>
                <Link className='components-link-sm'>  AMD sWRX8 </Link>
            </div>

            <div className="components-item">
                <Link className='components-link  '> Graphic Cards</Link>
                <Link className='components-link-sm'>  Intel  Arc </Link>
                <Link className='components-link-sm'>   AMD Workstation </Link>
                <Link className='components-link-sm'>   External Display Adapters </Link>
                <Link className='components-link-sm'>  AMD Radeon </Link>
                <Link className='components-link-sm'>   Nvidia GeForce </Link>
                <Link className='components-link-sm'>   Nvidia  Workstation </Link>
            </div>

            <div className="components-item">
                <Link className='components-link  '> Hard Drives & SSDs</Link>
                <Link className='components-link-sm'>   2.5" HDD </Link>
                <Link className='components-link-sm'>   3.5" HDD </Link>
                <Link className='components-link-sm'>   2.5" SSD </Link>
                <Link className='components-link-sm'>   M.2 HDD </Link>
                <Link className='components-link-sm'>    NAS Hard Drives </Link>
                <Link className='components-link-sm'>    PCI Express SSD </Link>
                <Link className='components-link-sm'>    Surveillance HDD </Link>
            </div>

            <div className="components-item">
                <Link className='components-link  '> Memory (RAM)</Link>
                <Link className='components-link-sm'> Desktop Memory </Link>
                <Link className='components-link-sm'>  Notebook Memory </Link>
            </div>
            <div className="components-item">
                <Link className='components-link  '> Motherboards</Link>
                <Link className='components-link-sm'>Intel Socket 1700 </Link>
                <Link className='components-link-sm'>Intel Socket 1700 (DDR4) </Link>
                <Link className='components-link-sm'>Intel Socket 1851 </Link>
                <Link className='components-link-sm'>AMD Socket AM4 </Link>
                <Link className='components-link-sm'>AMD Socket AM5 </Link>
                <Link className='components-link-sm'>AMD Socket  sWRX8 </Link>
                <Link className='components-link-sm'>AMD Socket  sTR5 </Link>
            </div>
            <div className="components-item">
                <Link className='components-link  '> Optical Drives</Link>
                <Link className='components-link-sm'>Blu-Ray Drive </Link>
                <Link className='components-link-sm'>DVD Drive   </Link>
                <Link className='components-link-sm'>External (USB)   </Link>

            </div>
        </div>
    );
};

export default Components;