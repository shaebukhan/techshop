import React from 'react';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import ManWomen from "../../assets/images/man-woman-smiling.png";
import Demo2 from '../../components/Demo2';
import Footer from '../../components/Footer';
const RealEstate = () => {
    return (
        <div>
            <Navbar />
            <Hero title={"Capture more leads.Build your brand.Close more deals."} desc={"Finally – a comprehensive real estate lead generation and branding program designed around your business goals. Whether it’s generating real estate leads or re-engaging your existing database, Brivity’s team of advertising experts work with you to craft a custom strategy proven to produce results."} buttonTxt={"Compare Plans"} image={ManWomen} />
            <Demo2 title={"Build your pipeline and close more deals with Brivity."} />
            <Footer />
        </div>
    );
};

export default RealEstate;