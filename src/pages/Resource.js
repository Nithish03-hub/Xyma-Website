import React, { useState, useEffect} from 'react';
import cs from '../Assets/cs.png';
import all1 from '../Images/all1.png';
import all2 from '../Images/all2.png';
import all3 from '../Images/all3.png';
import aluminum from '../Images/al1.png';
import steel1 from '../Images/steel1.png';
import steel2 from '../Images/steel2.png';
import tube1 from '../Images/tube1.png';
import tube2 from '../Images/tube2.png';
import oil1 from '../Images/oil1.png';
import oil2 from '../Images/oil2.png';
import oilRecovery from "../Assets/oilRecovery.png";
import oilRecovery2 from '../Assets/oilRecovery3.jpg';
import paints1 from '../Assets/paintsresized.png';
import paints2 from '../Assets/paints2.jpg';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Resource = () => {
  const [selectedContent, setSelectedContent] = useState('All');

  const toggleContent = (word) => {
      setSelectedContent(word);
  };

  const navigate= useNavigate();
  const handleContactClick = () =>{
    navigate ('/contact');
  }
  const handleCaseStudyClick=()=>{
    navigate('/casestudy');
  }
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

    return (
      <div className="overflow-hidden">
        <section className="mt-[10vh] h-[60vh] sm:h-[90vh] relative shadow-white shadow-xl">
          <img
            className="h-full w-full object-cover"
            src={cs}
            alt="Case Studies"
          />
          <div className="absolute inset-0 text-white flex flex-col items-center justify-center">
            <div className="text-4xl sm:text-5xl font-semibold sm:font-bold">
              Case Studies
            </div>
            <div className="text-sm text-center mt-4 mx-[20%] sm:mx-[30%]">
              Xyma Analytics Case Studies are documented examples illustrating
              the application and effectiveness of Xyma Analytics' solutions in
              real-world scenarios
            </div>
          </div>
        </section>

        {/* bottom text */}
        <div className="w-full h-[10vh] text-center text-gray-300 font-semibold text-[40px] sm:text-[90px] 2xl:text-[120px] -mt-[20px] sm:-mt-[50px] 2xl:-mt-[65px] mb-[20px] sm:mb-[70px]">
          CASE STUDIES
        </div>

        {/* resources title */}
        <div className="mx-[5%] sm:flex justify-end">
          <div
            className="flex sm:flex-col gap-2  w-full sm:w-[15%] font-semibold p-6 overflow-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div>
              <div
                onClick={() => toggleContent("All")}
                className={`${
                  selectedContent === "All" ? "text-[#013872]" : "text-[gray]"
                } cursor-pointer flex`}
              >
                {selectedContent === "All" && (
                  <div className="invisible sm:visible border border-[#013872]"></div>
                )}
                <div className="sm:ml-1">All</div>
              </div>
              {selectedContent === "All" && (
                <div className="sm:hidden border border-[#013872]"></div>
              )}
            </div>

            <div>
              <div
                onClick={() => toggleContent("Aluminum")}
                className={`${
                  selectedContent === "Aluminum"
                    ? "text-[#013872]"
                    : "text-[gray]"
                } cursor-pointer flex`}
              >
                {selectedContent === "Aluminum" && (
                  <div className="invisible sm:visible border border-[#013872]"></div>
                )}
                <div className="sm:ml-1">Aluminum</div>
              </div>
              {selectedContent === "Aluminum" && (
                <div className="sm:hidden border border-[#013872]"></div>
              )}
            </div>

            <div>
              <div
                onClick={() => toggleContent("Steel")}
                className={`${
                  selectedContent === "Steel" ? "text-[#013872]" : "text-[gray]"
                } cursor-pointer flex`}
              >
                {selectedContent === "Steel" && (
                  <div className="invisible sm:visible border border-[#013872]"></div>
                )}
                <div className="sm:ml-1">Steel</div>
              </div>
              {selectedContent === "Steel" && (
                <div className="sm:hidden border border-[#013872]"></div>
              )}
            </div>

            <div>
              <div
                onClick={() => toggleContent("Refiniries")}
                className={`${
                  selectedContent === "Refiniries"
                    ? "text-[#013872]"
                    : "text-[gray]"
                } cursor-pointer flex`}
              >
                {selectedContent === "Refiniries" && (
                  <div className="invisible sm:visible border border-[#013872]"></div>
                )}
                <div className="sm:ml-1">Refiniries</div>
              </div>
              {selectedContent === "Refiniries" && (
                <div className="sm:hidden border border-[#013872]"></div>
              )}
            </div>

            <div>
              <div
                onClick={() => toggleContent("Lubricants")}
                className={`${
                  selectedContent === "Lubricants"
                    ? "text-[#013872]"
                    : "text-[gray]"
                } cursor-pointer flex`}
              >
                {selectedContent === "Lubricants" && (
                  <div className="invisible sm:visible border border-[#013872]"></div>
                )}
                <div className="sm:ml-1">Lubricants</div>
              </div>
              {selectedContent === "Lubricants" && (
                <div className="sm:hidden border border-[#013872]"></div>
              )}
            </div>

            <div>
              <div
                onClick={() => toggleContent("OilRecovery")}
                className={`${
                  selectedContent === "OilRecovery"
                    ? "text-[#013872]"
                    : "text-[gray]"
                } cursor-pointer flex`}
              >
                {selectedContent === "OilRecovery" && (
                  <div className="invisible sm:visible border border-[#013872]"></div>
                )}
                <div className="sm:ml-1">Oil&nbsp;Recovery</div>
              </div>
              {selectedContent === "OilRecovery" && (
                <div className="sm:hidden border border-[#013872]"></div>
              )}
            </div>

            <div>
              <div
                onClick={() => toggleContent("Paints")}
                className={`${
                  selectedContent === "Paints"
                    ? "text-[#013872]"
                    : "text-[gray]"
                } cursor-pointer flex`}
              >
                {selectedContent === "Paints" && (
                  <div className="invisible sm:visible border border-[#013872]"></div>
                )}
                <div className="sm:ml-1">Paints</div>
              </div>
              {selectedContent === "Paints" && (
                <div className="sm:hidden border border-[#013872]"></div>
              )}
            </div>
          </div>

          {/* resources content */}
          <div className="w-full sm:w-[80%]">
            {/* aluminium content */}
            {(selectedContent === "Aluminum" || selectedContent === "All") && (
              <div
                className="sm:flex rounded-2xl mb-4 border border-[#CDCED6]"
                data-aos="slide-left"
              >
                <div className="w-full sm:w-1/2 p-4">
                  <div className="font-semibold text-2xl sm:text-3xl mb-4">
                    Aluminum
                  </div>
                  <div className="mb-4 relative">
                    <img src={aluminum} />
                    <span
                      className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer"
                      onClick={handleCaseStudyClick}
                    >
                      Case Studies
                    </span>
                  </div>
                  <div className="text-lg sm:text-xl">
                    A 10°C temperature deviation reduces efficiency, promotes
                    anode effect, and increases PFC emissions.
                  </div>
                </div>
                {/* empty line */}
                <div className="border border-[#CDCED6] my-[10%]" />
                <div className="w-full sm:w-1/2 p-4">
                  <div className="font-semibold text-2xl sm:text-3xl mb-4">
                    All
                  </div>
                  <div className="flex p-4">
                    <div className="w-[30%] flex items-center justify-center">
                      <img src={all1} />
                    </div>
                    <div className="w-[70%] px-2 text-sm sm:text-xl">
                      A 10°C shift lowers efficiency, boosts anode effect, and
                      raises PFC emissions.
                    </div>
                  </div>
                  {/* empty line */}
                  <div className="border border-[#CDCED6] mx-[5%]" />
                  <div className="flex p-4">
                    <div className="w-[30%]">
                      <img src={all2} />
                    </div>
                    <div className="w-[70%] px-2 text-sm sm:text-xl">
                      Extending the ladle life for one cycle would result in
                      steel production worth $5.1 million.
                    </div>
                  </div>
                  {/* empty line */}
                  <div className="border border-[#CDCED6] mx-[5%]" />
                  <div className="flex p-4">
                    <div className="w-[30%]">
                      <img src={all3} />
                    </div>
                    <div className="w-[70%] px-2 text-sm sm:text-xl">
                      20°C rise halves reformer tube lifespan; design
                      temperature crucial.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* steel content */}
            {(selectedContent === "Steel" || selectedContent === "All") && (
              <div
                className="sm:flex rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6]"
                data-aos="slide-left"
              >
                <div className="w-full sm:w-1/2 p-4">
                  <div className="font-semibold text-3xl mb-4 flex justify-between">
                    <div>Steel</div>
                    <span
                      className="sm:hidden text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img src={steel1} />
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-xl">
                    Extending ladle life for one cycle yields steel worth $5.1M
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-4">
                  <div className="flex justify-end mb-4">
                    <span
                      className="hidden sm:block text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img src={steel2}></img>
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-xl">
                    Extending the lifespan of the ladle for one cycle results in
                    producing steel valued at $5.1 million
                  </div>
                </div>
              </div>
            )}

            {/* refiniries content */}
            {(selectedContent === "Refiniries" ||
              selectedContent === "All") && (
              <div
                className="sm:flex rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6]"
                data-aos="slide-left"
              >
                <div className="w-full sm:w-1/2 p-4">
                  <div className="font-semibold text-3xl mb-4 flex justify-between">
                    <div>Refiniries</div>
                    <span
                      className="sm:hidden text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img src={tube1} />
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-xl">
                    A 20°C temperature rise cuts reformer tube lifespan by half
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-4">
                  <div className="flex justify-end mb-4">
                    <span
                      className="hidden sm:block text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img src={tube2}></img>
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-xl">
                    A 20°C temperature increase halves the lifespan of reformer
                    tubes
                  </div>
                </div>
              </div>
            )}

            {/* lubricants content */}
            {(selectedContent === "Lubricants" ||
              selectedContent === "All") && (
              <div
                className="sm:flex rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6]"
                data-aos="slide-left"
              >
                <div className="w-full sm:w-1/2 p-4">
                  <div className="font-semibold text-3xl mb-4 flex justify-between">
                    <div>Lubricants</div>
                    <span
                      className="sm:hidden text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img src={oil1} />
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-xl">
                    30% of maintenance budget influenced by lubricants,
                    highlighting their significant role in operational expenses
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-4">
                  <div className="flex justify-end mb-4">
                    <span
                      className="hidden sm:block text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img src={oil2}></img>
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-xl">
                    Lubricants significantly affect operational costs,
                    accounting for 30% of the maintenance budget
                  </div>
                </div>
              </div>
            )}

            {/* oil recovery content */}
            {(selectedContent === "OilRecovery" ||
              selectedContent === "All") && (
              <div
                className="sm:flex rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6]"
                data-aos="slide-left"
              >
                <div className="w-full sm:w-1/2 p-4">
                  <div className="font-semibold text-3xl mb-4 flex justify-between">
                    <div>Oil Recovery</div>
                    <span
                      className="sm:hidden text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img className="rounded-2xl" src={oilRecovery} />
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-xl">
                    1.3 lakhs/day would be the worth of injection polymer of
                    unknown viscosity flooded in EOR due to unavailability of
                    continuous viscosity measurement technique.
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-4">
                  <div className="flex justify-end mb-4">
                    <span
                      className="hidden sm:block text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img className="rounded-2xl" src={oilRecovery2}></img>
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-xl">
                    Enhanced oil recovery 'EOR' techniques can improve recovery
                    rates from 20-40% to 30-60% of the original oil in place.
                  </div>
                </div>
              </div>
            )}

            {/* paints content */}
            {(selectedContent === "Paints" || selectedContent === "All") && (
              <div
                className="sm:flex rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6]"
                data-aos="slide-left"
              >
                <div className="w-full sm:w-1/2 p-4">
                  <div className="font-semibold text-3xl mb-4 flex justify-between">
                    <div>Paints</div>
                    <span
                      className="sm:hidden text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img className="rounded-2xl" src={paints1} />
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-xl">
                    Water-based paints account for about 80% of all paints sold
                    in the residential market.
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-4">
                  <div className="flex justify-end mb-4">
                    <span
                      className="hidden sm:block text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img className="rounded-2xl" src={paints2}></img>
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-xl">
                    The use of low-VOC (volatile organic compounds) paints has
                    increased by over 50% in the past decade due to
                    environmental regulations and consumer demand.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <section>
          <div className="flex">
            <div style={{ width: "20%", marginLeft: "5%", marginTop: "12%" }}>
              <p className="font-semibold">
                <span
                  style={{
                    fontSize: "15px",
                    cursor: "pointer",
                    color: selectedWord === "All" ? "#013872" : "gray",
                  }}
                  onClick={() => toggleContent("All")}
                >
                  All
                </span>
              </p>
              <p className="font-semibold">
                <span
                  style={{
                    fontSize: "15px",
                    cursor: "pointer",
                    color: selectedWord === "Aluminum" ? "#013872" : "gray",
                  }}
                  onClick={() => toggleContent("Aluminum")}
                >
                  Aluminum
                </span>
              </p>
              <p className="font-semibold">
                <span
                  style={{
                    fontSize: "15px",
                    cursor: "pointer",
                    color: selectedWord === "Steel" ? "#013872" : "gray",
                  }}
                  onClick={() => toggleContent("Steel")}
                >
                  Steel
                </span>
              </p>
              <p className="font-semibold">
                <span
                  style={{
                    fontSize: "15px",
                    cursor: "pointer",
                    color: selectedWord === "Refineries" ? "#013872" : "gray",
                  }}
                  onClick={() => toggleContent("Refineries")}
                >
                  Refineries
                </span>
              </p>
              <p className="font-semibold">
                <span
                  style={{
                    fontSize: "15px",
                    cursor: "pointer",
                    color: selectedWord === "Lubricants" ? "#013872" : "gray",
                  }}
                  onClick={() => toggleContent("Lubricants")}
                >
                  Lubricants
                </span>
              </p>
              <p className="font-semibold">
                <span
                  style={{
                    fontSize: "15px",
                    cursor: "pointer",
                    color: selectedWord === "Oil Recovery" ? "#013872" : "gray",
                  }}
                  onClick={() => toggleContent("Oil Recovery")}
                >
                  Oil Recovery
                </span>
              </p>
              <p className="font-semibold">
                <span
                  style={{
                    fontSize: "15px",
                    cursor: "pointer",
                    color: selectedWord === "Paints" ? "#013872" : "gray",
                  }}
                  onClick={() => toggleContent("Paints")}
                >
                  Paints
                </span>
              </p>
            </div>
            <div>
              {(selectedWord === "Aluminum" || selectedWord === "All") && (
                <div
                  className="border border-gray-200 rounded-2xl p-3 flex "
                  style={{ width: "70%", marginLeft: "10%", marginTop: "10%" }}
                  data-aos="slide-left"
                >
                  <span className="text-xl">Aluminum</span>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      marginTop: "6%",
                      marginRight: "5%",
                    }}
                  >
                    <img
                      style={{ width: "95%" }}
                      src={aluminum}
                      alt="Aluminum Image"
                    />
                    <button
                      className="bg-white rounded-full text-xs"
                      style={{
                        position: "absolute",
                        bottom: "55%",
                        left: "68%",
                        width: "25%",
                        height: "6%",
                      }}
                      onClick={handleCaseStudyClick}
                    >
                      Case Studies
                    </button>
                    <p
                      style={{
                        width: "90%",
                        fontSize: "20px",
                        marginTop: "20px",
                      }}
                    >
                      A 10°C temperature deviation reduces efficiency, promotes
                      anode effect, and increases PFC emissions.
                    </p>
                  </div>

                  <div>
                    <span className="text-xl">All</span>
                    <div className="flex mt-4">
                      <div>
                        <img
                          style={{
                            width: "65%",
                            marginLeft: "25%",
                            marginTop: "6px",
                          }}
                          src={all1}
                        ></img>
                      </div>
                      <p style={{ width: "65%", fontSize: "18px" }}>
                        A 10°C shift lowers efficiency, boosts anode effect, and
                        raises PFC emissions.
                      </p>
                    </div>

                    <div className="flex mt-6">
                      <div>
                        <hr
                          class="ml-3 mt-2 border border-gray-200"
                          style={{ width: "220%" }}
                        />
                        <img
                          style={{
                            width: "65%",
                            marginLeft: "25%",
                            marginTop: "15px",
                          }}
                          src={all2}
                        ></img>
                      </div>
                      <p
                        style={{
                          width: "68%",
                          fontSize: "18px",
                          marginTop: "20px",
                        }}
                      >
                        Extending the ladle life for one cycle would result in
                        steel production worth $5.1 million.
                      </p>
                    </div>

                    <div className="flex mt-6">
                      <div>
                        <hr
                          class="ml-2 border border-gray-200"
                          style={{ width: "220%" }}
                        />
                        <img
                          style={{
                            width: "65%",
                            marginLeft: "25%",
                            marginTop: "16px",
                          }}
                          src={all3}
                        ></img>
                      </div>
                      <p
                        style={{
                          width: "65%",
                          fontSize: "18px",
                          marginTop: "20px",
                        }}
                      >
                        20°C rise halves reformer tube lifespan; design
                        temperature crucial.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {(selectedWord === "Steel" || selectedWord === "All") && (
                <div
                  className="border border-gray-200 rounded-2xl p-3 flex "
                  style={{ width: "70%", marginLeft: "10%", marginTop: "3%" }}
                >
                  <div className="text-xl">Steel</div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      marginTop: "6%",
                      marginLeft: "5%",
                    }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src={steel1}
                      alt="Steel Image"
                    />
                    <button
                      className="bg-white rounded-full text-xs"
                      style={{
                        position: "absolute",
                        bottom: "38%",
                        left: "70%",
                        width: "25%",
                        height: "7%",
                      }}
                    >
                      Case Studies
                    </button>
                    <p
                      style={{
                        width: "95%",
                        fontSize: "20px",
                        marginTop: "20px",
                      }}
                    >
                      Extending ladle life for one cycle yields steel worth
                      $5.1M
                    </p>
                  </div>

                  <div>
                    <div>
                      <button
                        className=" text-white py-2 px-3 rounded-full text-xs mt-2"
                        style={{
                          background:
                            "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                          marginLeft: "72%",
                        }}
                      >
                        Read More
                      </button>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        marginTop: "0%",
                        marginLeft: "15%",
                      }}
                    >
                      <img
                        style={{
                          width: "80%",
                          marginLeft: "10%",
                          marginTop: "2%",
                        }}
                        src={steel2}
                      ></img>
                      <button
                        className="bg-white rounded-full text-xs"
                        style={{
                          position: "absolute",
                          bottom: "37%",
                          left: "62%",
                          width: "22%",
                          height: "7%",
                        }}
                      >
                        Case Studies
                      </button>
                      <p
                        style={{
                          width: "95%",
                          fontSize: "20px",
                          marginTop: "10%",
                          marginLeft: "10%",
                        }}
                      >
                        Extending the lifespan of the ladle for one cycle
                        results in producing steel valued at $5.1 million
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {(selectedWord === "Refineries" || selectedWord === "All") && (
                <div
                  className="border border-gray-200 rounded-2xl p-3 flex "
                  style={{ width: "70%", marginLeft: "10%", marginTop: "3%" }}
                >
                  <div className="text-xl">Refineries</div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      marginTop: "6%",
                    }}
                  >
                    <img
                      style={{ width: "85%" }}
                      src={tube1}
                      alt="Tube Image"
                    />
                    <button
                      className="bg-white rounded-full text-xs"
                      style={{
                        position: "absolute",
                        bottom: "38%",
                        left: "60%",
                        width: "22%",
                        height: "7%",
                      }}
                    >
                      Case Studies
                    </button>
                    <p
                      style={{
                        width: "95%",
                        fontSize: "20px",
                        marginTop: "20px",
                      }}
                    >
                      A 20°C temperature rise cuts reformer tube lifespan by
                      half
                    </p>
                  </div>

                  <div>
                    <div>
                      <button
                        className=" text-white py-2 px-1 rounded-full text-xs mt-2"
                        style={{
                          background:
                            "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                          marginLeft: "70%",
                          width: "25%",
                          height: "25%",
                        }}
                      >
                        Read More
                      </button>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        marginTop: "0%",
                        marginLeft: "1%",
                      }}
                    >
                      <img
                        style={{
                          width: "85%",
                          marginLeft: "8%",
                          marginTop: "2%",
                        }}
                        src={tube2}
                      ></img>
                      <button
                        className="bg-white rounded-full text-xs"
                        style={{
                          position: "absolute",
                          bottom: "37%",
                          left: "65%",
                          width: "22%",
                          height: "7%",
                        }}
                      >
                        Case Studies
                      </button>
                      <p
                        style={{
                          width: "95%",
                          fontSize: "20px",
                          marginTop: "8%",
                          marginLeft: "6%",
                        }}
                      >
                        A 20°C temperature increase halves the lifespan of
                        reformer tubes
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {(selectedWord === "Lubricants" || selectedWord === "All") && (
                <div
                  className="border border-gray-200 rounded-2xl p-3 flex "
                  style={{ width: "70%", marginLeft: "10%", marginTop: "3%" }}
                >
                  <div className="text-xl">Lubricants</div>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      marginTop: "6%",
                    }}
                  >
                    <img style={{ width: "85%" }} src={oil1} alt="Oil Image" />
                    <button
                      className="bg-white rounded-full text-xs"
                      style={{
                        position: "absolute",
                        bottom: "43%",
                        left: "60%",
                        width: "22%",
                        height: "7%",
                      }}
                    >
                      Case Studies
                    </button>
                    <p
                      style={{
                        width: "95%",
                        fontSize: "20px",
                        marginTop: "20px",
                      }}
                    >
                      30% of maintenance budget influenced by lubricants,
                      highlighting their significant role in operational
                      expenses
                    </p>
                  </div>

                  <div>
                    <div>
                      <button
                        className=" text-white py-2 px-1 rounded-full text-xs mt-2"
                        style={{
                          background:
                            "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                          marginLeft: "70%",
                          width: "26%",
                          height: "25%",
                        }}
                      >
                        Read More
                      </button>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        marginTop: "0%",
                      }}
                    >
                      <img
                        style={{
                          width: "95%",
                          marginLeft: "1%",
                          marginTop: "4%",
                        }}
                        src={oil2}
                      ></img>
                      <button
                        className="bg-white rounded-full text-xs"
                        style={{
                          position: "absolute",
                          bottom: "37%",
                          left: "70%",
                          width: "24%",
                          height: "7%",
                        }}
                      >
                        Case Studies
                      </button>
                      <p
                        style={{
                          width: "95%",
                          fontSize: "20px",
                          marginTop: "6.5%",
                          marginLeft: "1%",
                        }}
                      >
                        Lubricants significantly affect operational costs,
                        accounting for 30% of the maintenance budget
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section> */}
      </div>
    );
}

export default Resource;
