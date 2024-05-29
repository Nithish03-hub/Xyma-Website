import React, { useState, useEffect } from "react";
import "./Sb.css";
import Icon from "../Icon";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import utmap from "../Assets/utmaps.png";
import isteel from "../Assets/isteel.png";
import ports from "../Assets/ports.png";
import ztar from "../Assets/Ztar.png";
import paint from "../Assets/paint.png";
import metal from "../Assets/metal.png";
import aicon from "../Assets/aluminumicon.png";
import refrigerant from "../Assets/refrigerant.png";
import luboil from "../Assets/luboil.png";
import semi from "../Assets/semi.png";
import ref from "../Assets/refineries.png";
import eor from "../Assets/eor.png";
import { RiPlayCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: image1,
      title: "Multi-point Temperature Measurements",
      text1: "Up to 1600° C",
      text: "“The Disruptive Ultrasonic Waveguide Technology”",
    },
    {
      src: image2,
      title: "Multi - Parameter Measurements",
      text1: "Viscosity, Density, Temperature",
      text: "“The Disruptive Ultrasonic Waveguide Technology”",
    },
    {
      src: image3,
      title: "Powered by AI",
      text1:
        "IIoT Enabled, Data Analytics, Anomaly Detection, Predictive Maintenance",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // useEffect(() => {
  //   AOS.init({ duration: 1500 });
  // }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="relative">
      <div className="h-[10vh]">{/* navbar space */}</div>
      <div className="h-[60vh] md:h-[70vh] xl:h-[90vh] relative shadow-white shadow-2xl">
        {images.map((item, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } w-full h-full`}
          >
            <img
              className="w-full h-full object-cover object-right-top"
              src={item.src}
              alt={`Slide ${index + 1}`}
              //data-aos="slide-left"
              //style={{ ...imageStyle }}
            />
            <div className=" inset-0 xl:w-[32%] 2xl:w-[42%] flex flex-col gap-2 lg:gap-4 absolute m-[8%] text-white  items-center justify-center xl:items-start xl:justify-start">
              <div className=" text-2xl md:text-5xl lg:text-6xl 2xl:text-8xl font-medium md:font-semibold text-center xl:text-left">
                {item.title}
              </div>
              <div
                className=" p-1 text-center xl:text-left text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-medium md:font-semibold"
                style={{
                  background:
                    "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              >
                {item.text1}
              </div>
              <div className=" text-xs md:text-lg lg:text-xl xl:text-base  2xl:text-xl font-normal md:font-medium text-center xl:text-left">
                {item.text}
              </div>
            </div>
          </div>
        ))}
        <div className=" absolute w-full flex gap-2 bottom-[10%] p-2 xl:px-[8%] justify-center xl:justify-normal">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-16 h-1 cursor-pointer  ${
                index === currentIndex ? "bg-white" : "bg-white opacity-20"
              } rounded-full`}
            />
          ))}
        </div>
      </div>

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
        XYMA PRODUCTS
      </div>

      {/* product cards */}

      <div className=" mx-[5%] xl:mx-[8%]">
        {/* utmaps */}
        <div className="md:flex p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg mb-4">
          <div className="w-full md:w-[45%] mb-2 xl:mb-0 xl:p-2 ">
            <div
              className="w-full h-full flex flex-col justify-center items-center rounded-lg relative"
              style={{
                background:
                  "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
              }}
            >
              <img
                className="w-[45%] h-[95%] object-cover object-top"
                src={utmap}
                alt="UTMapS"
              />
              <div
                className="absolute bottom-0 w-full px-4 rounded-b-lg py-2"
                style={{
                  background: "rgba(64, 64, 64, 0.5)",
                  backdropFilter: "blur(9px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold mb-1"
                  style={{
                    background:
                      "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    display: "inline-block",
                  }}
                >
                  μTMapS
                </div>
                <div className=" text-white text-xs md:text-sm lg:text-lg xl:text-base 2xl:text-xl">
                  A single customizable waveguide can measure temperature at 10
                  points over 50 meters length.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[55%] xl:p-2 md:p-4">
            {/* heading and play button */}
            <div className=" md:flex gap-2 mb-2">
              <div className="mb-2 md:mb-0 text-lg lg:text-3xl 2xl:text-4xl font-semibold">
                Multi-Point Temperature Mapping Sensor
              </div>
              <div className=" flex rounded-full items-center justify-center gap-1 bg-[#01285C] h-4 py-4 px-2">
                <div className="text-[#FE9D1C]">
                  <RiPlayCircleFill size={20} />
                </div>
                <div className="text-sm mb-[2px] text-white">
                  Play&nbsp;Video
                </div>
              </div>
            </div>

            {/* orange tab */}
            <div className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-sm lg:text-lg xl:text-sm 2xl:text-xl font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2">
              Temperature Range: 25° C to 1600° C
            </div>

            {/* description */}
            <div className=" text-[#60646C] text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-xl mb-2 font-medium">
              µTMapS & µSTMapS are IIoT-enabled temperature measurement and
              temperature profiling sensors that captures continuous
              measurements at multiple points with a single customizable
              waveguide with multiple configurations in contrast to contact
              based thermocouples/RTDs or contactless IR guns.
            </div>

            {/* cards */}
            <div className="md:flex gap-2 mb-2 text-sm lg:text-base 2xl:text-xl">
              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 border border-[#D9D9E0] bg-white p-2 mb-2 md:mb-0">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={isteel} />
                </div>
                <div className="font-semibold">Steel Manufacturing</div>
              </div>

              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={aicon} />
                </div>
                <div className="font-semibold">Aluminium Manufacturing</div>
              </div>
            </div>

            <div className="md:flex gap-2  mb-2 text-sm lg:text-base 2xl:text-xl">
              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white mb-2 md:mb-0">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={semi} />
                </div>
                <div className="font-semibold">Semiconductor Manufacturing</div>
              </div>

              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={ref} />
                </div>
                <div className="font-semibold">Refiniries</div>
              </div>
            </div>
          </div>
        </div>

        {/* ports */}
        <div className="md:flex p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg mb-4">
          <div className="w-full md:w-[45%] mb-2 xl:mb-0 xl:p-2 ">
            <div
              className="w-full h-full flex flex-col justify-center items-center rounded-lg relative"
              style={{
                background:
                  "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
              }}
            >
              <img
                className="w-[50%] h-[70%] lg:w-[45%] lg:h-[80%] object-cover object-top"
                src={ports}
                alt="ports"
              />
              <div
                className="absolute bottom-0 w-full px-4 rounded-b-lg py-2"
                style={{
                  background: "rgba(64, 64, 64, 0.5)",
                  backdropFilter: "blur(9px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div
                  className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold mb-1"
                  style={{
                    background:
                      "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    display: "inline-block",
                  }}
                >
                  PoRTS
                </div>
                <div className=" text-white text-xs md:text-sm lg:text-lg xl:text-base 2xl:text-xl">
                  A single customizable wavelength can measure viscosity,
                  density & Temperature continuously.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[55%] xl:p-2 md:p-4">
            {/* heading and play button */}
            <div className=" md:flex gap-2 mb-2">
              <div className="mb-2 md:mb-0 text-lg lg:text-3xl 2xl:text-4xl font-semibold">
                Multi-Parameter Measurement Sensor
              </div>
              <div className=" flex rounded-full items-center justify-center gap-1 bg-[#01285C] h-4 py-4 px-2">
                <div className="text-[#FE9D1C]">
                  <RiPlayCircleFill size={20} />
                </div>
                <div className="text-sm mb-[2px] text-white">
                  Play&nbsp;Video
                </div>
              </div>
            </div>

            {/* orange tab */}
            <div className="md:flex flex-wrap lg:gap-2 text-sm lg:text-lg xl:text-sm 2xl:text-xl font-medium">
              <div className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2 lg:mb-0">
                Viscosity: 50 cP - 15000 cP
              </div>

              <div className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2 lg:mb-0">
                Density: 700 kg/m³ to 1200 kg/m³
              </div>

              <div className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2">
                Temperature: 20° C to 400° C
              </div>
            </div>

            {/* description */}
            <div className=" text-[#60646C] text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-xl mb-2 font-medium">
              PoRTS is an invasive/non-invasive based IIoT-enabled rheology and
              temperature measurement sensor that continuously captures multiple
              parameters such as viscosity, density and temperature with a
              single waveguide unlike discrete measurements with
              thermocouple/RTDs or discrete measurements with sampling from
              viscometer and density meter.
            </div>

            {/* cards */}
            <div className="md:flex gap-2 mb-2 text-sm lg:text-base 2xl:text-xl">
              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 border border-[#D9D9E0] bg-white p-2 mb-2 md:mb-0">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={paint} />
                </div>
                <div className="font-semibold">Paint Manufacturing</div>
              </div>

              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={luboil} />
                </div>
                <div className="font-semibold">Lubrication Oil</div>
              </div>
            </div>

            <div className="md:flex gap-2  mb-2 text-sm lg:text-base 2xl:text-xl">
              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={eor} />
                </div>
                <div className="font-semibold">E.O.R.</div>
              </div>
            </div>
          </div>
        </div>

        {/* ztar */}
        <div className="md:flex p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg mb-4">
          <div className="w-full md:w-[45%] mb-2 xl:mb-0 xl:p-2 ">
            <div
              className="w-full h-full flex flex-col justify-center items-center rounded-lg relative"
              style={{
                background:
                  "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
              }}
            >
              <img
                className="w-[50%] h-[75%] lg:w-[45%] lg:h-[95%] object-cover object-top"
                src={ztar}
                alt="ztar"
              />
              <div
                className="absolute bottom-0 w-full px-4 rounded-b-lg py-2"
                style={{
                  background: "rgba(64, 64, 64, 0.5)",
                  backdropFilter: "blur(9px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold mb-1"
                  style={{
                    background:
                      "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    display: "inline-block",
                  }}
                >
                  Ztar
                </div>
                <div className=" text-white text-xs md:text-sm lg:text-lg xl:text-base 2xl:text-xl">
                  A single wavelength can measure viscosity, density &
                  Temperature continuously.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[55%] xl:p-2 md:p-4">
            {/* heading and play button */}
            <div className=" md:flex gap-2 mb-2">
              <div className="mb-2 md:mb-0 text-lg lg:text-3xl 2xl:text-4xl font-semibold">
                Ultrasonic contact & non-contact based level measurement sensor
              </div>
              <div className=" flex rounded-full items-center justify-center gap-1 bg-[#01285C] h-4 py-4 px-2">
                <div className="text-[#FE9D1C]">
                  <RiPlayCircleFill size={20} />
                </div>
                <div className="text-sm mb-[2px] text-white">
                  Play&nbsp;Video
                </div>
              </div>
            </div>

            {/* orange tab */}
            <div className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-sm lg:text-lg xl:text-sm 2xl:text-xl font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2">
              Level: 0.03 m to 10 m
            </div>

            {/* description */}
            <div className=" text-[#60646C] text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-xl mb-2 font-medium">
              Ztar is a contact/contactless IIoT-enabled level measurement
              sensor that captures continuous level across any hazardous
              environment with accuracy in contrast to radar-based level
              measurement sensors.
            </div>

            {/* cards */}
            <div className="md:flex gap-2 mb-2 md:mb-20 text-sm lg:text-base 2xl:text-xl">
              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 border border-[#D9D9E0] bg-white p-2 mb-2 md:mb-0">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={metal} />
                </div>
                <div className="font-semibold">Metal Manufacturing</div>
              </div>

              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={refrigerant} />
                </div>
                <div className="font-semibold">Refrigerants</div>
              </div>
            </div>

            {/* <div className="md:flex gap-2  mb-2 text-xs xl:text-base">
              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white mb-2 md:mb-0">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={semi} />
                </div>
                <div className="font-semibold">Semiconductor Manufacturing</div>
              </div>

              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={ref} />
                </div>
                <div className="font-semibold">Refiniries</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="md:h-[70vh] md:flex p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg mb-4">
          <div className="w-full md:w-[45%] p-2">
            <div
              className="w-full h-full flex flex-col justify-center items-center rounded-lg relative"
              style={{
                background:
                  "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
              }}
            >
              <img
                className="w-[45%] h-[85%] object-cover object-top"
                src={ztar}
                alt="ztar"
              />
              <div
                className="h-[45%] md:h-[20%] absolute bottom-0 w-full px-4 rounded-b-lg"
                style={{
                  background: "rgba(64, 64, 64, 0.5)",
                  backdropFilter: "blur(9px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-2xl font-semibold h-[45%]"
                  style={{
                    background:
                      "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    display: "inline-block",
                  }}
                >
                  Ztar
                </div>
                <div className="h-[55%] text-white text-[12px]">
                  A single wavelength can measure viscosity, density &
                  Temperature continuously.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[55%] p-2 md:p-4">
            <div className="h-[40%]">
              <div className="h-[75%] md:flex">
                <div className="w-full md:w-[80%] text-xl md:text-3xl font-semibold">
                  Ultrasonic contact & <br /> non-contact based level
                  measurement sensor
                </div>
                <div className="w-full md:w-[20%] py-1">
                  <div className="flex rounded-full items-center justify-center gap-1 p-1 bg-[#01285C]">
                    <div className="text-[#FE9D1C]">
                      <RiPlayCircleFill size={20} />
                    </div>
                    <div className="text-sm mb-[2px] text-white">
                      Play Video
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[25%]">
                <div className="w-full md:w-auto inline-block px-2 py-1 rounded-full text-sm font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center">
                  Level: 0.03 m to 10 m
                </div>
              </div>
            </div>
            <div className="h-[25%] text-[#60646C] py-2 text-sm md:py-0 md:text-base flex items-center">
              Ztar is a contact/contactless IIoT-enabled level measurement
              sensor that captures continuous level across any hazardous
              environment with accuracy in contrast to radar-based level
              measurement sensors.
            </div>
            <div className="h-[35%] flex flex-col gap-1 text-sm md:text-base">
              <div className="h-1/2 flex flex-col md:flex-row gap-1">
                <div className="rounded-lg w-full md:w-1/2 flex border border-[#D9D9E0] bg-white">
                  <div className="w-[20%] h-full p-2 flex items-center justify-center">
                    <img src={metal} />
                  </div>
                  <div className="w-[80%] font-semibold flex items-center p-1 md:p-2">
                    Metal Manufacturing
                  </div>
                </div>

                <div className="rounded-lg w-full md:w-1/2 flex border border-[#D9D9E0] bg-white">
                  <div className="w-[20%] h-full p-2 flex items-center justify-center">
                    <img src={refrigerant} />
                  </div>
                  <div className="w-[80%] font-semibold flex items-center p-1 md:p-2">
                    Refrigerants
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
