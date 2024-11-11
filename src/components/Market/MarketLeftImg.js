import React from 'react';
const MarketLeftImg = ({ title, image, children }) => {
    return (
        <div className='common-space'>
            <div className="container-fluid">
                <h3 className="common-sm-title text-center my-5">
                    {title}
                </h3>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src={image} className='img-fluid' alt="marketer" />
                    </div>
                    <div className="col-md-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketLeftImg;