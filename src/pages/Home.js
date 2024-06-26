import React, { useEffect, useState, useRef } from 'react';
import aluminum from '../Images/al1.png';
import steel from '../Assets/steelHome.png';
import reformerTubes from '../Assets/reformerTubesHome.png'
import lubricants from '../Assets/lubricantsHome.png';
import oilRecovery from '../Assets/oilRecoveryHome.png'
import paints from '../Assets/paintsHome.jpg'
import utmaps from '../Assets/newut.jpeg';
import ports from "../Assets/ports.png";
import ztar from "../Assets/Ztar.png";
import newpage from '../Assets/newpage.png';
import trophy from '../Assets/trophy.png';
import client from '../Assets/client.png';
import real from '../Assets/real.png';
import solution from '../Assets/solution.png';
import time from '../Assets/time.png'; 
import sg from '../Brand/sg.png';
import tata from '../Brand/tata.png';
import lam from '../Brand/lam.png';
import ind from '../Brand/ind.png';
import bharat from '../Brand/bharat.png';
import ved from '../Brand/ved.png';
import drdo from '../Brand/drdo.png';
import cumi from '../Brand/cumi.png';
import epri from '../Brand/epri.png';
import skf from '../Brand/skf.png';
import schneider from '../Brand/schneider.png';
import reliance from '../Brand/reliance.png';
import newbgcropped from '../Assets/newbgcropped.png';
import sensor from '../Assets/sensor.png';
import iot from '../Assets/iot.png';
import grp from '../Assets/Group.png';
import zero from '../Assets/zero.png';
import ai from '../Assets/ai.png';
import tool from '../Assets/tool.png';
import line from '../Assets/underline.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { GiWaterSplash } from "react-icons/gi";
import { MdOutlineSensors } from "react-icons/md";
import { SiBlueprint } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
  
  const [clickedImage, setClickedImage] = useState(aluminum);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [overlay, setOverlay] = useState(false);
  const [utmapsBadge, setUtmapsBadge] = useState(false);
  const [portsBadge, setPortsBadge] = useState(false);
  const [ztarBadge, setZtarBadge] = useState(false);
  const [renderIconMenu, setRenderIconMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const coverImageRef = useRef(null);

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };
  
  const settings = {
    slidesToShow: 1,
    rows: 2,
    slidesPerRow: 6,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 2,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 3,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  // condition to display icon menu
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(!entry.isIntersecting)
        {
          setRenderIconMenu(true);
        }
        else
        {
          setRenderIconMenu(false);
        }
      });
    },options);

    observer.observe(coverImageRef.current);

    return () => {
      observer.disconnect();
    }
  }, []);

  // intersection observer, indicates the section in the screen
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if(ref.current)
        {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const handleSectionScroll = (ref) => {
    scrollToSection(ref);
  };
 
  const scrollToSection = (ref) => {
    const navbarHeight = window.innerHeight * 0.1; // 10vh to account for navbar
    const sectionTop = ref.current.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = sectionTop - navbarHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };
  
  const handleOverlayEnter = () =>
  {
    setOverlay(true);
  }

  const handleOverlayLeave = () => {
    setOverlay(false);
  };

  const handleUtmapsBadgeEnter = () =>
  {
    setUtmapsBadge(true);
  };

  const handleUtmapsBadgeLeave = () => {
    setUtmapsBadge(false);
  };

  const handlePortsBadgeEnter = () => {
    setPortsBadge(true);
  };

  const handlePortsBadgeLeave = () => {
    setPortsBadge(false);
  };

  const handleZtarBadgeEnter = () => {
    setZtarBadge(true);
  };

  const handleZtarBadgeLeave = () => {
    setZtarBadge(false);
  };

  const handleImageChange = (event) => {
    
    switch (event.target.id) {
      case "aluminum":
        setClickedImage(aluminum);
        break;

      case "steel":
        setClickedImage(steel);
        break;

      case "refiniries":
        setClickedImage(reformerTubes);
        break;

      case "lubricants":
        setClickedImage(lubricants);
        break;

      case "oilRecovery":
        setClickedImage(oilRecovery);
        break;

      case "paints":
        setClickedImage(paints);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    AOS.init({duration: 1500});
  },[]);

  return (
    <div className="w-full overflow-hidden">
      <div className="h-[10vh]">{/* space for navbar */}</div>
      {/* cover image */}
      <section
        className="relative h-[60vh] md:h-[70vh] xl:h-[90vh] w-full shadow-white shadow-2xl"
        ref={coverImageRef}
      >
        <img
          src={newpage}
          alt="cover image"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl text-white font-medium md:font-semibold gap-2 items-center justify-center xl:items-start xl:justify-start m-[8%]">
          <div className="flex xl:flex-col gap-2 md:gap-4">
            <div data-aos="slide-right">Prevent</div>
            <div data-aos="slide-right">Unplanned</div>
          </div>
          <div data-aos="slide-right">Downtime</div>
          <div
            className="text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-xl mt-2 font-normal md:font-medium"
            data-aos="slide-right"
          >
            "The Disruptive Ultrasonic Waveguide Technology"
          </div>
        </div>
      </section>
      {/* bottom text */}
      <div
        className="text-center font-semibold text-[40px] md:text-[90px] 2xl:text-[120px] -mt-[20px] md:-mt-[50px] 2xl:-mt-[65px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white, rgb(209, 213, 219))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        XYMA ANALYTICS
      </div>

      {/* icon menu */}
      {renderIconMenu && (
        <div
          className="hidden border border-r-orange-400 border-t-orange-400 border-b-orange-400 bg-white z-10 fixed left-0 top-1/2 transform -translate-y-1/2 text-xl px-2 md:flex flex-col gap-12 py-4 rounded-r-2xl"
          data-aos=""
        >
          <div
            onClick={() => handleSectionScroll(sectionRefs.section1)}
            className={`cursor-pointer ${
              activeSection === "section1" ? "text-orange-400" : "text-gray-400"
            }`}
          >
            <GiWaterSplash size={25} />
          </div>
          <div
            onClick={() => handleSectionScroll(sectionRefs.section2)}
            className={`cursor-pointer ${
              activeSection === "section2" ? "text-orange-400" : "text-gray-400"
            }`}
          >
            <MdOutlineSensors size={25} />
          </div>
          <div
            onClick={() => handleSectionScroll(sectionRefs.section3)}
            className={`cursor-pointer ${
              activeSection === "section3" ? "text-orange-400" : "text-gray-400"
            }`}
          >
            <SiBlueprint size={25} />
          </div>
          <div
            onClick={() => handleSectionScroll(sectionRefs.section4)}
            className={`cursor-pointer ${
              activeSection === "section4" ? "text-orange-400" : "text-gray-400"
            }`}
          >
            <HiUserGroup size={25} />
          </div>
        </div>
      )}

      {/* elements section */}
      <section id="section1" ref={sectionRefs.section1} className="pt-1">
        {/* text with underline */}
        <div className="flex justify-center items-center mb-4 md:mb-6 mt-4 md:mt-8 lg:mt-12 lg:mb-16 mx-[5%] md:mx-[8%] xl:mx-[5%]">
          <div className="md:flex flex-wrap justify-center gap-2 text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold text-center">
            <div>Impact&nbsp;of&nbsp;discrete&nbsp;inaccurate</div>
            <div>
              <div>Process&nbsp;parameter&nbsp;measurements</div>
              <img className=" w-full h-2" src={line}></img>
            </div>
          </div>
        </div>
        {/* elements cards */}
        <div className="md:flex mx-[5%] xl:mx-[8%] mb-8 md:mb-16 lg:mb-24 2xl:mb-32">
          {/* list of elements */}
          <div
            className="w-full overflow-auto md:w-[14%] text-gray-500 flex items-center mb-2 md:mb-0 md:items-start md:justify-start md:flex-col text-sm lg:text-lg xl:text-base 2xl:text-2xl font-medium"
            style={{ scrollbarWidth: "none" }}
          >
            <div >
              <div
                className={`md:w-full cursor-pointer p-1 mb-1 flex ${
                  clickedImage === aluminum && "text-[#013872] font-bold"
                }`}
                id="aluminum"
                onClick={handleImageChange}
              >
                {clickedImage === aluminum && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Aluminum</div>
              </div>
              {clickedImage === aluminum && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>

            <div >
              <div
                className={`md:w-full flex p-1 mb-1 cursor-pointer ${
                  clickedImage === steel && "text-[#013872] font-bold"
                }`}
                id="steel"
                onClick={handleImageChange}
              >
                {clickedImage === steel && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Steel</div>
              </div>
              {clickedImage === steel && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>

            <div >
              <div
                className={`md:w-full flex p-1 mb-1 cursor-pointer ${
                  clickedImage === reformerTubes && "text-[#013872] font-bold"
                }`}
                id="refiniries"
                onClick={handleImageChange}
              >
                {clickedImage === reformerTubes && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Refiniries</div>
              </div>
              {clickedImage === reformerTubes && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>

            <div >
              <div
                className={`md:w-full flex p-1 mb-1 cursor-pointer ${
                  clickedImage === lubricants && "text-[#013872] font-bold"
                }`}
                id="lubricants"
                onClick={handleImageChange}
              >
                {clickedImage === lubricants && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Lubricants</div>
              </div>
              {clickedImage === lubricants && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>

            <div >
              <div
                className={`md:w-full flex p-1 mb-1 cursor-pointer ${
                  clickedImage === oilRecovery && "text-[#013872] font-bold"
                }`}
                id="oilRecovery"
                onClick={handleImageChange}
              >
                {clickedImage === oilRecovery && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Oil&nbsp;Recovery</div>
              </div>
              {clickedImage === oilRecovery && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>

            <div >
              <div
                className={`md:w-full flex p-1 mb-1 cursor-pointer ${
                  clickedImage === paints && "text-[#013872] font-bold"
                }`}
                id="paints"
                onClick={handleImageChange}
              >
                {clickedImage === paints && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Paints</div>
              </div>
              {clickedImage === paints && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>
          </div>

          {/* aluminum content */}
          {clickedImage === aluminum && (
            <>
              {/* element image*/}
              <div
                className=" flex flex-col items-center justify-center relative w-full md:w-[45%] lg:w-[50%] px-4"
                data-aos="slide-right"
              >
                <img
                  src={aluminum}
                  alt="aluminum"
                  className="shadow-white shadow-2xl rounded-2xl object-cover"
                />
                <div
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ALUMINUM
                </div>
              </div>
              {/* elements description */}
              <div
                className=" w-full md:w-[41%] lg:w-[36%] flex items-center justify-center p-4"
                data-aos="slide-left"
              >
                <div
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  10°C deviation in ideal bath temperature reduces current
                  efficiency, promotes anode effect, and increases PFC emissions
                </div>
              </div>
            </>
          )}

          {/* steel content */}
          {clickedImage === steel && (
            <>
              {/* element image*/}
              <div
                className=" flex flex-col items-center justify-center relative w-full md:w-[45%] lg:w-[50%] px-4"
                data-aos="fade-up"
              >
                <img
                  src={steel}
                  alt="steel"
                  className="shadow-white shadow-2xl rounded-2xl object-cover"
                />
                <div
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  STEEL
                </div>
              </div>
              {/* elements description */}
              <div
                className=" w-full md:w-[41%] lg:w-[36%] flex items-center justify-center p-4"
                data-aos="fade-up"
              >
                <div
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  $5.1M would be worth of steel produced by extending ladle life
                  for 1 set of cycle
                </div>
              </div>
            </>
          )}

          {/* refiniries content */}
          {clickedImage === reformerTubes && (
            <>
              {/* element image*/}
              <div
                className=" flex flex-col items-center justify-center relative w-full md:w-[45%] lg:w-[50%] px-4"
                data-aos="fade-up"
              >
                <img
                  src={reformerTubes}
                  alt="reformerTubes"
                  className="shadow-white shadow-2xl rounded-2xl object-cover"
                />
                <div
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  REFINIRIES
                </div>
              </div>
              {/* elements description */}
              <div
                className=" w-full md:w-[41%] lg:w-[36%] flex items-center justify-center p-4"
                data-aos="fade-up"
              >
                <div
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  20°C increase in design temperature reduces operational life
                  of reformer tubes by 50%
                </div>
              </div>
            </>
          )}

          {/* lubricants content */}
          {clickedImage === lubricants && (
            <>
              {/* element image*/}
              <div
                className=" flex flex-col items-center justify-center relative w-full md:w-[45%] lg:w-[50%] px-4"
                data-aos="fade-up"
              >
                <img
                  src={lubricants}
                  alt="lubricants"
                  className="shadow-white shadow-2xl rounded-2xl object-cover"
                />
                <div
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  LUBRICANTS
                </div>
              </div>
              {/* elements description */}
              <div
                className=" w-full md:w-[41%] lg:w-[36%] flex items-center justify-center p-4"
                data-aos="fade-up"
              >
                <div
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  30% of maintenance budget is affected by lubricants.
                </div>
              </div>
            </>
          )}

          {/* oil recovery content */}
          {clickedImage === oilRecovery && (
            <>
              {/* element image*/}
              <div
                className=" flex flex-col items-center justify-center relative w-full md:w-[45%] lg:w-[50%] px-4"
                data-aos="fade-up"
              >
                <img
                  src={oilRecovery}
                  alt="oilRecovery"
                  className="shadow-white shadow-2xl rounded-2xl object-cover"
                />
                <div
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  OIL&nbsp;RECOVERY
                </div>
              </div>
              {/* elements description */}
              <div
                className=" w-full md:w-[41%] lg:w-[36%] flex items-center justify-center p-4"
                data-aos="fade-up"
              >
                <div
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  1.3 lakhs/day would be the worth of injection polymer of
                  unknown viscosity flooded in EOR due to unavailability of
                  continuous viscosity measurement technique.
                </div>
              </div>
            </>
          )}

          {/* paints content */}
          {clickedImage === paints && (
            <>
              {/* element image*/}
              <div
                className=" flex flex-col items-center justify-center relative w-full md:w-[45%] lg:w-[50%] px-4"
                data-aos="fade-up"
              >
                <img
                  src={paints}
                  alt="paints"
                  className="shadow-white shadow-2xl rounded-2xl object-cover"
                />
                <div
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  PAINTS
                </div>
              </div>
              {/* elements description */}
              <div
                className=" w-full md:w-[41%] lg:w-[36%] flex items-center justify-center p-4"
                data-aos="fade-up"
              >
                <div
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  Batch non-homogeneity due to unavailability of continuous
                  viscosity measurement technique.
                </div>
              </div>
            </>
          )}

          {/* <div
            className=" flex flex-col items-center justify-center relative w-full md:w-[45%] lg:w-[50%] px-4"
            data-aos="slide-right"
          >
            {clickedImage && (
              <div>
                <img
                  src={clickedImage}
                  alt="Clicked Image"
                  className="shadow-white shadow-2xl rounded-2xl object-cover"
                />
              </div>
            )}
            <div
              className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {imageName}
            </div>
          </div> */}
          {/* elements description */}
          {/* <div
            className=" w-full md:w-[41%] lg:w-[36%] flex items-center justify-center p-4"
            data-aos="slide-left"
          >
            {clickedImage && (
              <div
                className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                style={{
                  color: "transparent",
                  background:
                    "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                  backgroundClip: "text",
                  width: "100%",
                }}
              >
                {imageDesc}
              </div>
            )}
          </div> */}
        </div>
      </section>

      {/* semi circle component */}
      <section
        id="section2"
        className="  flex flex-col items-center justify-center relative mb-8 xl:h-[95vh]"
        ref={sectionRefs.section2}
      >
        <div
          className={`hidden xl:block w-full h-full bg-black absolute transition-opacity duration-500 ${
            overlay ? "opacity-40" : "opacity-0"
          }`}
        ></div>

        <div className="flex justify-center relative text-center mb-1 text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold mx-[5%]">
          <div className="flex flex-wrap justify-center gap-1">
            <div>Patented Ultrasonic </div>
            <div>
              <div>Waveguide Sensors:</div>
              <img className=" w-full h-2 -z-10" src={line}></img>
            </div>
          </div>
        </div>
        <div className="text-center text-xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-semibold mb-2 md:mb-4 2xl:mb-8">
          Xyma Analytics
        </div>

        <div className=" mt-3 px-4 md:px-0 md:flex flex-wrap justify-center gap-2 text-[#FE7D18]">
          <div>
            <div
              className="mb-2 border border-[#FE9D1C] rounded-full cursor-pointer flex p-1 px-2 gap-2 bg-[#FFF6EA] relative"
              onMouseEnter={() => {
                handleOverlayEnter();
                handleUtmapsBadgeEnter();
              }}
              onMouseLeave={() => {
                handleOverlayLeave();
                handleUtmapsBadgeLeave();
              }}
            >
              <div>
                <img
                  className="object-cover object-top rounded-full w-6 h-6"
                  src={utmaps}
                />
              </div>
              <div className="text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl font-semibold">
                μTMapS: Multi-Point Temperature
              </div>
            </div>
            <div className="flex justify-end md:justify-normal">
              {utmapsBadge && (
                <div className="absolute bg-white border border-[#FE9D1C] rounded-xl w-[70%] md:w-[500px] z-10 text-gray-500 md:flex">
                  <div className="bg-white rounded-t-xl md:rounded-l-xl h-[150px] w-full md:w-[40%] p-1">
                    <div className="w-full h-full bg-black rounded-xl flex justify-center ">
                      <img
                        className="object-cover object-top rounded-xl w-[50%] md:w-[75%] h-full"
                        src={utmaps}
                      />
                    </div>
                  </div>
                  <div className="bg-white w-full md:w-[60%] p-1 rounded-b-xl md:rounded-r-xl">
                    <div className="text-base font-bold text-black mb-1">
                      μTMapS & μSTMapS
                    </div>
                    <div className="text-xs text-justify">
                      μTMapS & μSTMapS are IIoT-enabled temperature measurement
                      temperature profiling sensors that captures continuos
                      measurements at multiple points with asingle customized
                      waveguide with multiple configurations in contrast to
                      based thermocouples/RTDs or contactless IR guns
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <div
              className="mb-2 border border-[#FE9D1C] rounded-full cursor-pointer flex p-1 px-2 gap-2 bg-[#FFF6EA] relative"
              onMouseEnter={() => {
                handleOverlayEnter();
                handlePortsBadgeEnter();
              }}
              onMouseLeave={() => {
                handleOverlayLeave();
                handlePortsBadgeLeave();
              }}
            >
              <div>
                <img
                  className="object-cover object-top rounded-full w-6 h-6 bg-black"
                  src={ports}
                />
              </div>
              <div className="text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl font-semibold">
                PoRTS: Multi-Parameter Viscosity, Density and Temperature
              </div>
            </div>
            <div className="flex justify-end md:justify-normal">
              {portsBadge && (
                <div className="absolute bg-white border border-[#FE9D1C] rounded-xl w-[70%] md:w-[500px] z-10  text-gray-500 md:flex">
                  <div className="bg-white rounded-t-xl md:rounded-l-xl h-[150px] w-full md:w-[40%] p-1">
                    <div className="w-full h-full bg-black rounded-xl flex justify-center ">
                      <img
                        className="object-cover object-top rounded-xl w-[50%] md:w-[75%] h-full"
                        src={ports}
                      />
                    </div>
                  </div>
                  <div className="bg-white w-full md:w-[60%] p-1 rounded-b-xl md:rounded-r-xl">
                    <div className="text-base font-bold text-black mb-1">
                      PoRTS
                    </div>
                    <div className="text-xs text-justify">
                      PoRTS is an invasive/non-invasive based IIoT-enabled
                      rheology and temperature mesurement sensor that
                      continuously captures multiple parameters such as
                      viscosity, density and temperature with a single waveguide
                      unlike discrete measurement with thermocouple/RTDs or
                      discrete measurements with sampling from viscometer and
                      density meter.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className="mb-2 border border-[#FE9D1C] rounded-full cursor-pointer flex p-1 px-2 gap-2 bg-[#FFF6EA] relative"
              onMouseEnter={() => {
                handleOverlayEnter();
                handleZtarBadgeEnter();
              }}
              onMouseLeave={() => {
                handleOverlayLeave();
                handleZtarBadgeLeave();
              }}
            >
              <div>
                <img
                  className="object-cover object-top rounded-full w-6 h-6 bg-black"
                  src={ztar}
                />
              </div>
              <div className="text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl font-semibold">
                Ztar: Contact/Non-contact based Level
              </div>
            </div>

            <div className="flex justify-end md:justify-normal">
              {ztarBadge && (
                <div className="absolute bg-white border border-[#FE9D1C] rounded-xl w-[70%] md:w-[350px] z-10 text-gray-500 md:flex">
                  <div className="bg-white rounded-t-xl md:rounded-l-xl h-[150px] w-full md:w-[40%] p-1">
                    <div className="w-full h-full bg-black rounded-xl flex justify-center ">
                      <img
                        className="object-cover object-top rounded-xl w-[50%] md:w-[75%] h-full"
                        src={ztar}
                      />
                    </div>
                  </div>
                  <div className="bg-white w-full md:w-[60%] p-1 rounded-b-xl md:rounded-r-xl">
                    <div className="text-base font-bold text-black mb-1">
                      Ztar
                    </div>
                    <div className="text-xs text-justify">
                      Ztar is a contact/contactless IIoT-enabled level that
                      captures continuous level across any hazardous environment
                      with accuracy in contrast to radar-based level measurement
                      sensors.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative block w-[90%] md:w-[50%] xl:w-[40%] mt-2 2xl:w-[50%] ">
          <img
            className="w-full -z-10"
            data-aos="zoom-in-up"
            src={newbgcropped}
            alt="Background Image"
          />
          <div className="absolute flex text-right top-[65%] -left-[1%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="slide-right"
                src={sensor}
                alt="Sensor Image"
                onMouseEnter={() => {
                  setHoveredItem("sensor");
                  handleOverlayEnter();
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  handleOverlayLeave();
                }}
              />
            </div>
            {hoveredItem === "sensor" && (
              <div className="text-[10px] text-xs absolute top-1/2 left-[105%] md:left-auto md:right-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full">
                Sensor&nbsp;Life&nbsp;up&nbsp;to 50,000 hrs
              </div>
            )}
          </div>
          <div className="absolute flex text-right top-[30%] left-[4%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="slide-right"
                src={iot}
                alt="Sensor"
                onMouseEnter={() => {
                  setHoveredItem("iot");
                  handleOverlayEnter();
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  handleOverlayLeave();
                }}
              />
            </div>
            {hoveredItem === "iot" && (
              <div className="text-[10px] text-xs absolute top-1/2 left-[105%] md:left-auto md:right-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full">
                Multi - Point Measurement
              </div>
            )}
          </div>
          <div className="absolute flex text-right top-[3%] left-[20%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="slide-right"
                src={grp}
                alt="Sensor Image"
                onMouseEnter={() => {
                  setHoveredItem("grp");
                  handleOverlayEnter();
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  handleOverlayLeave();
                }}
              />
            </div>
            {hoveredItem === "grp" && (
              <div className="text-[10px] text-xs absolute top-1/2 left-[105%] md:left-auto md:right-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full">
                Energy&nbsp;Management System-IoT
              </div>
            )}
          </div>
          <div className="absolute flex text-right top-[3%] right-[20%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="slide-left"
                src={zero}
                alt="Sensor Image"
                onMouseEnter={() => {
                  setHoveredItem("zero");
                  handleOverlayEnter();
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  handleOverlayLeave();
                }}
              />
            </div>
            {hoveredItem === "zero" && (
              <div className="text-[10px] text-xs absolute top-1/2 right-[105%] md:right-auto md:left-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full text-left">
                Zero&nbsp;Manual Intervention
              </div>
            )}
          </div>
          <div className="absolute flex text-right top-[30%] right-[4%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="slide-left"
                src={ai}
                alt="Sensor Image"
                onMouseEnter={() => {
                  setHoveredItem("ai");
                  handleOverlayEnter();
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  handleOverlayLeave();
                }}
              />
            </div>
            {hoveredItem === "ai" && (
              <div className="text-[10px] text-xs absolute top-1/2 right-[105%] md:right-auto md:left-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full text-left">
                AI&nbsp;Enable&nbsp;Corrective Actions
              </div>
            )}
          </div>
          <div className="absolute flex text-right top-[65%] -right-[1%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="slide-left"
                src={tool}
                alt="Sensor Image"
                onMouseEnter={() => {
                  setHoveredItem("tool");
                  handleOverlayEnter();
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  handleOverlayLeave();
                }}
              />
            </div>
            {hoveredItem === "tool" && (
              <div className="text-[10px] text-xs absolute top-1/2 right-[105%] md:right-auto md:left-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full text-left">
                Retrofit Benifits
              </div>
            )}
          </div>
        </div>
      </section>

      {/* grid card section */}
      <section id="section3" ref={sectionRefs.section3} className=" ">
        <div
          className="text-white py-4 md:pb-10 md:pt-10"
          style={{
            background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
          }}
        >
          <div className=" flex justify-center items-center  xl:mx-[8%]">
            <div className="md:flex gap-2 text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold text-center">
              <div>Making a difference with</div>
              <div className="mx-[8%] md:mx-0 flex flex-col items-center">
                <div>the Approach</div>
                <img className="w-full h-2" src={line}></img>
              </div>
            </div>
          </div>

          <div className=" mt-4 mx-[5%] xl:mx-[8%] flex flex-col md:flex-row p-4 gap-3">
            <div
              className="w-full md:w-[35%] p-4  rounded-lg flex flex-col gap-2 text-center py-8 md:py-16 lg:py-24 justify-center"
              data-aos="flip-right"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
            >
              <div className=" flex justify-center">
                <img className="w-[75px]" src={trophy} alt="Trophy icon" />
              </div>
              <div className="text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-semibold">
                <div>Award Winning</div>
                <div>Technology</div>
              </div>

              <div className="text-xs lg:text-base 2xl:text-lg">
                The team leverages state-of-the-art, award-winning, ultrasonic
                waveguide technology developed through 25+ years of research and
                development.
              </div>
            </div>

            <div className=" w-full md:w-[65%] flex flex-col gap-3">
              <div className=" flex flex-col md:flex-row gap-3 h-auto md:h-1/2">
                {/* white box 1 */}
                <div
                  className=" rounded-lg bg-white w-full md:w-1/2 p-2 py-4 flex flex-col gap-2"
                  data-aos="flip-up"
                >
                  <div className="flex gap-2 ">
                    <div className=" flex items-center justify-center">
                      <img className="w-12 " src={client} alt="Client icon" />
                    </div>
                    <div className=" flex items-center text-black text-lg  lg:text-2xl 2xl:text-3xl font-semibold">
                      Client-Centric
                    </div>
                  </div>
                  <div className=" text-[#60646C] text-left text-sm lg:text-base 2xl:text-lg">
                    The Solution is provided based on in-depth understanding of
                    clients needs addressing the relevant challenges.
                  </div>
                </div>

                {/* white box 2 */}
                <div
                  className=" rounded-lg bg-white w-full md:w-1/2 p-2 py-4 flex flex-col gap-2"
                  data-aos="flip-up"
                >
                  <div className="flex gap-2 ">
                    <div className=" flex items-center justify-center">
                      <img className="w-12 " src={solution} alt="solution" />
                    </div>
                    <div className=" flex items-center text-black text-lg  lg:text-2xl 2xl:text-3xl font-semibold">
                      Customization for Solutions
                    </div>
                  </div>
                  <div className=" text-[#60646C] text-left text-sm lg:text-base 2xl:text-lg">
                    Gain immediate access to valuable data through the
                    technology's adaptability with material selection and
                    configuration for waveguides.
                  </div>
                </div>
              </div>

              <div className=" flex flex-col md:flex-row gap-3 h-auto md:h-1/2">
                {/* white box 3 */}
                <div
                  className=" rounded-lg bg-white w-full md:w-1/2 p-2 py-4 flex flex-col gap-2"
                  data-aos="flip-up"
                >
                  <div className="flex gap-2 ">
                    <div className=" flex items-center justify-center">
                      <img className="w-12 " src={real} alt="real" />
                    </div>
                    <div className=" flex items-center text-black text-lg  lg:text-2xl 2xl:text-3xl font-semibold">
                      Real-Time Insights
                    </div>
                  </div>
                  <div className=" text-[#60646C] text-left text-sm lg:text-base 2xl:text-lg">
                    Gain immediate access to valuable data through our
                    supervised sensing capabilities, empowering informed
                    decision-making.
                  </div>
                </div>

                {/* white box 4 */}
                <div
                  className=" rounded-lg bg-white w-full md:w-1/2 p-2 py-4 flex flex-col gap-2"
                  data-aos="flip-up"
                >
                  <div className="flex gap-2 ">
                    <div className=" flex items-center justify-center">
                      <img className="w-12 " src={time} alt="time" />
                    </div>
                    <div className=" flex items-center text-black text-lg  lg:text-2xl 2xl:text-3xl font-semibold">
                      On-Time Delivery
                    </div>
                  </div>
                  <div className=" text-[#60646C] text-left text-sm lg:text-base 2xl:text-lg">
                    Committed to adhering to project timelines and satisfaction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-12 w-full"
          style={{
            background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
          }}
        >
          <div className="sliding-text-container " data-aos="slide-left">
            <div className="flex">
              <div className="mt-2.5 sliding-text text-white gap-1">
                <div>Continuous Wear Monitoring &#10039;</div>
                <div>
                  Continuous Multi-point temperature measurements &#10039;
                </div>
                <div>Continuous multi-parameter measurements &#10039;</div>
                <div>
                  Continuous contact & non-contact based level
                  measurement&#10039;
                </div>

                {/* duplicate */}
                <div>Continuous Wear Monitoring &#10039;</div>
                <div>
                  Continuous Multi-point temperature measurements &#10039;
                </div>
                <div>Continuous multi-parameter measurements &#10039;</div>
                <div>
                  Continuous contact & non-contact based level
                  measurement&#10039;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* clients section */}
      <section id="section4" ref={sectionRefs.section4} className=" ">
        <div className="flex flex-col justify-center items-center mt-8 md:mt-20 md:pt-4">
          <div className="text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold text-center">
            Xyma Analytics' Clients
          </div>
          <div className="flex justify-center items-center mt-3 text-center text-[#60646C] mx-[5%] md:mx-[8%] xl:mx-[12%] text-sm md:text-base lg:text-lg 2xl:text-xl font-medium">
            Committed to client satisfaction with constant support at all
            stages, our aim is to aid Industry 4.0 transformation while reducing
            environmental impact, increasing cost savings, and enhancing process
            efficiency.
          </div>
        </div>

        {/* client logo carousel*/}
        <div className="mt-16 mb-4 md:mx-[8%] ">
          <Slider {...settings}>
            <div className="">
              <img src={sg} className="mx-auto max-w-[200px] h-auto" />
            </div>

            <div>
              <img src={tata} className="mx-auto max-w-[200px] h-auto" />
            </div>

            <div className=" ">
              <img src={drdo} className="mx-auto max-w-[200px] h-auto" />
            </div>

            <div>
              <img src={cumi} className="mx-auto max-w-[200px] h-auto" />
            </div>

            <div>
              <img src={lam} className="mx-auto max-w-[200px] h-auto" />
            </div>

            <div>
              <img src={ind} className="mx-auto max-w-[200px] h-auto" />
            </div>

            <div>
              <img src={epri} className="mx-auto max-w-[200px] h-auto" />
            </div>

            <div>
              <img src={skf} className="mx-auto max-w-[200px] h-auto" />
            </div>

            <div className="flex">
              <img src={bharat} className="mx-auto max-w-[200px] h-auto" />
            </div>

            <div>
              <img src={ved} className="mx-auto max-w-[200px] h-auto" />
            </div>

            <div>
              <img src={schneider} className="mx-auto max-w-[200px] h-auto" />
            </div>

            <div>
              <img src={reliance} className="mx-auto max-w-[200px] h-auto" />
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;