import React from "react";
import "./LandingPage.css";
import IvmCarousel from "../carousel/IvmCarousel";
import MyModal from "../modal/MyModal";
import Sound from "../../Assets/mp3/sound.wav";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const LandingPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const playSound = () => {
    const audio = new Audio(Sound);
    audio.play();
    setOpen(true);
  };

  return (
    <>
      <div className="landing-page">
        <div className="header">
          <div className="landing-heading">Welcome to Indus Valley</div>
          <div className="landing-sub-heading">Mukteshwar, Nainital</div>
          <div className="button-container">
            <button
              className="relative px-8 py-2 rounded-md bg-black text-white font-bold z-10 transition-all duration-700 before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#5c6723] before:-z-10 before:scale-150 overflow-hidden before:hover:scale-150"
              onClick={() => navigate("/")}
              style={{
                fontFamily: "outfit",
                fontSize: "16px",
                lineHeight: "16px",
                letterSpacing: "1px",
              }}
            >
              Home
            </button>
            <button
              className="relative px-8 py-2 rounded-md bg-black text-white font-bold z-10 transition-all duration-700 before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#5c6723] before:-z-10 before:scale-150 overflow-hidden before:hover:scale-150"
              onClick={playSound}
              style={{
                fontFamily: "outfit",
                fontSize: "16px",
                lineHeight: "16px",
                letterSpacing: "1px",
              }}
            >
              Enquire Now
            </button>
          </div>
        </div>

        <div className="text-container">
          <ul className="landing-ul">
            <li className="landing-li">Gated Society On Hills</li>
            <li className="landing-li">Customize Your Cottage</li>
            <li className="landing-li">Himalayan Facing Cottages</li>
            <li className="landing-li">Snow Region</li>
            <li className="landing-li">Starting From 90 Lakhs - 3 Crore</li>
          </ul>
        </div>
      </div>
      <IvmCarousel />
      <MyModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default LandingPage;
