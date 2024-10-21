import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Nature from "../../components/Nature";
import Demo from "../../components/Demo";
import InLeads from "../../components/InLeads";
import Deals from "../../components/Deals";
import Demo2 from "../../components/Demo2";
import Recently from "../../components/Recently";
import Partner from "../../components/Partner";
import CustomCarousel from "../../components/CustomCarousel";
import ProductsDiscounts from "../../components/ProductsDiscounts";
import Videos from "../../components/Videos";
import NewProducts from "../../components/NewProducts";
import Brands from "../../components/Brands";
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="mt-top"></div>
            <CustomCarousel />
            <ProductsDiscounts />
            <Videos />
            <NewProducts />
            <Slider />
            <Brands />
            <Recently />
            <Footer />
        </>
    );
};

export default Home;