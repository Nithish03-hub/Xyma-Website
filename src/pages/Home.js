import React, { useEffect, useState } from 'react';
import aluminum from '../Assets/aluminum.png';
import steel from '../Assets/steel.png';
import reformerTubes from '../Assets/reformerTubes.png'
import lubricants from '../Assets/lubricants.png';
import oilRecovery from '../Assets/oilRecovery.png'
import paints from '../Assets/paints.png'
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
import newline from '../Assets/newline.png';
import second from '../Assets/secondline.png';
import old from '../Assets/old.png';
import newbgcropped from '../Assets/newbgcropped.png';
import sensor from '../Assets/sensor.png';
import iot from '../Assets/iot.png';
import grp from '../Assets/Group.png';
import zero from '../Assets/zero.png';
import ai from '../Assets/ai.png';
import tool from '../Assets/tool.png';
import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {

  const imageDescription = {
    Aluminum:
      "10°C deviation in ideal bath temperature reduces current efficiency, promotes anode effect, and increases PFC emissions ",
    Steel:
      "$5.1M would be worth of steel produced by extending ladle life for 1 set of cycle",
    Refiniries:
      "20°C increase in design temperature reduces operational life of reformer tubes by 50%",
    Lubricants: "30% of maintenance budget is affected by lubricants.",
    OilRecovery:
      "1.3 lakhs/day would be the worth of injection polymer of unknown viscosity flooded in EOR due to unavailability of continuous viscosity measurement technique.",
    Paints:
      "Batch non-homogeneity due to unavailability of continuous viscosity measurement technique.",
  };
  
  const [clickedImage, setClickedImage] = useState(aluminum);
  const [imageDesc, setImageDesc] = useState(imageDescription.Aluminum);
  const [imageName, setImageName] = useState('ALUMINUM');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [overlay, setOverlay] = useState(false);
  const [utmapsBadge, setUtmapsBadge] = useState(false);
  const [portsBadge, setPortsBadge] = useState(false);
  const [ztarBadge, setZtarBadge] = useState(false);

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
        setImageDesc(imageDescription.Aluminum);
        setImageName('ALUMINUM');
        break;

      case "steel":
        setClickedImage(steel);
        setImageDesc(imageDescription.Steel);
        setImageName("STEEL");
        break;

      case "refiniries":
        setClickedImage(reformerTubes);
        setImageDesc(imageDescription.Refiniries);
        setImageName("REFINIRIES");
        break;

      case "lubricants":
        setClickedImage(lubricants);
        setImageDesc(imageDescription.Lubricants);
        setImageName("LUBRICANTS");
        break;

      case "oilRecovery":
        setClickedImage(oilRecovery);
        setImageDesc(imageDescription.OilRecovery);
        setImageName("OIL RECOVERY");
        break;

      case "paints":
        setClickedImage(paints);
        setImageDesc(imageDescription.Paints);
        setImageName("PAINTS");
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
      <div className="relative h-[60vh] sm:h-[90vh] w-full shadow-white shadow-2xl">
        <img
          src={newpage}
          alt="cover image"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start mt-28 text-4xl sm:text-6xl text-white font-semibold ml-12 sm:ml-24 gap-2 2xl:text-8xl">
          <div data-aos="slide-right">Prevent</div>
          <div data-aos="slide-right">Unplanned</div>
          <div data-aos="slide-right">Downtime</div>
          <div
            className="text-xs sm:text-sm mt-2 2xl:text-base"
            data-aos="slide-right"
          >
            "The Disruptive Ultrasonic Waveguide Technology"
          </div>
        </div>
      </div>
      {/* bottom text */}
      <div className="w-full h-[10vh] text-center text-gray-300 font-semibold text-[40px] sm:text-[90px] 2xl:text-[120px] -mt-[20px] sm:-mt-[50px] 2xl:-mt-[65px]">
        XYMA ANALYTICS
      </div>
      {/* text with underline */}
      <div className="flex justify-center items-center mt-4 sm:mt-20 2xl:mt-28 h-[10vh]">
        <div
          className="text-xl sm:text-3xl 2xl:text-5xl font-semibold text-center"
          data-aos="zoom-in-up"
        >
          Impact of discrete inaccurate Process parameter measurements
          <img
            className="w-[200px] sm:w-auto 2xl:w-[800px] h-2 ml-[30%] sm:ml-96 2xl:ml-[600px]"
            src={newline}
          ></img>
        </div>
      </div>
      \
      <div className="w-full h-[80vh]">
        {/* elements cards */}
        <div className="h-[80vh] sm:h-[60vh] 2xl:h-[70vh] sm:flex pt-8 sm:px-36 2xl:px-16">
          {/* list of elements */}
          <div
            className="w-full overflow-auto sm:p-4 sm:w-[15%] h-[8%] sm:h-full text-gray-500 2xl:text-3xl flex items-center sm:items-start sm:justify-start sm:flex-col"
            style={{ scrollbarWidth: "none" }}
          >
            <div data-aos="zoom-in-up">
              <div
                className={`sm:w-full cursor-pointer p-1 mb-1 flex ${
                  clickedImage === aluminum && "text-[#013872] font-medium"
                }`}
                id="aluminum"
                onClick={handleImageChange}
              >
                {clickedImage === aluminum && (
                  <div className="invisible sm:visible border border-blue-800"></div>
                )}
                <div className="ml-1 -z-10">Aluminum</div>
              </div>
              {clickedImage === aluminum && (
                <div className="border border-blue-800 sm:hidden" />
              )}
            </div>

            <div data-aos="zoom-in-up">
              <div
                className={`sm:w-full flex p-1 mb-1 cursor-pointer ${
                  clickedImage === steel && "text-[#013872] font-medium"
                }`}
                id="steel"
                onClick={handleImageChange}
              >
                {clickedImage === steel && (
                  <div className="invisible sm:visible border border-blue-800"></div>
                )}
                <div className="ml-1 -z-10">Steel</div>
              </div>
              {clickedImage === steel && (
                <div className="border border-blue-800 sm:hidden" />
              )}
            </div>

            <div data-aos="zoom-in-up">
              <div
                className={`sm:w-full flex p-1 mb-1 cursor-pointer ${
                  clickedImage === reformerTubes && "text-[#013872] font-medium"
                }`}
                id="refiniries"
                onClick={handleImageChange}
              >
                {clickedImage === reformerTubes && (
                  <div className="invisible sm:visible border border-blue-800"></div>
                )}
                <div className="ml-1 -z-10">Refiniries</div>
              </div>
              {clickedImage === reformerTubes && (
                <div className="border border-blue-800 sm:hidden" />
              )}
            </div>

            <div data-aos="zoom-in-up">
              <div
                className={`sm:w-full flex p-1 mb-1 cursor-pointer ${
                  clickedImage === lubricants && "text-[#013872] font-medium"
                }`}
                id="lubricants"
                onClick={handleImageChange}
              >
                {clickedImage === lubricants && (
                  <div className="invisible sm:visible border border-blue-800"></div>
                )}
                <div className="ml-1 -z-10">Lubricants</div>
              </div>
              {clickedImage === lubricants && (
                <div className="border border-blue-800 sm:hidden" />
              )}
            </div>

            <div data-aos="zoom-in-up">
              <div
                className={`sm:w-full flex p-1 mb-1 cursor-pointer ${
                  clickedImage === oilRecovery && "text-[#013872] font-medium"
                }`}
                id="oilRecovery"
                onClick={handleImageChange}
              >
                {clickedImage === oilRecovery && (
                  <div className="invisible sm:visible border border-blue-800"></div>
                )}
                <div className="ml-1 -z-10">Oil&nbsp;Recovery</div>
              </div>
              {clickedImage === oilRecovery && (
                <div className="border border-blue-800 sm:hidden" />
              )}
            </div>

            <div data-aos="zoom-in-up">
              <div
                className={`sm:w-full flex p-1 mb-1 cursor-pointer ${
                  clickedImage === paints && "text-[#013872] font-medium"
                }`}
                id="paints"
                onClick={handleImageChange}
              >
                {clickedImage === paints && (
                  <div className="invisible sm:visible border border-blue-800"></div>
                )}
                <div className="ml-1 -z-10">Paints</div>
              </div>
              {clickedImage === paints && (
                <div className="border border-blue-800 sm:hidden" />
              )}
            </div>
          </div>
          {/* element images */}
          <div
            className="w-full sm:w-[45%] 2xl:w-[50%] h-[61%] sm:h-full"
            data-aos="slide-right"
          >
            {clickedImage && (
              <div className="flex items-center justify-center h-full">
                <img
                  src={clickedImage}
                  alt="Clicked Image"
                  className="rounded-2xl h-[90%] w-[90%] shadow-white shadow-2xl z-10"
                />
              </div>
            )}
            <div className="text-center text-4xl 2xl:text-6xl font-bold text-gray-400 -mt-7 2xl:-mt-14">
              {imageName}
            </div>
          </div>
          {/* elements description */}
          <div
            className="w-full mt-4 sm:w-[40%] 2xl:w-[35%] h-[31%] sm:h-full flex items-center justify-center p-4"
            // data-aos={window.innerWidth <= 640 ? "slide-up" : "slide-left"}
            data-aos="slide-left"
          >
            {clickedImage && (
              <div
                className="text-2xl sm:text-3xl 2xl:text-5xl font-semibold text-center"
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
          </div>
        </div>
      </div>
      {/* semi circle component */}
      <section className="flex flex-col items-center justify-center h-[90vh] mt-8 relative">
        <div
          className={`h-full w-full bg-black absolute transition-opacity duration-500 ${
            overlay ? "opacity-40" : "opacity-0"
          }`}
        ></div>

        <div
          className="text-xl sm:text-3xl font-semibold relative 2xl:text-5xl w-full text-center -z-10"
          data-aos="zoom-in-up"
        >
          <p>
            Patented Ultrasonic Waveguide Sensors:
            <img
              className="w-[175px] sm:w-64 h-2 ml-44 sm:ml-[500px] 2xl:ml-[530px] 2xl:w-[500px]"
              src={old}
            ></img>
            <p style={{ textAlign: "center" }}>Xyma Analytics</p>
          </p>
        </div>
        <div className="mt-3 px-4 sm:px-0 sm:flex gap-2 text-[#FE7D18]">
          <div>
            <div
              className="mb-2 border border-[#FE9D1C] rounded-full cursor-pointer flex p-1 px-2 gap-2 bg-[#FFF6EA] relative"
              data-aos="slide-right"
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
              <div className="text-sm font-medium">
                μTMapS: Multi-Point Temperature
              </div>
            </div>
            {utmapsBadge && (
              <div className="absolute bg-white rounded-xl w-[92%] h-[150px] sm:w-[500px] z-10 text-gray-500 sm:flex">
                <div className="bg-white rounded-t-xl sm:rounded-l-xl h-[150px] w-full sm:w-[40%] p-1">
                  <div className="w-full h-full bg-black rounded-xl flex justify-center ">
                    <img
                      className="object-cover object-top rounded-xl w-[50%] sm:w-[75%] h-full"
                      src={utmaps}
                    />
                  </div>
                </div>
                <div className="bg-white w-full sm:w-[60%] p-1 rounded-b-xl sm:rounded-r-xl">
                  <div className="text-base font-bold text-black mb-1">
                    μTMapS & μSTMapS
                  </div>
                  <div className="text-xs text-justify">
                    μTMapS & μSTMapS are IIoT-enabled temperature measurement
                    temperature profiling sensors that captures continuos
                    measurements at multiple points with asingle customized
                    waveguide with multiple configurations in contrast to based
                    thermocouples/RTDs or contactless IR guns
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div
              className="mb-2 border border-[#FE9D1C] rounded-full cursor-pointer flex p-1 px-2 gap-2 bg-[#FFF6EA] relative"
              data-aos="zoom-in-up"
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
              <div className="text-sm font-medium">
                PoRTS: Multi-Parameter Viscosity, Density and Temperature
              </div>
            </div>
            {portsBadge && (
              <div className="absolute bg-white rounded-xl w-[92%] h-[150px] sm:w-[500px] z-10  text-gray-500 sm:flex">
                <div className="bg-white rounded-t-xl sm:rounded-l-xl h-[150px] w-full sm:w-[40%] p-1">
                  <div className="w-full h-full bg-black rounded-xl flex justify-center ">
                    <img
                      className="object-cover object-top rounded-xl w-[50%] sm:w-[75%] h-full"
                      src={ports}
                    />
                  </div>
                </div>
                <div className="bg-white w-full sm:w-[60%] p-1 rounded-b-xl sm:rounded-r-xl">
                  <div className="text-base font-bold text-black mb-1">
                    PoRTS
                  </div>
                  <div className="text-xs text-justify">
                    PoRTS is an invasive/non-invasive based IIoT-enabled
                    rheology and temperature mesurement sensor that continuously
                    captures multiple parameters such as viscosity, density and
                    temperature with a single waveguide unlike discrete
                    measurement with thermocouple/RTDs or discrete measurements
                    with sampling from viscometer and density meter.
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              className="mb-2 border border-[#FE9D1C] rounded-full cursor-pointer flex p-1 px-2 gap-2 bg-[#FFF6EA] relative"
              data-aos="slide-left"
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
              <div className="text-sm font-medium">
                Ztar: Contact/Non-contact based Level
              </div>
            </div>
            {ztarBadge && (
              <div className="absolute bg-white rounded-xl w-[92%] h-[150px] sm:w-[350px] z-10 text-gray-500 sm:flex">
                <div className="bg-white rounded-t-xl sm:rounded-l-xl h-[150px] w-full sm:w-[40%] p-1">
                  <div className="w-full h-full bg-black rounded-xl flex justify-center ">
                    <img
                      className="object-cover object-top rounded-xl w-[50%] sm:w-[75%] h-full"
                      src={ztar}
                    />
                  </div>
                </div>
                <div className="bg-white w-full sm:w-[60%] p-1 rounded-b-xl sm:rounded-r-xl">
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

        <div className="relative block w-[90%] h-[45%] sm:w-[45%] sm:h-[65%] mt-[40px] 2xl:w-[50%]">
          <img
            className="absolute w-full h-full -z-10"
            data-aos="zoom-in-up"
            src={newbgcropped}
            alt="Background Image"
          />
          <div className="absolute flex text-right top-[65%] -left-[1%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="zoom-in-right"
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
              <div className="text-[10px] text-xs absolute top-1/2 left-[105%] sm:left-auto sm:right-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full">
                Sensor&nbsp;Life&nbsp;up&nbsp;to 50,000 hrs
              </div>
            )}
          </div>
          <div className="absolute flex text-right top-[30%] left-[4%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="zoom-in-right"
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
              <div className="text-[10px] text-xs absolute top-1/2 left-[105%] sm:left-auto sm:right-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full">
                Multi - Point Measurement
              </div>
            )}
          </div>
          <div className="absolute flex text-right top-[3%] left-[20%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="zoom-in-right"
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
              <div className="text-[10px] text-xs absolute top-1/2 left-[105%] sm:left-auto sm:right-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full">
                Energy&nbsp;Management System-IoT
              </div>
            )}
          </div>
          <div className="absolute flex text-right top-[3%] right-[20%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="zoom-in-left"
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
              <div className="text-[10px] text-xs absolute top-1/2 right-[105%] sm:right-auto sm:left-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full text-left">
                Zero&nbsp;Manual Intervention
              </div>
            )}
          </div>
          <div className="absolute flex text-right top-[30%] right-[4%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="zoom-in-left"
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
              <div className="text-[10px] text-xs absolute top-1/2 right-[105%] sm:right-auto sm:left-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full text-left">
                AI&nbsp;Enable&nbsp;Corrective Actions
              </div>
            )}
          </div>
          <div className="absolute flex text-right top-[65%] -right-[1%] rounded-2xl cursor-pointer">
            <div>
              <img
                className="w-12 h-12"
                data-aos="zoom-in-left"
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
              <div className="text-[10px] text-xs absolute top-1/2 right-[105%] sm:right-auto sm:left-[105%] transform -translate-y-1/2 bg-white p-2 rounded-full text-left">
                Retrofit Benifits
              </div>
            )}
          </div>
        </div>
      </section>
      {/* grid card section */}
      <section>
        <div
          className="text-white py-16 h-auto sm:h-[100vh]"
          style={{
            background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
          }}
        >
          <div
            className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4"
            data-aos="zoom-in-up"
          >
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-semibold text-center">
              Making a difference with the approach
              <img
                className="w-[100px] md:w-40 ml-[125px] sm:ml-24 lg:ml-auto"
                src={second}
                alt="Approach Image"
              />
            </p>
          </div>
          <div className="h-[90%] mt-4 mx-4 sm:mx-20 2xl:mx-10 sm:flex p-4">
            <div className="w-full sm:w-[35%] p-4">
              <div
                className="h-full w-full rounded-lg p-4"
                data-aos="slide-right"
                style={{
                  background:
                    "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                }}
              >
                <div className="h-[40%] flex items-end justify-center">
                  <img
                    className="w-[75px] h-[75px]"
                    src={trophy}
                    alt="Trophy icon"
                  />
                </div>
                <div className="h-[20%] text-2xl sm:text-3xl font-semibold">
                  <div className="h-1/2 flex items-center justify-center">
                    Award Winning
                  </div>
                  <div className="h-1/2 flex items-center justify-center">
                    Technology
                  </div>
                </div>
                <div className="h-[40%] flex justify-center text-[10px] mx-4 text-center">
                  The team leverages state-of-the-art, award-winning, ultrasonic
                  waveguide technology developed through 25+ years of research
                  and development.
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[65%] flex flex-col sm:grid grid-cols-2 p-4 gap-4">
              <div
                className="rounded-lg bg-white px-4 p-4 sm:p-0"
                data-aos="zoom-in-up"
              >
                <div className="hidden sm:block h-1/4"></div>
                <div className="h-1/2 sm:h-1/4 flex">
                  <div className="w-[20%] h-full flex items-center justify-center">
                    <img
                      className="w-[45px] h-[45px]"
                      src={client}
                      alt="Client icon"
                    />
                  </div>
                  <div className="w-[80%] flex items-center text-lg font-[635] text-black">
                    Client-Centric
                  </div>
                </div>
                <div className="h-1/2 text-[#60646C] text-left text-sm p-2">
                  The Solution is provided based on in-depth understanding of
                  clients needs addressing the relevant challenges.
                </div>
              </div>

              <div
                className="rounded-lg bg-white px-4 p-4 sm:p-0"
                data-aos="slide-left"
              >
                <div className="hidden sm:block h-1/4"></div>
                <div className="h-1/2 sm:h-1/4 flex">
                  <div className="w-[20%] h-full flex items-center justify-center">
                    <img
                      className="w-[45px] h-[45px]"
                      src={solution}
                      alt="solution"
                    />
                  </div>
                  <div className="w-[80%] flex items-center text-lg font-[635] text-black">
                    Customization for Solutions
                  </div>
                </div>
                <div className="h-1/2 text-[#60646C] text-left text-sm p-2">
                  Gain immediate access to valuable data through the
                  technology's adaptability with material selection and
                  configuration for waveguides.
                </div>
              </div>

              <div
                className="rounded-lg bg-white px-4 p-4 sm:p-0"
                data-aos="zoom-in-up"
              >
                <div className="hidden sm:block h-1/4"></div>
                <div className="h-1/2 sm:h-1/4 flex">
                  <div className="w-[20%] h-full flex items-center justify-center">
                    <img className="w-[45px] h-[45px]" src={real} alt="real" />
                  </div>
                  <div className="w-[80%] flex items-center text-lg font-[635] text-black">
                    Real-Time Insights
                  </div>
                </div>
                <div className="h-1/2 text-[#60646C] text-left text-sm p-2">
                  Gain immediate access to valuable data through our supervised
                  sensing capabilities, empowering informed decision-making.
                </div>
              </div>

              <div
                className="rounded-lg bg-white px-4 p-4 sm:p-0"
                data-aos="slide-left"
              >
                <div className="hidden sm:block h-1/4"></div>
                <div className="h-1/2 sm:h-1/4 flex">
                  <div className="w-[20%] h-full flex items-center justify-center">
                    <img className="w-[45px] h-[45px]" src={time} alt="time" />
                  </div>
                  <div className="w-[80%] flex items-center text-lg font-[635] text-black">
                    On-Time Delivery
                  </div>
                </div>
                <div className="h-1/2 text-[#60646C] text-left text-sm p-2">
                  Committed to adhering to project timelines and satisfaction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
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

        <div className="flex flex-col justify-center items-center mt-20">
          <div
            className="text-2xl font-semibold text-center"
            data-aos="zoom-in-up"
          >
            Xyma Analytics' Clients
          </div>
          <div
            className="flex justify-center items-center mt-3 text-center text-gray-600 w-full px-4"
            data-aos="zoom-in-up"
          >
            Committed to client satisfaction with constant support at all
            stages, our aim is to aid Industry 4.0 transformation while reducing
            environmental impact, increasing cost savings, and enhancing process
            efficiency.
          </div>
        </div>

        <div class="mt-16 flex flex-col items-center">
          <div
            class="max-w-full overflow-x-auto flex justify-center items-center "
            style={{ scrollbarWidth: "none" }}
          >
            <img
              src={sg}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="slide-right"
            />
            <img
              src={tata}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="slide-right"
            />
            <img
              src={lam}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="zoom-in-up"
            />
            <img
              src={ind}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="zoom-in-up"
            />
            <img
              src={bharat}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="slide-left"
            />
            <img
              src={ved}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="slide-left"
            />
          </div>
          <div
            class="max-w-full overflow-x-auto mt-2 flex justify-center items-center "
            style={{ scrollbarWidth: "none" }}
          >
            <img
              src={drdo}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="slide-right"
            />
            <img
              src={cumi}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="slide-right"
            />
            <img
              src={epri}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="zoom-in-up"
            />
            <img
              src={skf}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="zoom-in-up"
            />
            <img
              src={schneider}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="slide-left"
            />
            <img
              src={reliance}
              style={{ maxWidth: "200px", height: "auto" }}
              data-aos="slide-left"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;