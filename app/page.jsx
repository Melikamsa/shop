import "@/styles/globals.css";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import PostInstagram from "../components/PostInstagram/index";
import Information from "@/components/Information";
import Timer from "@/components/Timer";
import ShopNow from "@/components/ShopNow";
// import SwiperCategories from "@/components/SwiperCategories";

const HomePage = () => {
  return (
    <>
      <Header />
      <ShopNow />
      {/* <SwiperCategories/> */}

      <Timer duration={113 * 24 * 60 * 60 * 1000} />
      <PostInstagram />
      <Information />
      <Footer />
    </>
  );
};

export default HomePage;
