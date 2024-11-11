import React from 'react';

const MarketCard = ({ icon, smtitle, desc }) => {
    return (
        <div className="d-flex mb-3">
            <div className="nature-icon d-clr">
                {icon}
            </div>
            <div className="nature-text">
                <h4 className="d-clr">{smtitle}</h4>
                <p className="d-clr my-3">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default MarketCard;