import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TiStarburst } from "react-icons/ti";
import Badge from './Badge';
import aluminum from '../Assets/aluminum.png';
import steel from '../Assets/steel.png';
import reformerTubes from '../Assets/reformerTubes.png'
import lubricants from '../Assets/lubricants.png';
import oilRecovery from '../Assets/oilRecovery.png'
import paints from '../Assets/paints.png'
import product from '../Assets/product.png';
import utmaps from '../Assets/newut.jpeg';
import utmap1 from '../Assets/maps1.png';
import utmap2 from '../Assets/maps2.png';
import utmap3 from '../Assets/maps3.png';
import video from '../Assets/xymavideo.mp4';
import newpage from '../Assets/newpage.png';
import trophy from '../Assets/trophy.png';
import client from '../Assets/client.png';
import real from '../Assets/real.png';
import solution from '../Assets/solution.png';
import time from '../Assets/time.png';
import bstar from '../Assets/bstar.png';
import white from '../Assets/white.png'
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
import newbg from '../Assets/newbg.png';
import sensor from '../Assets/sensor.png';
import curve from '../Assets/Vectorcurve.png';
import iot from '../Assets/iot.png';
import grp from '../Assets/Group.png';
import zero from '../Assets/zero.png';
import ai from '../Assets/ai.png';
import tool from '../Assets/tool.png';

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
  
  // const phrase = "Prevent Unplanned Downtime";
  // const wordsArray = phrase.split(" ");
  const [clickedImage, setClickedImage] = useState(aluminum);
  const [imageDesc, setImageDesc] = useState(imageDescription.Aluminum);
  const [imageName, setImageName] = useState('ALUMINUM');
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleImageChange = (event) => {
    //const clickedImageId = event.target.id;
 
    //let imageUrl = null;
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

    // setClickedImage(imageUrl);
    // setSelectedWord(clickedWordId);
  };

  // const getImageSizeClass = (word) => {
  //   switch (word) {
  //     case 'Aluminum':
  //       return 'image-aluminum';
  //     case 'Steel':
  //       return 'image-steel';
  //     case 'Reformer Tube':
  //       return 'image-reformer-tube';
  //     case 'Lubricant':
  //       return 'image-lubricant';
  //     case 'EOR':
  //       return 'image-eor';
  //     case 'Paints':
  //       return 'image-paints';
  //     default:
  //       return;
  //   }
  // };
  

  return (
    <div className="w-full">
      <div className="h-[10vh]">{/* space for navbar */}</div>
      {/* cover image */}
      <div className="relative h-[80vh] w-full shadow-white shadow-2xl">
        <img
          src={newpage}
          alt="cover image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start mt-28 text-4xl sm:text-6xl text-white font-semibold ml-12 sm:ml-24 gap-2 2xl:text-8xl">
          <div>Prevent</div>
          <div>Unplanned</div>
          <div>Downtime</div>
          <div className="text-xs sm:text-sm mt-2 2xl:text-base">
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
        <div className="text-xl sm:text-3xl 2xl:text-5xl font-semibold text-center">
          Impact of discrete inaccurate Process parameter measurements
          <img
            className="w-[200px] sm:w-auto 2xl:w-[800px] h-2 ml-[30%] sm:ml-96 2xl:ml-[600px]"
            src={newline}
          ></img>
        </div>
      </div>
      <div className="w-full h-[80vh]">
        {/* elements cards */}
        <div className="h-[80vh] sm:h-[60vh] 2xl:h-[70vh] sm:flex pt-8 sm:px-36 2xl:px-16">
          {/* list of elements */}
          <div
            className="w-full overflow-auto sm:p-4 sm:w-[15%] h-[8%] sm:h-full text-gray-500 2xl:text-3xl flex items-center sm:items-start sm:justify-start sm:flex-col"
            style={{ scrollbarWidth: "none" }}
          >
            <div>
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

            <div>
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

            <div>
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

            <div>
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

            <div>
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
                <div className="ml-1 -z-10">OilRecovery</div>
              </div>
              {clickedImage === oilRecovery && (
                <div className="border border-blue-800 sm:hidden" />
              )}
            </div>

            <div>
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
          <div className="w-full sm:w-[45%] 2xl:w-[50%] h-[61%] sm:h-full">
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
          <div className="w-full mt-4 sm:w-[40%] 2xl:w-[35%] h-[31%] sm:h-full flex items-center justify-center p-4">
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
      <section className="bg-white flex flex-col items-center justify-center h-[90vh] mt-8">
        <div className="text-xl sm:text-3xl font-semibold relative 2xl:text-5xl w-full text-center">
          <p>
            Patented Ultrasonic Waveguide Sensors:
            <img
              className="w-[175px] sm:w-64 h-2 ml-44 sm:ml-[500px] 2xl:ml-[530px] 2xl:w-[500px]"
              src={old}
            ></img>
            <p style={{ textAlign: "center" }}>Xyma Analytics</p>
          </p>
        </div>
        <div className="mt-3">
          <div className="px-4 sm:px-0 sm:flex gap-2">
            <div className="mb-2">
              <Badge
                text="Multi-Point Temperature "
                color="#FFF6EA"
                imageUrl={utmaps}
                hoverImageUrl={utmap1}
                hoverText="μTMapS & μSTMapS are IIoT-enabled temperature measurement temperature profiling sensors that captures continuos measurements at multiple points with asingle customized waveguide with multiple configurations in contrast to based thermocouples/RTDs or contactless IR guns"
                hoverHeading="μTMapS & μSTMapS"
              />
            </div>
            <div className="mb-2">
              <Badge
                text="Multi-Parameter Viscosity, Density and Temperature"
                color="#FFF6EA"
                imageUrl={utmaps}
                hoverImageUrl={utmap2}
                hoverText="PoRTS is an invasive/non-invasive based IIoT-enabled rheology and temperature mesurement sensor that continuously captures multiple parameters such as viscosity, density and temperature with a single waveguide unlike discrete measurement with thermocouple/RTDs or discrete measurements with sampling from viscometer and density meter."
                hoverHeading="PoRTS"
              />
            </div>
            <div>
              <Badge
                text="Contact/Non-contact based Level"
                color="#FFF6EA"
                imageUrl={utmaps}
                hoverImageUrl={utmap3}
                hoverText="Ztar is a contact/contactless IIoT-enabled level that captures continuous level across any hazardous environment with accuracy in contrast to radar-based level measurement sensors."
                hoverHeading="Ztar"
              />
            </div>
          </div>
        </div>

        <div className="relative block w-[70%] h-[50%] sm:w-[45%] sm:h-[60%] mt-[40px] 2xl:w-[50%]">
          <img
            src={newbg}
            style={{
              width: "100%",
              height: "100%",
            }}
            alt="Background Image"
          />
          <div className="text-right">
            <img
              className="w-20 h-20"
              src={sensor}
              style={{
                position: "absolute",
                top: "75%",
                left: "2%",
                transform: "translate(-50%, -50%)",
              }}
              alt="Sensor Image"
              onMouseEnter={() => {
                setHoveredItem("sensor");
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
              }}
            />
            {hoveredItem === "sensor" && (
              <p
                className="text-[10px] sm:text-base"
                style={{
                  position: "absolute",
                  top: "68%",
                  right: "102%",
                  backgroundColor: "white",
                  padding: "5px",
                  width: "25%",
                }}
              >
                Sensor life up to 50,000 hrs
              </p>
            )}
          </div>
          <div className="text-right">
            <img
              className="w-20 h-20"
              src={iot}
              style={{
                position: "absolute",
                top: "40%",
                left: "5%",
                transform: "translate(-50%, -50%)",
              }}
              alt="Sensor"
              onMouseEnter={() => setHoveredItem("iot")}
              onMouseLeave={() => setHoveredItem(null)}
            />
            {hoveredItem === "iot" && (
              <p
                className="text-[10px] sm:text-base"
                style={{
                  position: "absolute",
                  top: "33%",
                  right: "100%",
                  backgroundColor: "white",
                  padding: "5px",
                }}
              >
                Multi - point Measurement
              </p>
            )}
          </div>
          <div className="text-right">
            <img
              className="w-20 h-20"
              src={grp}
              style={{
                position: "absolute",
                top: "12%",
                left: "20%",
                transform: "translate(-50%, -50%)",
              }}
              alt="Sensor Image"
              onMouseEnter={() => {
                setHoveredItem("grp");
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
              }}
            />
            {hoveredItem === "grp" && (
              <p
                className="text-[10px] sm:text-base"
                style={{
                  position: "absolute",
                  top: "6%",
                  right: "85%",
                  backgroundColor: "white",
                  padding: "5px",
                  width: "35%",
                }}
              >
                Energy Management System-IoT
              </p>
            )}
          </div>
          <div>
            <img
              className="w-20 h-20"
              src={zero}
              style={{
                position: "absolute",
                top: "12%",
                left: "75%",
                transform: "translate(-50%, -50%)",
              }}
              alt="Sensor Image"
              onMouseEnter={() => setHoveredItem("zero")}
              onMouseLeave={() => setHoveredItem(null)}
            />
            {hoveredItem === "zero" && (
              <p
                className="text-[10px] sm:text-base"
                style={{
                  position: "absolute",
                  top: "5%",
                  right: "-5%",
                  backgroundColor: "white",
                  padding: "5px",
                  width: "25%",
                }}
              >
                Zero Manual Intervention
              </p>
            )}
          </div>
          <div>
            <img
              className="w-20 h-20"
              src={ai}
              style={{
                position: "absolute",
                top: "40%",
                left: "89%",
                transform: "translate(-50%, -50%)",
              }}
              alt="Sensor Image"
              onMouseEnter={() => setHoveredItem("ai")}
              onMouseLeave={() => setHoveredItem(null)}
            />
            {hoveredItem === "ai" && (
              <p
                className="text-[10px] sm:text-base"
                style={{
                  position: "absolute",
                  top: "33%",
                  right: "-19%",
                  backgroundColor: "white",
                  padding: "5px",
                  width: "25%",
                }}
              >
                AI Enable Corrective Actions
              </p>
            )}
          </div>
          <div>
            <img
              className="w-20 h-20"
              src={tool}
              style={{
                position: "absolute",
                top: "75%",
                left: "92%",
                transform: "translate(-50%, -50%)",
              }}
              alt="Sensor Image"
              onMouseEnter={() => setHoveredItem("tool")}
              onMouseLeave={() => setHoveredItem(null)}
            />
            {hoveredItem === "tool" && (
              <p
                className="text-[10px] sm:text-base"
                style={{
                  position: "absolute",
                  top: "67.5%",
                  right: "-8%",
                  backgroundColor: "white",
                  padding: "5px",
                  width: "10%",
                }}
              >
                Retrofit Benifits
              </p>
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
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
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
              <div className="rounded-lg bg-white px-4 p-4 sm:p-0">
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

              <div className="rounded-lg bg-white px-4 p-4 sm:p-0">
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

              <div className="rounded-lg bg-white px-4 p-4 sm:p-0">
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

              <div className="rounded-lg bg-white px-4 p-4 sm:p-0">
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
          <div className="sliding-text-container ">
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
          <div className="text-2xl font-semibold text-center">
            Xyma Analytics' Clients
          </div>
          <div className="flex justify-center items-center mt-3 text-center text-gray-600 w-full px-4">
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
            <img src={sg} style={{ maxWidth: "200px", height: "auto" }} />
            <img src={tata} style={{ maxWidth: "200px", height: "auto" }} />
            <img src={lam} style={{ maxWidth: "200px", height: "auto" }} />
            <img src={ind} style={{ maxWidth: "200px", height: "auto" }} />
            <img src={bharat} style={{ maxWidth: "200px", height: "auto" }} />
            <img src={ved} style={{ maxWidth: "200px", height: "auto" }} />
          </div>
          <div
            class="max-w-full overflow-x-auto mt-2 flex justify-center items-center "
            style={{ scrollbarWidth: "none" }}
          >
            <img src={drdo} style={{ maxWidth: "200px", height: "auto" }} />
            <img src={cumi} style={{ maxWidth: "200px", height: "auto" }} />
            <img src={epri} style={{ maxWidth: "200px", height: "auto" }} />
            <img src={skf} style={{ maxWidth: "200px", height: "auto" }} />
            <img
              src={schneider}
              style={{ maxWidth: "200px", height: "auto" }}
            />
            <img src={reliance} style={{ maxWidth: "200px", height: "auto" }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;