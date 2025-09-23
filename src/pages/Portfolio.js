import React, { useEffect, useState } from "react";
import backgroundImage from "../resources/landingPageBackground.jpg";
import Menu from "../components/Menu";
// Bulk import of all images in resources folder
import aboutMeBackground from "../resources/aboutMeBackground.jpeg";
import collectionPhoto1 from "../resources/collectionPhoto1.jpg";
import collectionPhoto2 from "../resources/collectionPhoto2.jpg";
import collectionPhoto3 from "../resources/collectionPhoto3.jpg";
import collectionPhoto4 from "../resources/collectionPhoto4.jpg";
import landingPageBackground2 from "../resources/landingPageBackground2.jpg";
import landingPageBackground3 from "../resources/landingPageBackground3.jpg";
import landingPageBackground4 from "../resources/landingPageBackground4.jpg";
import logo1 from "../resources/1.png";
import logo5 from "../resources/5.png";
import logo10 from "../resources/10.png";
// Example: import IMG_0889 from '../resources/IMG_0889.jpg';
import IMG_0889 from "../resources/IMG_0889.jpg";
import IMG_1365 from "../resources/IMG_1365.jpg";
import IMG_1385 from "../resources/IMG_1385.jpg";
import IMG_2213 from "../resources/IMG_2213.jpg";
import IMG_2225 from "../resources/IMG_2225.jpg";
import IMG_2226 from "../resources/IMG_2226.jpg";
import IMG_2238 from "../resources/IMG_2238.jpg";
import IMG_2243 from "../resources/IMG_2243.jpg";
import IMG_3124 from "../resources/IMG_3124.JPG";
import IMG_3127 from "../resources/IMG_3127.jpg";
import IMG_3130 from "../resources/IMG_3130.jpg";
import IMG_3136 from "../resources/IMG_3136.JPG";
import IMG_3458 from "../resources/IMG_3458.jpg";
import IMG_3471 from "../resources/IMG_3471.jpg";
import IMG_4395 from "../resources/IMG_4395.JPG";
import IMG_4398 from "../resources/IMG_4398.JPG";
import IMG_4417 from "../resources/IMG_4417.jpg";
import IMG_4774 from "../resources/IMG_4774.JPG";
import IMG_4781 from "../resources/IMG_4781.jpg";
import IMG_4791 from "../resources/IMG_4791.jpg";
import IMG_4792 from "../resources/IMG_4792.JPG";
import IMG_4805 from "../resources/IMG_4805.jpg";
import IMG_5105 from "../resources/IMG_5105.jpg";
import IMG_5110 from "../resources/IMG_5110.jpg";
import IMG_5119 from "../resources/IMG_5119.JPG";
import IMG_5121 from "../resources/IMG_5121.jpg";
import IMG_5128 from "../resources/IMG_5128.jpg";
import IMG_7149 from "../resources/IMG_7149.JPG";
import IMG_7157 from "../resources/IMG_7157.JPG";
import IMG_7164 from "../resources/IMG_7164.JPG";
import IMG_7165 from "../resources/IMG_7165.jpg";
import IMG_7289 from "../resources/IMG_7289.jpg";
import IMG_7290 from "../resources/IMG_7290.jpg";
import IMG_7294 from "../resources/IMG_7294.jpg";
import IMG_7295 from "../resources/IMG_7295.JPG";
import IMG_7296 from "../resources/IMG_7296.jpg";
import IMG_7297 from "../resources/IMG_7297.JPG";
import IMG_7304 from "../resources/IMG_7304.jpg";
import IMG_7310 from "../resources/IMG_7310.JPG";
import IMG_7311 from "../resources/IMG_7311.JPG";
import IMG_7312 from "../resources/IMG_7312.jpg";
import IMG_7313 from "../resources/IMG_7313.JPG";
import IMG_7314 from "../resources/IMG_7314.jpg";
import IMG_7320 from "../resources/IMG_7320.jpg";
import IMG_7322 from "../resources/IMG_7322.JPG";
import IMG_7327 from "../resources/IMG_7327.jpg";
import IMG_7419 from "../resources/IMG_7419.jpg";
import IMG_7699 from "../resources/IMG_7699.JPG";
import IMG_7709 from "../resources/IMG_7709.JPG";
import IMG_7720 from "../resources/IMG_7720.JPG";
import IMG_7722 from "../resources/IMG_7722.JPG";
import IMG_8853 from "../resources/IMG_8853.jpg";
import IMG_8862 from "../resources/IMG_8862.jpg";
import IMG_8873 from "../resources/IMG_8873.jpg";
import IMG_8900 from "../resources/IMG_8900.JPG";
import SAM_0792 from "../resources/SAM_0792.jpg";
import SAM_3880 from "../resources/SAM_3880.jpg";
import SAM_4404 from "../resources/SAM_4404.JPG";
import SAM_4798 from "../resources/SAM_4798.JPG";
import SAM_5714 from "../resources/SAM_5714.JPG";
import SAM_5750 from "../resources/SAM_5750.JPG";

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);
  const landingPageContainerStyle = {
    color: "white",
    fontFamily: '"Playfair Display", serif',
    fontWeight: "800",
    fontStyle: "normal",
    fontSize: "5rem",
    letterSpacing: "-2px",
    wordSpacing: "25px",
    height: "50vh",
    display: "flex",
    position: "relative",
    padding: "20px",
  };
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      style={{
        overflowX: "hidden",
        margin: 0,
        padding: 0,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%", // removes white line on right-side
          width: "100vw",
          height: "70vh",
          zIndex: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "translateX(-50%)", // removes white line on right-side
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <Menu logoOverride={require("../resources/5.png").default} />
      </div>
      <img
        src={backgroundImage}
        alt="background"
        style={{ display: "none" }}
        onLoad={() => setLoaded(true)}
      />
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 2s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ ...landingPageContainerStyle, wordSpacing: "10px" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 800,
                fontSize: "2.5rem",
                marginBottom: "32px",
                color: "white",
                textAlign: "center",
              }}
            >
              Portfolio
            </h1>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "1.2rem",
                color: "white",
                textAlign: "center",
                maxWidth: "600px",
                padding: "0 20px",
              }}
            >
              Welcome to my portfolio! Here you'll find a curated selection of
              my favorite work and projects.
            </p>
          </div>
        </div>
        {/* Photo Grid Section */}
        <div className="portfolio-photo-grid">
          {[
            // Curated: some featured images (by file name, variety)
            // Best work (IMG_8853 close to top)
            IMG_8853,
            IMG_0889,
            IMG_3130,
            IMG_3136,
            IMG_3458,
            IMG_3471,
            IMG_2213,
            IMG_4417,
            IMG_4781,
            IMG_4791,
            IMG_4805,
            IMG_5105,
            IMG_5110,
            IMG_5119,
            IMG_5121,
            IMG_5128,
            IMG_7149,
            IMG_7157,
            IMG_7164,
            IMG_7290,
            IMG_7294,
            IMG_7295,
            IMG_7296,
            IMG_7297,
            IMG_7304,
            IMG_7310,
            IMG_7311,
            IMG_7312,
            IMG_7313,
            IMG_7314,
            IMG_7320,
            IMG_7322,
            IMG_7327,
            IMG_7419,
            IMG_7699,
            IMG_7709,
            IMG_7720,
            IMG_7722,
            IMG_8862,
            IMG_8873,
            IMG_8900,
            // Next: variety and supporting work
            IMG_1365,
            IMG_1385,
            IMG_2225,
            IMG_2226,
            IMG_2238,
            IMG_2243,
            IMG_3124,
            IMG_3127,
            IMG_4395,
            IMG_4398,
            IMG_4774,
            IMG_7289,
            // Last: SAM images (likely a different camera/series)
            SAM_0792,
            SAM_3880,
            SAM_5714,
            SAM_5750,
          ].map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`portfolio-${idx}`}
              style={{
                width: "100%",
                marginBottom: "18px",
                display: "block",
                breakInside: "avoid",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
