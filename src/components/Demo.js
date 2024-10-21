import React from 'react';
import { useModal } from '../Context/ModalContext';

const Demo = () => {
    const { showModal } = useModal();
    return (
        <div>
            <div className="demo-sec">
                <div className="wave">
                </div>
                <div className="common-space">
                    <h2 className="common-sm-heading text-white text-center fw-bolder">
                        Capture and connect with leads from <br /> all sources in one platform
                    </h2>
                    <p className="common-text text-white text-center my-4">Get massive amounts of interested buyers and sellers to make action with lead capture tools that <br />provide them with value and you their contact information. Feed leads from all sources into your <br /> CRM to auto assign and route  for quick follow up.</p>
                    <div className="my-5 text-center">
                        <button type='button' className='demo-btn' onClick={showModal}>GET A DEMO</button>
                    </div>
                </div>
                <div className="wave-bottom">
                </div>

            </div>
            <hr className='m-0' />
        </div>
    );
};

export default Demo;