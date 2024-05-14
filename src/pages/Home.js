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
import vector from '../Assets/Vector.png';
import newline from '../Assets/newline.png';
import second from '../Assets/secondline.png';
import old from '../Assets/old.png';
import newbg from '../Assets/newbg.png';
import sensor from '../Assets/sensor.png';
import curve from '../Assets/Vectorcurve.png';
import logo from '../Assets/logo.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import share from '../Assets/share.png';
import line from '../Assets/line.png';
import arrow from '../Assets/arrow.png';
import iot from '../Assets/iot.png';
import grp from '../Assets/Group.png';
import zero from '../Assets/zero.png';
import ai from '../Assets/ai.png';
import tool from '../Assets/tool.png';

export const Home = () => {

  const navigate = useNavigate();

  const handleContactClick = () => {
    
    navigate('/contact');
  };
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
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleImageChange = (event) => {
    //const clickedImageId = event.target.id;
 
    //let imageUrl = null;
    switch (event.target.id) {
      case "aluminum":
        setClickedImage(aluminum);
        setImageDesc(imageDescription.Aluminum);
        break;

      case "steel":
        setClickedImage(steel);
        setImageDesc(imageDescription.Steel);
        break;

      case "refiniries":
        setClickedImage(reformerTubes);
        setImageDesc(imageDescription.Refiniries);
        break;

      case "lubricants":
        setClickedImage(lubricants);
        setImageDesc(imageDescription.Lubricants);
        break;

      case "oilRecovery":
        setClickedImage(oilRecovery);
        setImageDesc(imageDescription.OilRecovery);
        break;

      case "paints":
        setClickedImage(paints);
        setImageDesc(imageDescription.Paints);
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
    <div>
      {/* cover image */}
      <div className="relative h-[95vh] w-full mt-[70px] shadow-2xl">
        <img
          src={newpage}
          alt="cover image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start mt-28 text-6xl text-white font-semibold ml-24 gap-2 2xl:text-8xl">
          <div>Prevent</div>
          <div>Unplanned</div>
          <div>Downtime</div>
          <div className="text-sm mt-2 2xl:text-base">
            "The Disruptive Ultrasonic Waveguide Technology"
          </div>
        </div>
      </div>
      {/* bottom text */}
      <div className="w-full text-center text-gray-300 font-semibold text-[90px] 2xl:text-[120px] -mt-[50px] 2xl:-mt-[65px]">
        XYMA ANALYTICS
      </div>

      {/* text with underline */}
      <div className="flex justify-center items-center mt-8">
        <div className="text-3xl 2xl:text-4xl font-semibold">
          Impact of discrete inaccurate Process parameter measurements
          <img className="w-auto h-2 ml-96" src={newline}></img>
        </div>
      </div>
      <div>
        {/* elements cards */}
        <div className="h-[60vh] 2xl:h-[70vh] mt-4 2xl:mt-10 flex pt-8 px-36">
          {/* list of elements */}
          <div className="w-[15%] h-full text-gray-500">
            <div
              className={`cursor-pointer p-1 mb-1 flex ${
                clickedImage === aluminum && "text-[#013872] font-medium"
              }`}
              id="aluminum"
              onClick={handleImageChange}
            >
              {clickedImage === aluminum && (
                <div className="border border-blue-800"></div>
              )}
              <div className="ml-1 -z-10">Aluminum</div>
            </div>

            <div
              className={`flex p-1 mb-1 cursor-pointer ${
                clickedImage === steel && "text-[#013872] font-medium"
              }`}
              id="steel"
              onClick={handleImageChange}
            >
              {clickedImage === steel && (
                <div className="border border-blue-800"></div>
              )}
              <div className="ml-1 -z-10">Steel</div>
            </div>

            <div
              className={`flex p-1 mb-1 cursor-pointer ${
                clickedImage === reformerTubes && "text-[#013872] font-medium"
              }`}
              id="refiniries"
              onClick={handleImageChange}
            >
              {clickedImage === reformerTubes && (
                <div className="border border-blue-800"></div>
              )}
              <div className="ml-1 -z-10">Refiniries</div>
            </div>

            <div
              className={`flex p-1 mb-1 cursor-pointer ${
                clickedImage === lubricants && "text-[#013872] font-medium"
              }`}
              id="lubricants"
              onClick={handleImageChange}
            >
              {clickedImage === lubricants && (
                <div className="border border-blue-800"></div>
              )}
              <div className="ml-1 -z-10">Lubricants</div>
            </div>

            <div
              className={`flex p-1 mb-1 cursor-pointer ${
                clickedImage === oilRecovery && "text-[#013872] font-medium"
              }`}
              id="oilRecovery"
              onClick={handleImageChange}
            >
              {clickedImage === oilRecovery && (
                <div className="border border-blue-800"></div>
              )}
              <div className="ml-1 -z-10">Oil Recovery</div>
            </div>

            <div
              className={`flex p-1 mb-1 cursor-pointer ${
                clickedImage === paints && "text-[#013872] font-medium"
              }`}
              id="paints"
              onClick={handleImageChange}
            >
              {clickedImage === paints && (
                <div className="border border-blue-800"></div>
              )}
              <div className="ml-1 -z-10">Paints</div>
            </div>
          </div>
          {/* element images */}
          <div className="w-[45%] h-full">
            {clickedImage && (
              <div className="flex items-center justify-center">
                <img
                  src={clickedImage}
                  alt="Clicked Image"
                  className="rounded-2xl h-[320px] w-[430px] shadow-white shadow-2xl"
                />
              </div>
            )}
          </div>
          {/* elements description */}
          <div className="w-[40%] h-full flex items-center justify-center p-4">
            {clickedImage && (
              <div
                className="text-3xl font-semibold"
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
        {/* elements bottom title */}
        <div className="h-[10vh] flex px-36">
          <div className="h-[10vh] w-[15%]"></div>
          <div className="h-[10vh] w-[45%] text-4xl font-bold text-gray-400 text-center -mt-[40px] -z-10">
            {clickedImage === aluminum && (
              <div className="h-full w-full">ALUMINUM</div>
            )}
            {clickedImage === steel && (
              <div className="h-full w-full">STEEL</div>
            )}
            {clickedImage === reformerTubes && (
              <div className="h-full w-full">REFINIRIES</div>
            )}
            {clickedImage === lubricants && (
              <div className="h-full w-full">LUBRICANTS</div>
            )}
            {clickedImage === oilRecovery && (
              <div className="h-full w-full">OIL RECOVERY</div>
            )}
            {clickedImage === paints && (
              <div className="h-full w-full">PAINTS</div>
            )}
          </div>
          <div className="h-[10vh] w-[40%]"></div>
        </div>
      </div>

      {/* <div> */}
      {/* <div
            style={{
              fontSize: "14px",
              color: "grey",
              marginLeft: "-150px",
              marginTop: "60px",
            }}
          >
            <div>
              <span
                id="Aluminum"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
                className={
                  selectedWord === "Aluminum" ? "word-selected" : "word"
                }
              >
                Aluminum
              </span>
            </div>
            <div>
              <span
                id="Steel"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
                className={selectedWord === "Steel" ? "word-selected" : "word"}
              >
                Steel
              </span>
            </div>
            <div>
              <span
                id="Reformer Tube"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
                className={
                  selectedWord === "Reformer Tube" ? "word-selected" : "word"
                }
              >
                Reformer Tube
              </span>
            </div>
            <div>
              <span
                id="Lubricant"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
                className={
                  selectedWord === "Lubricant" ? "word-selected" : "word"
                }
              >
                Lubricant
              </span>
            </div>
            <div>
              <span
                id="EOR"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
                className={selectedWord === "EOR" ? "word-selected" : "word"}
              >
                EOR
              </span>
            </div>
            <div>
              <span
                id="Paints"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
                className={selectedWord === "Paints" ? "word-selected" : "word"}
              >
                Paints
              </span>
            </div>
          </div> */}
      {/* {clickedImage && (
            <div
              className="text-center grid grid-cols-2 gap-20 absolute right-10 top-1/2 transform -translate-y-1/2"
              style={{ marginTop: "88px" }}
            >
              <img
                src={clickedImage}
                alt="Clicked Image"
                className={`clicked-image ${getImageSizeClass(selectedWord)}`}
              />
              <p
                className="text-left"
                style={{
                  color: "transparent",
                  background:
                    "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                  backgroundClip: "text",
                  width: "100%",
                }}
              >
                {wordTextMessages[selectedWord]}
              </p>
            </div>
          )}
        </div>
      </div> */}

      <section className="bg-white flex flex-col items-center justify-center h-[90vh] mt-8">
        <div className="text-3xl font-semibold relative">
          <p>
            Patented Ultrasonic Waveguide Sensors:
            <img className="w-64 h-2 ml-44" src={old}></img>
            <p style={{ textAlign: "center" }}>Xyma Analytics</p>
          </p>
        </div>
        <div className="mt-3">
          <div className="flex gap-2">
            <Badge
              text="Multi-Point Temperature "
              color="#FFF6EA"
              imageUrl={utmaps}
              hoverImageUrl={utmap1}
              hoverText="μTMapS & μSTMapS are IIoT-enabled temperature measurement temperature profiling sensors that captures continuos measurements at multiple points with asingle customized waveguide with multiple configurations in contrast to based thermocouples/RTDs or contactless IR guns"
            />
            <Badge
              text="Multi-Parameter Viscosity, Density and Temperature"
              color="#FFF6EA"
              imageUrl={utmaps}
              hoverImageUrl={utmap2}
              hoverText="PoRTS is an invasive/non-invasive based IIoT-enabled rheology and temperature mesurement sensor that continuously captures multiple parameters such as viscosity, density and temperature with a single waveguide unlike discrete measurement with thermocouple/RTDs or discrete measurements with sampling from viscometer and density meter."
              hoverHeading="PoRTS "
            />
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

        <div
          style={{
            position: "relative",
            width: "45%",
            height: "60%",
            display: "block",
            marginTop: "40px",
          }}
        >
          <img
            src={newbg}
            style={{ width: "100%", height: "100%", 
            //objectFit: "cover" 
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
              alt="Sensor Image"
              onMouseEnter={() => setHoveredItem("iot")}
              onMouseLeave={() => setHoveredItem(null)}
            />
            {hoveredItem === "iot" && (
              <p
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

      <section>
        <div
          className=" text-white py-10 md:py-20 h-auto md:h-[114vh]"
          style={{
            background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
          }}
        >
          <img className="w-5 h-5 ml-20 md:ml-0" src={bstar} alt="BStar logo" />
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
            <p className="text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-semibold text-center">
              Making a difference with the approach
              <img
                className="md:w-40 ml-24 lg:ml-auto"
                src={second}
                alt="Approach Image"
              />
            </p>
          </div>

          <div className="mt-8" style={{ marginLeft: "15%" }}>
            <div className="flex ">
              <div
                class="col-span-1 md:col-span-1"
                style={{
                  borderRadius: "8px",
                  background:
                    "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  width: "55%",
                  height: "auto",
                  maxWidth: "auto",
                  padding: "20px",
                }}
              >
                <div class="md:ml-4 md:mt-16 md:mb-4">
                  <center>
                    <img
                      class="bg-white w-auto h-auto border rounded-lg mb-3 mr-8"
                      src={trophy}
                      alt="Trophy icon"
                      style={{ width: "75px", height: "75px" }}
                    />
                  </center>
                  <p class="text-2xl font-semibold mb-3 md:text-3xl text-center mr-8">
                    Award Winning Technology
                  </p>
                  <p
                    class="text-sm mb-3 md:text-sm text-center mr-8"
                    style={{ width: "100%" }}
                  >
                    The team leverages state-of-the-art, award-winning,
                    ultrasonic waveguide technology developed through 25+ years
                    of research and development.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap">
                  <div
                    className="bg-white col-span-1 md:col-span-1 rounded-xl m-2 md:m-0 md:w-1/3 md:ml-3.5"
                    style={{ padding: "13px" }}
                  >
                    <p className="text-gray-300 text-xs mt-3 mb-3 md:text-xs">
                      01/04
                    </p>
                    <div className="flex">
                      <img
                        className="bg-white w-auto h-auto rounded-lg mb-4"
                        src={client}
                        alt="Client icon"
                        style={{ width: "45px", height: "45px" }}
                      />
                      <p
                        className="text-black text-2xl font-semibold mt-1 md:text-xl"
                        style={{ marginLeft: "5%" }}
                      >
                        Client-Centric
                      </p>
                    </div>
                    <p className="text-[#60646C] text-sm md:text-sm">
                      The Solution is provided based on in-depth understanding
                      of clients needs addressing the relevant challenges.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-3 m-2 md:m-0 md:w-1/3 md:ml-3.5">
                    <p className="text-gray-300 text-xs mt-3 mb-3 md:text-xs">
                      02/04
                    </p>
                    <div className="flex">
                      <img
                        className="bg-white w-auto h-auto rounded-lg mb-4 mt-1"
                        src={solution}
                        alt="Solution icon"
                        style={{ width: "45px", height: "45px" }}
                      />
                      <p className="text-black text-2xl font-semibold md:text-xl w-52 ml-6">
                        Customization For Solutions
                      </p>
                    </div>
                    <p className="text-[#60646C] text-sm md:text-sm">
                      Gain immediate access to valuable data through the
                      technology's adaptability with material selection and
                      configuration for waveguides.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div
                    className="bg-white col-span-1 md:col-span-1 rounded-xl m-2 md:m-0 md:w-1/3 md:mt-3.5 md:ml-3.5"
                    style={{ padding: "13px" }}
                  >
                    <p className="text-gray-300 text-xs mt-3 mb-3 md:text-xs">
                      03/04
                    </p>
                    <div className="flex">
                      <img
                        className="bg-white w-auto h-auto rounded-lg mb-4"
                        src={real}
                        alt="Client icon"
                        style={{ width: "45px", height: "45px" }}
                      />
                      <p
                        className="text-black text-2xl font-semibold mt-1 md:text-xl"
                        style={{ marginLeft: "5%" }}
                      >
                        Real-Time Insights
                      </p>
                    </div>
                    <p className="text-[#60646C] text-sm md:text-sm">
                      Gain immediate access to valuable data through our
                      supervised sensing capabilities, empowering informed
                      decision-making.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-3 m-2 md:m-0 md:w-1/3 md:mt-3.5 md:ml-3.5">
                    <p className="text-gray-300 text-xs mt-3 mb-3 md:text-xs">
                      04/04
                    </p>
                    <div className="flex">
                      <img
                        className="bg-white w-auto h-auto rounded-lg mb-4 mt-1"
                        src={time}
                        alt="Solution icon"
                        style={{ width: "45px", height: "45px" }}
                      />
                      <p className="text-black text-2xl font-semibold md:text-xl w-52 ml-6">
                        On-Time Delivery
                      </p>
                    </div>
                    <p className="text-[#60646C] text-sm md:text-sm">
                      Committed to adhering to project timelines and
                      satisfaction.
                    </p>
                  </div>
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
            <span className="mt-2.5 sliding-text text-white w-screen">
              Continuous Multi-point temperature measurements Continuous
              multi-parameter measurements Continuous contact & non-contact
              based level measurement Continuous wear monitoring Continuous
              Multi-point temperature measurements Continuous multi-parameter
              measurements Continuous contact & non-contact based level
              measurements Continuous wear monitoring
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-20">
          <div className="w-full md:w-[200vh]">
            <div className="text-2xl font-semibold text-center">
              Xyma Analytics' Clients
            </div>
            <div className="flex justify-center items-center mt-3">
              <div className="text-center text-gray-500 w-full md:w-[130vh]">
                Committed to client satisfaction with constant support at all
                stages, our aim is to aid Industry 4.0 transformation while
                reducing environmental impact, increasing cost savings, and
                enhancing process efficiency.
              </div>
            </div>
            <div class="mt-16 flex flex-col items-center">
              <div class="max-w-full overflow-x-auto flex justify-center items-center ">
                <img src={sg} style={{ maxWidth: "200px", height: "auto" }} />
                <img src={tata} style={{ maxWidth: "200px", height: "auto" }} />
                <img src={lam} style={{ maxWidth: "200px", height: "auto" }} />
                <img src={ind} style={{ maxWidth: "200px", height: "auto" }} />
                <img
                  src={bharat}
                  style={{ maxWidth: "200px", height: "auto" }}
                />
                <img src={ved} style={{ maxWidth: "200px", height: "auto" }} />
              </div>
              <div class="max-w-full overflow-x-auto mt-2 flex justify-center items-center ">
                <img src={drdo} style={{ maxWidth: "200px", height: "auto" }} />
                <img src={cumi} style={{ maxWidth: "200px", height: "auto" }} />
                <img src={epri} style={{ maxWidth: "200px", height: "auto" }} />
                <img src={skf} style={{ maxWidth: "200px", height: "auto" }} />
                <img
                  src={schneider}
                  style={{ maxWidth: "200px", height: "auto" }}
                />
                <img
                  src={reliance}
                  style={{ maxWidth: "200px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-[60vh] mt-24"
          style={{
            background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
          }}
        >
          <div className="flex justify-center items-center ">
            <div
              className="mt-[-50px] h-28 md:mb-20 rounded-3xl w-full md:max-w-6xl"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
            >
              <div
                className="flex flex-col md:flex-row items-center justify-between"
                style={{ marginBottom: "20px" }}
              >
                <div className="md:ml-10 md:mt-3.5 text-white text-xl md:text-3xl text-center md:text-left">
                  Enhance Process Efficiency through
                  <br />
                  XYMA Analytics' Innovations
                  <img
                    className="mb-1 w-full md:w-40 mx-auto md:ml-40"
                    src={vector}
                    alt="Vector Image"
                  />
                </div>
                <div className="md:mr-10 md:mt-5 text-xs mt-5 md:text-right">
                  <button
                    className="bg-[#01285C] text-white rounded-full w-36 h-10 md:w-36 md:h-10"
                    onClick={handleContactClick}
                  >
                    Get in Touch
                  </button>
                  <button className="bg-white text-[#01285C] rounded-full w-36 h-10 md:w-36 md:h-10 ml-4 md:ml-8 md:mr-4 mb-2 md:mt-0">
                    Download Brochure
                  </button>
                </div>
              </div>
              <div className="mt-16 text-white flex flex-col md:flex-row">
                <div className="flex flex-col items-center md:items-start">
                  <img className="w-32 h-14" src={logo} alt="Logo"></img>
                  <div className="text-white text-xs w-56 mt-2">
                    Patented Ultrasonic Waveguide based sensors for preventing
                    unplanned downtime and enhancing process efficiency.
                  </div>
                  <div className="flex gap-3 mt-4">
                    <img className="w-6 h-6" src={twitter} alt="Twitter"></img>
                    <img
                      className="w-6 h-6"
                      src={linkedin}
                      alt="LinkedIn"
                    ></img>
                    <img className="w-6 h-6" src={share} alt="Share"></img>
                  </div>
                </div>

                <div className="text-xs mr-8 md:mr-24 ml-8 md:ml-28 mt-4 md:mt-0">
                  <div className="font-semibold mb-5 text-sm">
                    Quick Links <img className="mt-1 h-0.5 w-5" src={line} />
                  </div>
                  <div className="mb-3">About Us</div>
                  <div className="mb-3">Career</div>
                  <div className="mb-3">Media</div>
                  <div className="mb-3">Resources</div>
                </div>
                <div className="text-xs mr-8 md:mr-24 mt-4 md:mt-0">
                  <div className="font-semibold mb-5 text-sm ">
                    Products <img className="mt-1 h-0.5 w-5" src={line} />
                  </div>
                  <div className="mb-3">μTMapS</div>
                  <div className="mb-3">PoRTS</div>
                  <div className="mb-3">Ztar</div>
                  <div className="mb-3">I-PAMS</div>
                </div>
                <div className="text-xs mr-8 mt-4 md:mt-0">
                  <div className="font-semibold mb-5 text-sm ">
                    Support <img className="mt-1 h-0.5 w-5" src={line} />
                  </div>
                  <div className="mb-3">Contact Us</div>
                  <div className="mb-3">Contact Sales</div>
                </div>
                <div
                  style={{
                    marginLeft: "140px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "10px",
                    gap: "10px",
                    width: "220px",
                    height: "84px",
                    background: "rgba(0, 0, 0, 0.4)",
                    borderRadius: "10px",
                    flex: "none",
                    order: "4",
                    flexGrow: "0",
                  }}
                >
                  <div>Subscribe Now</div>
                  <form class="flex items-center">
                    <input
                      type="email"
                      class="text-xs w-40 h-8 rounded-md pl-3"
                      placeholder="Enter your email"
                      required
                    />
                    <img class="w-7 h-7 ml-2" src={arrow} />
                  </form>
                </div>
              </div>
              <div className="h-0.5 mt-10" style={{ background: "#013872" }} />
              <div className="text-white mt-6 text-xs">
                © 2022 XYMA Analytics Inc.{" "}
                <span className="text-gray-400">
                  IIT Madras Research Park, Chennai, 600113
                </span>{" "}
                <span className="ml-96">Terms & Conditions</span>
                <span className="ml-6">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;