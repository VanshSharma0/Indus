import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Header from "./components/Header";
import Header2 from "./components/Header2";
// import Header3 from "./components/Header3";
// import Header4 from "./components/Header4";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

import Home from "./components/Home";
import About from "./components/About";
import GoogleMap from "./components/Google_Map";
import FloorPlan from "./components/Floor_Plan";
import Gallery from "./components/Gallery";
import SiteLayout from "./components/Site_Layout";
import NearBy from "./components/NearBy";
import ReadyToMove from "./components/Ready_To_Move";
import Contact from "./components/Contact";
import NewFooter from "./components/new-footer";
import Details from "./components/Details";
import Sunderkhal1bhkHouse from "./components/floorplan_layout/Sunderkhal1BHK_House";
import Apartment1bhk from "./components/floorplan_layout/Apartment_1bhk";
import DuplexApparment2bhk from "./components/floorplan_layout/DuplexApparment_2bhk";
import NoticeForm from "./components/Notice_Form";
import Cottage4bhk from "./components/r2m_layout/Cottage4bhkLayout";
import Studio1bhkApartLayout from "./components/r2m_layout/Studio_1bhk_Apart_layout";
import Plot26Layout from "./components/r2m_layout/Plot_26_layout";
import Plot56Layout from "./components/r2m_layout/Plot_5_6_layout";
import Plot36Layout from "./components/r2m_layout/Plot_36_layout";
import Plot_09_layout from "./components/r2m_layout/Plot_09_layout";
import Plot01Layout from "./components/r2m_layout/Plot_01_layout";
import Plot27Layout from "./components/r2m_layout/Plot_27_layout";
import Plot2bhkWooden from "./components/r2m_layout/Plot_2bhk_Wooden";
import Plot3bhkWooden from "./components/r2m_layout/Plot_3bhk_Wooden";
import Advert from "./components/Advert";
import Error from "./components/Error";
import IntroductoryPdfPage from "./components/IntroductoryPdfPage";
import Blogs from "./components/Blogs/Blogs";
import BlogsRealEstate from "./components/Blogs/BlogRealState";
import PriceRange1 from "./components/priceChart_layout/PriceRange1";
import PriceRange2 from "./components/priceChart_layout/PriceRange2";
import PriceRange3 from "./components/priceChart_layout/PriceRange3";
import PriceRange4 from "./components/priceChart_layout/PriceRange4";
import PriceRange5 from "./components/priceChart_layout/PriceRange5";
import PropertyRates from "./components/PropertyRates";
import IntroductoryPage from "./components/IntroductoryPage";
import LandingPage from "./components/landing/landingPage";
import BlogRealState from "./components/Blogs/BlogRealState";
import BlogsRealState1 from "./components/Blogs/BlogRealState1";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

function MainRoutes() {
    const location = useLocation();
    const showHeaderFooter = location.pathname !== "/landing";
  return (
    <>
      {/* <Header/> */}
      {/* <Header3 /> */}

      {showHeaderFooter && <Header2 />}
      {/* <Header4/> */}
      <div className="social-icons">
        <a
          href="https://www.google.com/maps/dir//Dhanachuli,State+Highway,+Nainital,+Uttarakhand+263132/@29.39809,79.5933096,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3908d7f7740c0bc9:0xe9baaef9dd824df2!2m2!1d79.675711!2d29.3981153?entry=ttu"
          target="_blank"
        >
          <LocationOnIcon style={{ fontSize: "50px", color: "#98a661" }} />
        </a>
        <a href="tel:+918510850101">
          <PhoneIcon style={{ fontSize: "50px", color: "#98a661" }} />
        </a>
        <a href="https://wa.me/918510850101" target="_blank">
          <WhatsAppIcon style={{ fontSize: "50px", color: "#98a661" }} />
        </a>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/project-details/property-in-mukteshwar-for-sale"
          element={<Details />}
        />
        <Route exact path="/google_map" element={<GoogleMap />} />
        <Route exact path="/floor-plan" element={<FloorPlan />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/site-layout" element={<SiteLayout />} />
        <Route exact path="/nearby" element={<NearBy />} />
        <Route exact path="/ready_to_move" element={<ReadyToMove />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/Apartment_1bhk" element={<Apartment1bhk />} />
        <Route exact path="/IntroductoryPage" element={<IntroductoryPage />} />
        <Route
          exact
          path="/IntroductoryPdfPage"
          element={<IntroductoryPdfPage />}
        />
        <Route exact path="*" element={<Error />} />
        <Route
          exact
          path="/Sunderkhal1BHK_House"
          element={<Sunderkhal1bhkHouse />}
        />
        <Route
          exact
          path="/DuplexAppartment"
          element={<DuplexApparment2bhk />}
        />
        <Route exact path="/NoticeForm" element={<NoticeForm />} />
        <Route exact path="/cottage_4bhk" element={<Cottage4bhk />} />
        <Route
          exact
          path="/Studio_1bhk_Apart_layout"
          element={<Studio1bhkApartLayout />}
        />
        {/* <Route exact path="/Plot_26" element={<Plot26Layout />} />
        <Route exact path="/Plot_5_6" element={<Plot56Layout />} />
        <Route exact path="/Plot_36" element={<Plot36Layout />} />
        <Route exact path="/Plot_09" element={<Plot_09_layout />} />
        <Route exact path="/Plot_01" element={<Plot01Layout />} />
        <Route exact path="/Plot_27" element={<Plot27Layout />} />
        <Route exact path="/Wooden_2bhk" element={<Plot2bhkWooden />} />
        <Route exact path="/Wooden_3bhk" element={<Plot3bhkWooden />} />
        <Route exact path="/PropertyRates" element={<PropertyRates />} /> */}

        <Route exact path="/PriceRange1" element={<PriceRange1 />} />
        <Route exact path="/PriceRange2" element={<PriceRange2 />} />
        <Route exact path="/PriceRange3" element={<PriceRange3 />} />
        <Route exact path="/PriceRange4" element={<PriceRange4 />} />
        <Route exact path="/PriceRange5" element={<PriceRange5 />} />
        <Route exact path="/Advert" element={<Advert />} />
        <Route exact path="/landing" element={<LandingPage />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blog-real-estate" element={<BlogRealState />} />
        <Route exact path="/blog-real-estate1" element={<BlogsRealState1 />} />

        <Route exact path="*" element={<Error />} />
      </Routes>
      {showHeaderFooter && <NewFooter />}
    </>
  );
}

export default App;
