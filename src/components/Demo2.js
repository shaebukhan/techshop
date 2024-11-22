import React from 'react';


const Demo2 = ({ title }) => {

    return (
        <div>
            <div className="demo-sec">
                <div className="wave-top">
                </div>
                <div className="common-space">
                    <h2 className="common-title text-white text-center fw-bolder">
                        {title}
                    </h2>

                    <div className="mt-5 text-center">
                        <button type='button' className='demo-btn' onClick={""} >GET A DEMO</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Demo2;