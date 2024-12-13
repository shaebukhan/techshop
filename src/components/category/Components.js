import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Components = () => {
    return (
        <div className="components-main">

            <div className="components-item">
                <Link className='components-link' to={"/category/Fan & Cooling Products"}> Fan & Cooling Products</Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd52c3"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div> MSI MAG CORELIQUID R Series LGA 1700
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd52c5"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>  Antec AM5 Screw pack for SYMPHONY 360mm
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd52c6"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>   DeepCool LGA 1700 Mounting Kit
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd52cf"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>    Antec F12 Racing ARGB PWM Full Spectrum
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd52d3"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>     DeepCool RF120 FS (3-Pack) LED Fan
                </Link>
            </div>

            <div className="components-item">
                <Link className='components-link' to={"/category/Notebook Accessories"}> Notebook Accessories</Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd5048"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>  Simplecom CH545 USB-C 5-in-1 Multiport Adapter
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd503b"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>   Targus USB-C Demultiplexer Adapter for DOCK180
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd503c"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>    Oxhorn Laptop Charger Accessories Pack
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd5061"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>     Oxhorn Laptop Charger 90W Auto
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd505c"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>      HP 65W AC Power Adapter 4.5mm/7.4mm Charger
                </Link>
            </div>
            <div className="components-item">
                <Link className='components-link' to={"/category/Memory"}>Memory (RAM)</Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd51d8"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>   Crucial 8GB (1x8GB) DDR4 UDIMM 2400MHz
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd51da"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>    Crucial 8GB (1x8GB) DDR5 SODIMM 5600MHz
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd51dd"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>     Crucial 16GB (1x16GB) DDR4 SODIMM 3200MHz
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd51df"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>      G.SKILL F3-12800CL10D-16GBXL 16GB (2 x 8GB)
                </Link>
                <Link className='components-link-sm' to={"/product-details/6755b59952a97021b9bd51e2"}>
                    <div className="notebook-icon text-white">
                        <FaLongArrowAltRight />
                    </div>       G.SKILL F4-4000C18D-16GVK 16GB (2 x 8GB)
                </Link>
            </div>

        </div>
    );
};

export default Components;