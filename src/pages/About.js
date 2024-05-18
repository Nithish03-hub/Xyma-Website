import React from 'react';
import { useNavigate } from 'react-router-dom';
import iit from '../Assets/Frameiit.png';
import second from '../Assets/secondline.png';
import left from '../Assets/leftarrow.png';
import group1 from '../Assets/Framegroup.png';
import frame1 from '../Assets/Frame1.png';
import frame21 from '../Assets/Frame21.png';
import frame3 from '../Assets/Frame3.png';
import frame4 from '../Assets/Frame4.png';
import c1 from '../Assets/Framec1.png';
import c2 from '../Assets/Framec2.png';
import c3 from '../Assets/Framec3.png';
import c4 from '../Assets/Framec4.png';
import c5 from '../Assets/Framec5.png';
import c6 from '../Assets/Framec6.png';
import ceo2 from '../Assets/Frameceo2.png';
import framevector from '../Assets/framevector.png'
import photo from '../Assets/photo.png'
import logo from '../Assets/logo.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import share from '../Assets/share.png';
import arrow from '../Assets/arrow.png';
import vector from '../Assets/Vector.png';
import line from '../Assets/line.png';



 


const About = () => {
  
 const navigate = useNavigate();

  const handleContactClick = () => {
    
    navigate('/contact');
  };
  
  return (
    <div>
      <section>
        <div style={{ position: "relative", textAlign: "center" }}>
          <img style={{ marginTop: "4%" }} src={iit} alt="Frame Image" />
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "40%",
              transform: "translate(-50%, -50%)",
              textAlign: "left",
            }}
          >
            <h1 className="text-white text-6xl font-bold mt-24">2019</h1>
            <p
              className="text-white mt-5 text-3xl font-semibold"
              style={{ width: "56%", textAlign: "left" }}
            >
              Founded through the CNDE, IIT Madras, and incubated at IIT Madras
              Incubation Cell
            </p>
          </div>
          <div
            className="text-white text-5xl font-semibold"
            style={{
              position: "absolute",
              top: "15%",
              left: "85%",
              transform: "translate(-50%, -50%)",
              textAlign: "left",
            }}
          >
            20+
          </div>
          <div
            className="text-white text-sm font-semibold"
            style={{
              position: "absolute",
              top: "25%",
              left: "85%",
              transform: "translate(-50%, -50%)",
              textAlign: "left",
            }}
          >
            Years of R&D
          </div>
          <div
            className="text-white text-5xl font-semibold"
            style={{
              position: "absolute",
              top: "35%",
              left: "85%",
              transform: "translate(-50%, -50%)",
              textAlign: "left",
            }}
          >
            18+
          </div>
          <div
            className="text-white text-sm font-semibold"
            style={{
              position: "absolute",
              top: "45%",
              left: "85%",
              transform: "translate(-50%, -50%)",
              textAlign: "left",
            }}
          >
            Intellectual
            <br /> Properties
          </div>
          <div
            className="text-white text-5xl font-semibold"
            style={{
              position: "absolute",
              top: "55%",
              left: "85%",
              transform: "translate(-50%, -50%)",
              textAlign: "left",
            }}
          >
            35+
          </div>
          <div
            className="text-white text-sm font-semibold"
            style={{
              position: "absolute",
              top: "65%",
              left: "85%",
              transform: "translate(-50%, -50%)",
              textAlign: "left",
            }}
          >
            Publications
          </div>
        </div>
      </section>

      {/*<div className="leading-5 text-grey text-7xl font-semibold text-center text-gray-300">ABOUT US</div>*/}

      <section>
        <center>
          <div className="text-4xl font-semibold " style={{ marginTop: "5%" }}>
            About XYMA
            <img
              style={{ width: "12%", marginLeft: "20px" }}
              src={second}
            ></img>
          </div>
          <div
            className="text-[#60646C] "
            style={{ width: "85%", marginTop: "14px" }}
          >
            "XYMA Analytics is a deep-tech company started from IIT Madras,
            serving 15+ MNCs globally now to provide them with accurate
            multi-point temperature and multi-parameter measurements through
            patented ultrasonic waveguide technology."
          </div>
        </center>

        <div className="grid grid-cols-2">
          <div
            className="mt-20 ml-14 border border-gray-300 p-6"
            style={{ borderRadius: "14px", width: "70%", height: "75%" }}
          >
            <button className="bg-[#FEE1B7]  rounded-full w-36 h-10 md:w-16 md:h-8">
              2020
            </button>
            <div>
              <p
                className="mt-4  font-semibold text-lg"
                style={{ width: "75%" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div>
              <p
                className="mt-4  text-[#60646C] text-sm "
                style={{ width: "100%" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the make a type specimen book.
              </p>
            </div>
            <button
              className="mt-4 text-white text-sm rounded-full w-36 h-10 md:w-24 md:h-9"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
            >
              View More
            </button>
          </div>

          <div>
            <div>
              <p
                className="text-[#1C2024] font-semibold"
                style={{ width: "58%", marginTop: "22%", marginLeft: "22%" }}
              >
                Lorem Ipsum has been the industry's standard dummy text when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
            </div>
          </div>

          <div>
            <div>
              <p
                className="text-[#1C2024] font-semibold"
                style={{ width: "58%", marginTop: "25%", marginLeft: "10%" }}
              >
                Lorem Ipsum has been the industry's standard dummy text when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
            </div>
          </div>

          <div
            className=" ml-14 border border-gray-300 p-6"
            style={{
              borderRadius: "14px",
              width: "70%",
              height: "75%",
              marginLeft: "20%",
              marginTop: "10%",
            }}
          >
            <button className="bg-[#FEE1B7]  rounded-full w-36 h-10 md:w-16 md:h-8">
              2020
            </button>
            <div>
              <p
                className="mt-4  font-semibold text-lg"
                style={{ width: "75%" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div>
              <p
                className="mt-4  text-[#60646C] text-sm "
                style={{ width: "100%" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the make a type specimen book.
              </p>
            </div>
            <button
              className="mt-4 text-white text-sm rounded-full w-36 h-10 md:w-24 md:h-9"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
            >
              View More
            </button>
          </div>
          <div
            className=" ml-14 border border-gray-300 p-6"
            style={{
              borderRadius: "14px",
              width: "70%",
              height: "75%",
              marginTop: "10%",
            }}
          >
            <button className="bg-[#FEE1B7]  rounded-full w-36 h-10 md:w-16 md:h-8">
              2020
            </button>
            <div>
              <p
                className="mt-4  font-semibold text-lg"
                style={{ width: "75%" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div>
              <p
                className="mt-4  text-[#60646C] text-sm "
                style={{ width: "100%" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the make a type specimen book.
              </p>
            </div>
            <button
              className="mt-4 text-white text-sm rounded-full w-36 h-10 md:w-24 md:h-9"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
            >
              View More
            </button>
          </div>

          <div>
            <div>
              <p
                className="text-[#1C2024] font-semibold"
                style={{ width: "58%", marginTop: "22%", marginLeft: "22%" }}
              >
                Lorem Ipsum has been the industry's standard dummy text when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <center>
          <div className="text-3xl font-semibold " style={{ marginTop: "10%" }}>
            The Team <img className="w-36" src={second}></img>
          </div>
          <img style={{ width: "85%", marginTop: "60px" }} src={group1}></img>
        </center>
      </section>

      <section>
        <center>
          <div className="text-3xl font-semibold" style={{ marginTop: "10%" }}>
            The Vision <img className="w-36" src={second} alt="Second Image" />
          </div>
          <p className="mt-6" style={{ width: "64%" }}>
            Our vision is to provide reliable measurements at the most
            unreliable times. Democratize sensor-based process efficiency in
            Industries by enabling them with rich data sets of process
            parameters. Provide plant-wide distributed and concurrent sensing
            solutions for disruptive data-driven decision making with enhanced
            sustainability.
          </p>
          <div
            className="flex flex-wrap gap-5 mt-8"
            style={{ maxWidth: "100%", justifyContent: "center" }}
          >
            <img style={{ width: "20%" }} src={frame1} alt="Frame 1" />
            <img style={{ width: "20%" }} src={frame21} alt="Frame 2" />
            <img style={{ width: "20%" }} src={frame3} alt="Frame 3" />
            <img style={{ width: "20%" }} src={frame4} alt="Frame 4" />
          </div>
        </center>
      </section>

      <section>
        <center>
          <div className="text-3xl font-semibold" style={{ marginTop: "10%" }}>
            Key Values
            <img className="w-36" src={second} alt="Second Image" />
          </div>
          <div
            className="flex gap-16 mt-12"
            style={{ width: "70%", justifyContent: "center" }}
          >
            <div>
              <img src={c1}></img>
              <div className="font-semibold" style={{ marginTop: "10%" }}>
                Key Values
              </div>
            </div>
            <div>
              <img src={c2}></img>
              <div className="font-semibold" style={{ marginTop: "10%" }}>
                Key Values
              </div>
            </div>
            <div>
              <img src={c3}></img>
              <div className="font-semibold" style={{ marginTop: "10%" }}>
                Key Values
              </div>
            </div>
            <div>
              <img src={c4}></img>
              <div className="font-semibold" style={{ marginTop: "10%" }}>
                Key Values
              </div>
            </div>
            <div>
              <img src={c5}></img>
              <div className="font-semibold" style={{ marginTop: "10%" }}>
                Key Values
              </div>
            </div>
            <div>
              <img src={c6}></img>
              <div className="font-semibold" style={{ marginTop: "10%" }}>
                Key Values
              </div>
            </div>
          </div>
        </center>

        <div className="grid grid-cols-2">
          <div>
            <img
              style={{ width: "65%", marginTop: "10%", marginLeft: "30%" }}
              src={ceo2}
            ></img>
          </div>
          <div
            className="text-center text-[#60646C]"
            style={{ width: "55%", marginTop: "20%", marginLeft: "10%" }}
          >
            <span className="font-semibold text-xl text-[#1C2024]">
              The Mission{" "}
            </span>
            <br /> Our mission is to increase efficiency in operations through
            IIoT-enabled process parameter monitoring and AI-based predictive
            maintenance to enhance asset life and prevent unplanned downtime
            with Ultrasonic Waveguide Technology.
          </div>
        </div>
      </section>

      <section style={{ textAlign: "center" }}>
        <div className="relative">
          <img
            style={{ width: "5%", marginTop: "10%", marginLeft: "48%" }}
            src={framevector}
            alt="Frame Vector"
          />
          <p
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#60646C] font-semibold"
            style={{
              width: "66%",
              fontSize: "20px",
              textAlign: "center",
              marginTop: "4%",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            className="w-20"
            style={{ marginTop: "10%" }}
            src={photo}
            alt="Photo"
          />
        </div>

        <div className="text-[#1C2024] font-semibold mt-2">
          Dr. Nishanth Raja
        </div>
        <div className="text-[#60646C] text-xs">C.E.O. and Co-founder</div>
      </section>
    </div>
  );
}

export default About;
