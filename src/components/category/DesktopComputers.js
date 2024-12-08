import React from 'react';
import { Link } from 'react-router-dom';
import Gaming from "../../assets/images/gaming.avif";
import Ready from "../../assets/images/ready.avif";
import Office from "../../assets/images/office.avif";
import WorkStation from "../../assets/images/workstation.avif";
const DesktopComputers = () => {
    return (
        <div className="desktop-main">
            <Link className="desktop-item" to={`/category/gaming-pc`}>
                <img
                    src={Gaming}
                    alt="Gaming PCs"
                    className="img-fluid"
                />
                <div className="desktop-btn">Gaming PCs</div>
            </Link>
            <Link className="desktop-item" to={`/category/`}>
                <img
                    src={Ready}
                    alt="Ready to Ship PCs"
                    className="img-fluid"
                />
                <div className="desktop-btn">Ready to Ship PCs</div>
            </Link>
            <Link className="desktop-item">
                <img
                    src={Office}
                    alt="Office PCs"
                    className="img-fluid"
                />
                <div className="desktop-btn">Office PCs</div>
            </Link>

            <Link className="desktop-item">
                <img
                    src={WorkStation}
                    alt="Workstation PCs"
                    className="img-fluid"
                />
                <div className="desktop-btn">Workstation PCs</div>
            </Link>

        </div>
    );
};

export default DesktopComputers;