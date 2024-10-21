import React from 'react';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import LaptopImg from "../../assets/images/brivity-marketer-computer-screenshot.png";
import Demo2 from '../../components/Demo2';
import Footer from '../../components/Footer';
import MarketLeftImg from '../../components/Market/MarketLeftImg';
import MarketCard from '../../components/Market/MarketCard';
import { IoMdArrowRoundForward } from "react-icons/io";
import MarketFlyer from "../../assets/images/marketer-flyer.jpg";
const Marketer = () => {
    return (
        <div>
            <Navbar />
            <Hero title={"Create auto generated marketing materials in a heartbeat"} desc={"Brivity Marketer is a one-stop shop for creating real estate postcards, flyers, ads, social media graphics, and marketing materials in a flash – and it’s all part of the Brivity Platform."} buttonTxt={"COMPARE SOULTIONS"} image={LaptopImg} />
            <MarketLeftImg image={MarketFlyer}>
                <MarketCard icon={<IoMdArrowRoundForward />} smtitle={"Showcase Listings"} desc={"Your listing postcards and flyers are instantly created to showcase your new or sold listing using real time MLS data"} />
                <MarketCard icon={<IoMdArrowRoundForward />} smtitle={"Mail With Ease"} desc={"Just decide how many to send and Brivity Marketer takes care of the mailing list, printing, postage, and delivery within 4-6 days"} />
                <MarketCard icon={<IoMdArrowRoundForward />} smtitle={"Postcards For All Purposes"} desc={"Use postcards for holiday greetings, handwritten thank-you notes, market updates, or create a completely custom postcard for any purpose"} />
            </MarketLeftImg>
            <Demo2 title={"See Brivity in action!"} />
            <Footer />
        </div>
    );
};

export default Marketer;