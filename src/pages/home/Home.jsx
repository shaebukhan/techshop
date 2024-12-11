import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Recently from "../../components/Recently";
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