import React from "react";
import "./TitlePage.scss";
import logo from "../../assets/logo.png";
import topRightCube from "../../assets/tp-top-right-cube.svg";
import midTopCenterCube from "../../assets/tp-mid-top-cube.svg";
import arrowBig from "../../assets/arrow-3d1.svg";
import animeImg1 from "../../assets/anime-img-1.webp";
import animeImg2 from "../../assets/anime-img-2.svg";
import animeImg3 from "../../assets/anime-img-3.svg";
import hiddenCube2 from "../../assets/hidden-by-img-2-anime.svg";
import hiddenCube1 from "../../assets/hidden-by-img-1-anime.svg";
import bottomLeftCube from "../../assets/tp-top-right-cube.svg";
import bottomRightCube from "../../assets/tp-bottom-right-cube.svg";
import animeImg5 from "../../assets/anime-img-5.svg";

import sd1 from "../../assets/not-visible-sd.svg";
import sd2 from "../../assets/light-sd.svg";
import sd3 from "../../assets/dark-sd.svg";
import TypeWriter from "typewriter-effect";
import AOS from "aos";

const titlePage = () => {
  AOS.init({
    once: true,
  });

  return (
    <div className="titlePage">
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <img src={topRightCube} alt="" className="header-img" />
      </div>
      <img src={midTopCenterCube} alt="" className="img-3" /> {/* cube one */}
      <img src={bottomLeftCube} alt="" className="blc" />
      <img src={hiddenCube1} alt="" className="hc-1" /> {/*cube in bg */}
      <img src={hiddenCube2} alt="" className="hc-2" />
      <img src={bottomRightCube} alt="" className="brc" />
      <div className="title-sec">
        <div className="title-sec1">
          <img src={arrowBig} alt="" className="arrow-img" />
          <h2>
            <span> TRUSTED BY&nbsp;</span>
            <span className="text-green">
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("INDIAN ARMY")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("GERMAN GOVT")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("THE BEST")
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </h2>
          <h4 className="text-green">Infrastructure for high quality apps</h4>
          <p>
            Supercharge your business with latest technology, industry level
            standards and stable applications
          </p>
        </div>
        <div className="title-sec2">
          <img src={animeImg1} alt="" className="" />
          <img src={animeImg2} alt="" className="title-sec2-img1" />
          <img src={animeImg3} alt="" className="title-sec2-img2" />
          <img src={animeImg5} alt="" className="title-sec2-img3" />
        </div>
      </div>
      <div className="down-btn">
        <a href="#about-id">
          <img src={sd1} alt="" />
          <img src={sd2} alt="" />
          <img src={sd3} alt="" />
        </a>
      </div>
    </div>
  );
};

export default titlePage;

// <div className="titlePage">
//   <div className="header">
//     <img src={logo} alt="" className="logo" />
//     <img src={topRightCube} alt="" className="header-img" />
//   </div>
//   <img src={midTopCenterCube} alt="" className="img-3" /> {/* cube one */}
//   <img src={arrowBig} alt="" className="arrow-img" /> {/*animated arrow */}
//   <div className="tp-2">
//     {/*bottom left cube*/}
//     <img src={bottomLeftCube} alt="" className="blc" />
//     <div className="left-tp-2" data-aos="fade-right" data-aos-delay="500">
//       <div className="content-div">
//         <div className="inner-heading-1">
//           <h1 className="typewriter">
//             <span>TRUSTED BY&nbsp; </span>
//             <span className="auto-write">
//               <TypeWriter
//                 options={{
//                   autoStart: true,
//                   loop: true,
//                 }}
//                 onInit={(typewriter) => {
//                   typewriter
//                     .typeString("INDIAN ARMY")
//                     .pauseFor(1500)
//                     .deleteAll()
//                     .typeString("GERMAN GOVT")
//                     .pauseFor(1500)
//                     .deleteAll()
//                     .typeString("THE BEST")
//                     .pauseFor(1500)
//                     .deleteAll()
//                     .start();
//                 }}
//               />
//             </span>
//           </h1>
//         </div>
//         <div className="inner-heading-2">
//           <p>Infrastructure for high quality apps</p>
//         </div>
//         <div className="inner-paragraph">
//           <p>
//             Supercharge your business with latest technology, industry level
//             standards and stable applications
//           </p>
//         </div>
//       </div>
//     </div>
//     {/* for the scroll down arrows */}
//     <section id="scroll-down" className="sd">
//       <a href="#about-id">
//         <span>
//           <img src={sd1} alt="" />
//         </span>
//         <span>
//           <img src={sd2} alt="" />
//         </span>
//         <span>
//           <img src={sd3} alt="" />
//         </span>
//       </a>
//     </section>
//     <img src={hiddenCube1} alt="" className="hc-1" /> {/*cube in bg */}
//     <div className="right-tp-2" data-aos="fade-left" data-aos-delay="500">
//       <div className="anime-img-1">
//         <img src={animeImg1} alt="" className="img-4" /> {/*main right*/}
//       </div>
//       <div className="anime-img-2">
//         {/*main down1*/}
//         <img src={animeImg2} alt="" className="img-5" />
//       </div>
//     </div>
//   </div>
//   {/*bottom middle hidden cube*/}
//   <img src={hiddenCube2} alt="" className="hc-2" />
//   <img src={bottomRightCube} alt="" className="brc" />
//   <div className="anime-img-3">
//     {/* main down2 */}
//     <img src={animeImg3} alt="" className="img-6" />
//   </div>
// </div>
