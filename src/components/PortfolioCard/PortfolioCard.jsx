import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import "./PortfolioCard.scss";
import AOS from "aos";
import { useEffect } from "react";

function PortfolioCard({
  imgSrc,
  delay,
  classTitle,
  title,
  position,
  hidden,
  techStack,
  isMobile,
}) {
  const [idx, setIdx] = useState(0);
  let hiddenClass = "";

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (showDetails) {
      document.querySelector(`.${classTitle}`).style.display = "none";
    } else {
      document.querySelector(`.${classTitle}`).style.display = "flex";
    }
    setShowDetails(!showDetails);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (idx >= imgSrc.length - 1) {
      setIdx(0);
    } else {
      setIdx((prevIdx) => prevIdx + 1);
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (idx === 0) {
      setIdx(imgSrc.length - 1);
    } else {
      setIdx((prevIdx) => prevIdx - 1);
    }
  };

  if (hidden) {
    hiddenClass = "hidden";
  }

  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className={"PortfolioCard " + hiddenClass}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <div className={"portfolio-card-container "}>
        <div className={"details " + classTitle}>
          <h1>{title}</h1>
          <ul className="tech-stack">
            {techStack.map((item, i) => (
              <p className="skill" key={item + i}>
                {item}
              </p>
            ))}
          </ul>
        </div>
        <div className={`${isMobile ? "mobile-card" : ""} img-zoom`}>
          {position === "left" ? (
            <ReactImageMagnify
              {...{
                enlargedImageContainerClassName: "zoom-container",
                ...getCardProps(imgSrc, idx, isMobile),
              }}
            />
          ) : (
            <ReactImageMagnify
              {...{
                ...getCardProps(imgSrc, idx, isMobile),
                enlargedImageContainerStyle: {
                  left: "-105%",
                  ...getCardProps(imgSrc, idx, isMobile)
                    .enlargedImageContainerStyle,
                },
              }}
            />
          )}
        </div>
      </div>
      <button className="pc-btn" onClick={handleClick}>
        {showDetails ? "close" : "view details"}
      </button>
    </div>
  );
}

export default PortfolioCard;

const getCardProps = (imgSrc, idx, isMobile) => {
  return {
    smallImage: {
      alt: "",
      isFluidWidth: true,
      src: imgSrc[idx],
    },
    largeImage: {
      src: imgSrc[idx],
      width: isMobile ? 1000 : 1900,
      height: isMobile ? 1000 : 1100,
    },
    imageStyle: {
      transition: "all 0.3s ease-out",
      borderRadius: "10px",
      filter: "drop-shadow(4.89751px 4.89751px 3px rgba(51, 223, 211, 0.2))",
    },
    enlargedImageStyle: {
      objectFit: "contain",
    },
    enlargedImageContainerDimensions: {
      width: isMobile ? "300%" : "100%",
      height: isMobile ? "180%" : "150%",
    },
    lensStyle: {
      background: "hsla(0, 0%, 100%, .3)",
      border: "1px solid #ccc",
      width: "50px",
      height: "50px",
    },
    enlargedImageContainerStyle: {
      position: "absolute",
      zIndex: "10",
      backgroundColor: "black",
    },
  };
};
