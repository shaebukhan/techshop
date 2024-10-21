import React from 'react';
import { useModal } from '../Context/ModalContext';

const Demo2 = ({ title }) => {
    const { showModal } = useModal();
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
                        <button type='button' className='demo-btn' onClick={showModal} >GET A DEMO</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Demo2;