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
import Xarrow from "react-xarrows";

const About = () => {
  
 const navigate = useNavigate();

  const handleContactClick = () => {
    
    navigate('/contact');
  };
  
  return (
    <div>
      <div className=" relative mt-[10vh] shadow-white shadow-2xl">
        <img
          className="h-[65vh] sm:h-[90vh] w-full object-cover"
          src={iit}
          alt="Frame Image"
        />
        <div className="absolute h-full w-full inset-0 p-8 sm:p-16 text-white">
          <div className="w-full h-full sm:flex">
            <div className="w-full sm:w-[90%] h-[70%] sm:h-full flex flex-col gap-4 justify-center text-center sm:text-left">
              <div className="text-4xl sm:text-6xl font-semibold sm:font-bold">
                2019
              </div>
              <div className="text-xs sm:text-4xl">
                Founded through the CNDE, IIT <br /> Madras, and incubated at
                IIT Madras <br /> Incubation Cell
              </div>
            </div>
            <div className="w-full sm:w-[10%] h-[30%] sm:h-full flex sm:flex-col justify-evenly">
              <div>
                <div className="text-4xl sm:text-6xl font-bold mb-2">20+</div>
                <div className="text-xs sm:text-sm">Years of R&D</div>
              </div>
              <div>
                <div className="text-4xl sm:text-6xl font-bold mb-2">18+</div>
                <div className="text-xs sm:text-sm">
                  Intellectual
                  <br />
                  Properties
                </div>
              </div>
              <div>
                <div className="text-4xl sm:text-6xl font-bold mb-2">35+</div>
                <div className="text-xs sm:text-sm">Publications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom text */}
      <div className="w-full h-[10vh] text-center text-gray-300 font-semibold text-[40px] sm:text-[90px] 2xl:text-[120px] -mt-[20px] sm:-mt-[50px] 2xl:-mt-[65px] mb-[20px] sm:mb-[70px]">
        ABOUT US
      </div>

      <div className="mt-10 mx-[5%]">
        <div className="text-center flex justify-center">
          <div className="text-3xl font-semibold flex flex-col w-[200px]">
            <div>About XYMA</div>
            <img className="object-cover" src={second} />
          </div>
        </div>
        <div className="text-[#60646C] text-center mt-2">
          "XYMA Analytics is a deep-tech company started from IIT Madras,
          serving 15+ MNCs globally now to provide them with accurate
          multi-point temperature and multi-parameter measurements through
          patented ultrasonic waveguide technology."
        </div>
      </div>

      {/* arrow box */}
      <div className="sm:h-[120vh] mt-8 mx-[5%]">
        <Xarrow
          start="box1"
          end="box2"
          dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
          color="gray"
          strokeWidth={1}
          headSize={10}
          curveness={1.2}
          showTail={true}
          tailShape="circle"
        />
        <Xarrow
          start="box3"
          end="box4"
          dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
          color="gray"
          strokeWidth={1}
          headSize={10}
          curveness={1.2}
          showTail={true}
          tailShape="circle"
        />
        <Xarrow
          start="box5"
          end="box6"
          startAnchor="bottom"
          endAnchor="top"
          dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
          color="gray"
          strokeWidth={1}
          headSize={10}
          curveness={1.2}
          showTail={true}
          tailShape="circle"
        />
        <Xarrow
          start="box7"
          end="box8"
          startAnchor="bottom"
          endAnchor="top"
          dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
          color="gray"
          strokeWidth={1}
          headSize={10}
          curveness={1.2}
          showTail={true}
          tailShape="circle"
        />
        <div className="sm:h-1/3 sm:flex justify-between">
          {/* box 1 */}
          <div
            className="relative border border-[#CDCED6] w-full sm:w-[35%] p-4 rounded-2xl mb-4 sm:mb-0"
            id="box1"
          >
            <div className="w-full h-full">
              <div className="sm:h-[20%] flex items-center mb-2 sm:mb-0">
                <span className="rounded-full px-2 py-1 text-xs bg-[#FEE1B7] font-medium">
                  2020
                </span>
              </div>
              <div className="sm:h-[30%] font-semibold mb-2 sm:mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </div>
              <div className="sm:h-[30%] text-xs text-[#60646C] mb-2 sm:mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the make a type specimen book.
              </div>
              <div className="sm:h-[20%] flex items-center">
                <span
                  className="text-xs rounded-full p-2 text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                >
                  View More
                </span>
              </div>
            </div>
          </div>
          {/* empty div for arrow - small screen */}
          <div
            className="absolute -mt-10 border border-black w-4 right-20 sm:hidden"
            id="box5"
          />

          {/* text 1 */}
          <div className="relative w-[60%] sm:w-[30%] text-sm font-medium flex items-center text-left mb-4 sm:mb-0">
            Lorem Ipsum has been the industry's standard dummy text when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </div>

          {/* empty div for arrow - small screen */}
          <div
            className="absolute border border-black w-4 right-40 mt-6 sm:hidden"
            id="box6"
          />
        </div>
        <div className="sm:h-1/3 flex flex-col-reverse sm:flex-row justify-between">
          {/* text 2 */}
          <div className="w-[60%] sm:w-[30%] text-sm font-medium flex items-center text-left mb-4 sm:mb-0">
            Lorem Ipsum has been the industry's standard dummy text when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </div>
          {/* box 2 */}
          <div className="relative border border-[#CDCED6] w-full sm:w-[35%] rounded-2xl mb-4 sm:mb-0 py-4">
            <div className="w-full h-full">
              <div className="sm:h-[20%] flex items-center px-4 mb-2 sm:mb-0">
                <span className="rounded-full px-2 py-1 text-xs bg-[#FEE1B7] font-medium">
                  2020
                </span>
              </div>
              <div className="sm:h-[30%] font-semibold px-4 mb-2 sm:mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
                {/* empty div for arrow */}
                <div className="-ml-4 mt-2" id="box2"></div>
              </div>
              {/* empty div for arrow */}
              <div id="box3"></div>
              <div className="sm:h-[30%] text-xs text-[#60646C] px-4 mb-2 sm:mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the make a type specimen book.
              </div>
              <div className="sm:h-[20%] flex items-center px-4 mb-2 sm:mb-0">
                <span
                  className="text-xs rounded-full p-2 text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                >
                  View&nbsp;More
                </span>
              </div>
            </div>
          </div>
          {/* empty div for arrow - small screen */}
          <div
            className="absolute border border-black w-4 right-40 sm:hidden"
            id="box8"
          />
        </div>
        {/* empty div for arrow - small screen */}
        <div
          className="absolute border border-black w-4 right-20 -mt-32 sm:hidden"
          id="box7"
        />
        <div className="sm:h-1/3 sm:flex justify-between">
          {/* box 3 */}
          <div
            className="border border-[#CDCED6] w-full sm:w-[35%] p-4 rounded-2xl mb-4 sm:mb-0"
            id="box4"
          >
            <div className="w-full h-full">
              <div className="sm:h-[20%] flex items-center mb-2 sm:mb-0">
                <span className="rounded-full px-2 py-1 text-xs bg-[#FEE1B7] font-medium">
                  2020
                </span>
              </div>
              <div className="sm:h-[30%] font-semibold mb-2 sm:mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </div>
              <div className="sm:h-[30%] text-xs text-[#60646C] mb-2 sm:mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the make a type specimen book.
              </div>
              <div className="sm:h-[20%] flex items-center mb-2 sm:mb-0">
                <span
                  className="text-xs rounded-full p-2 text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                >
                  View More
                </span>
              </div>
            </div>
          </div>
          {/* text 3 */}
          <div className="w-full sm:w-[30%] text-sm font-medium flex items-center text-left mb-4 sm:mb-0">
            Lorem Ipsum has been the industry's standard dummy text when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </div>
        </div>
      </div>

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
