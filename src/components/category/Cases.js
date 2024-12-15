import React from 'react';
import { Link } from 'react-router-dom';

const Cases = () => {
    return (
        <div className="components-main justify-content-start">
            <div className="components-item cases-item">
                <Link className='components-link  '>Cases</Link>
                <Link className='components-link-sm'>Fishtank Cases </Link>
                <Link className='components-link-sm'> Dual chamber Cases  </Link>
                <Link className='components-link-sm'>  Case Accessories  </Link>
                <Link className='components-link-sm'> Extented ATX  </Link>
                <Link className='components-link-sm'> Full Tower  </Link>
                <Link className='components-link-sm'> Micro ATX  </Link>
                <Link className='components-link-sm'> Mid Tower  </Link>
                <Link className='components-link-sm'>  Mini ITX  </Link>
            </div>

            <div className="components-item cases-item">
                <Link className='components-link  '>Case Modding & Accessories </Link>
                <Link className='components-link-sm'>Cable combs </Link>
                <Link className='components-link-sm'> GPU Brace </Link>
                <Link className='components-link-sm'> DUST Filters </Link>
                <Link className='components-link-sm'> Riser Cables & Vertical GPU Mounts </Link>
                <Link className='components-link-sm'>Lighting </Link>
                <Link className='components-link-sm'>Miscellaneous </Link>
                <Link className='components-link-sm'>Sleeved Cables </Link>
            </div>

        </div>
    );
};

export default Cases;