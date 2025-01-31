import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact2 = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "50%",
        padding: "20px",
      }}
      data-aos-anchor-placement="top-center"
      data-aos="fade-up"
    >
      <div className="w-full sm:w-[40%] h-full flex flex-col justify-center items-center bg-white rounded-lg shadow-md">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h3"
            component="h2"
            className="modal-title"
            sx={{
              marginTop: "20px",
              textAlign: "center",
              fontSize: "24px",
            }}
          >
            Connect to mother nature with Indus Valley
          </Typography>
        </Box>
        <iframe
          id="IVM Landing Page"
          src="https://account.solidperformers.com/capture_form_data/MTI1OA=="
          title="IVM Landing Page"
          className="w-full sm:w-[60%] h-[40vh] border-none rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact2;
