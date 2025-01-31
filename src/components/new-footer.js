import React from "react";

import icon_facebook from "../Assets/icons/icon_facebook.png";
import icon_insta from "../Assets/icons/icon_insta.png";
import icon_yt from "../Assets/icons/icon_yt.png";
import icon_linkedin from "../Assets/icons/icon_linkedin.png";
import { useMediaQuery, useTheme } from "@mui/material";

const NewFooter = () => {
  const phoneNumber = "8510850101";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  console.log("isMobile", isMobile);

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#f5faf5",
        paddingRight: 18,
        paddingLeft: 18,
        paddingBottom: 5,
      }}
    >
      <div
        style={{
          padding: 24,
          borderBottomWidth: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
          className="gap-8"
        >
          <a href="https://www.facebook.com/theshubhamGroup/" target="_blank">
            <img
              className="w-8 md:p-1 md:rounded-lg animate__zoomIn2 sm:w-12"
              src={icon_facebook}
              alt="Facebook Link.."
            />
          </a>

          <a href="https://www.instagram.com/theshubhamgroup/" target="_blank">
            <img
              className="w-8 md:p-1 md:rounded-lg animate__zoomIn2 sm:w-12"
              src={icon_insta}
              alt="Insta Link.."
            />
          </a>

          <a
            href="https://www.youtube.com/@indusvalleymukteshwar"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-8 md:p-1 md:rounded-lg animate__zoomIn2 sm:w-12"
              src={icon_yt}
              alt="Youtube Link.."
            />
          </a>

          <a
            href="https://www.linkedin.com/in/the-shubham-group-of-company/"
            target="_blank"
          >
            <img
              className="w-8 md:p-1 md:rounded-lg animate__zoomIn2 sm:w-12"
              src={icon_linkedin}
              alt="LinkedIn Link.."
            />
          </a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="flex flex-col md:flex-row justify-evenly m-6">
          <div>
            <section>
              <p className="text-black text-l md:text-xl font-semibold">
                Registered Office
              </p>
              <p className="text-zinc-600 text-lg font-merriweather font-thin ">
                The Shubham Group of Companies, <br />
                A-24, Okhla Industrial Area, Phase-2, Delhi, Pincode - 110020
              </p>
            </section>

            <section>
              <p className="text-black text-l md:text-xl font-semibold">
                Corporate Office
              </p>
              <p className="text-zinc-600 text-lg font-merriweather font-thin  ">
                315, Block-B, Sector-105 Noida, Uttar Pradesh, Pincode - 201304
              </p>
            </section>

            <section>
              <p className="text-black text-l md:text-xl font-semibold">
                Contact Us
              </p>
              <div className="flex flex-col ">
                <a
                  className="text-zinc-600 text-lg  hover:text-blue-400 "
                  href="mailto:info@tsgoc.in"
                >
                  {" "}
                  info@theshubhamgroup.com
                </a>
                <a
                  className="text-zinc-700  text-lg  hover:black"
                  href={`tel:${phoneNumber}`}
                >
                  8510 850 101
                </a>
              </div>
            </section>
          </div>
          <div className="flex flex-col md:text-start w-full gap-3 md:max-w-[50%] md:ml-20">
            <p className="text-black text-l md:text-xl font-semibold">
              Site Address
            </p>
            <p className="text-zinc-600 text-lg font-merriweather font-thin">
              Managher, Near Dhanachuli Bend,
              <br /> Village - Sunderkhal,
              <br /> Tehsil - Dhari,
              <br />
              Nainital, Uttrakhand.
              <br /> Pincode - 263132
            </p>
          </div>
        </div>

        {!isMobile && (
          <section style={{ alignContent: "center", flexShrink: 0 }}>
            <img
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: 500,
                maxHeight: 300,
                objectFit: "contain",
                marginRight: 34,
                paddingRight: 34,
                marginBottom: 12,
                paddingBottom: 12
              }}
              src="https://d57jfigkzby0a.cloudfront.net/logo.png"
              alt="ivm logo"
            />
          </section>
        )}
      </div>

      {isMobile && (
        <section style={{ alignContent: "center", marginTop: "10px" }}>
          <img
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: 150,
              maxHeight: 100,
              objectFit: "contain",
            }}
            src="https://d57jfigkzby0a.cloudfront.net/logo.png"
            alt="ivm logo"
          />
        </section>
      )}

      <section class="copy-right">
        <p className="text-zinc-700  text-center text-sm font-merriweather p-3 pt-0">
          Copyright © 2009 The Shubham Group.
        </p>
      </section>
    </footer>
  );
};

export default NewFooter;
