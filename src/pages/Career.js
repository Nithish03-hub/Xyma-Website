import React, { useState,useRef  } from 'react';
import { useNavigate } from 'react-router-dom';
import frame from '../Assets/frame2.png'
import newframe from '../Assets/newframe.png'
import framevector from '../Assets/framevector.png'
import photo from '../Assets/photo.png'
import uline from '../Assets/uline.png'
import image1 from "../Assets/image1.png";
import { IoIosArrowDown } from "react-icons/io";
import ReactReadMoreReadLess from "react-read-more-read-less";
import useWindowSize from "react-use/lib/useWindowSize";

const Badge2 = ({ text, selected, onClick }) => {
  const badgeStyle = {
    backgroundColor: selected ? '#01285C' : '#EEF6FF',
    color: selected ? '#ffffff' : '#013872',
    padding: '5px 14px',
    borderRadius: '9999px',
    border: `1px solid ${selected ? '#01285C' : '#B4CEEC'}`,
    cursor: 'pointer'
  };

  

  return (
    <span style={badgeStyle} onClick={onClick}>
      {text}
    </span>
  );
};

const Career = () => {

  const [selectedBadge, setSelectedBadge] = useState(0);

  const handleBadgeClick = (index) => {
    setSelectedBadge(index);
  };

  const sectionRef = useRef(null);
  const { width } = useWindowSize();
  const isLargeScreen = width >= 768;

  const handleButtonClick = () => {
    const navbarHeight = window.innerHeight * 0.1; // 10vh to account for navbar
    const sectionTop =
      sectionRef.current.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = sectionTop - navbarHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();
  const handleContactClick =()=>{
    navigate ('/contact');
  }

  return (
    <div>
      <div className="h-[10vh]"></div>
      <section className="relative h-[60vh] md:h-[70vh] xl:h-[90vh] w-full shadow-white shadow-2xl">
        <img
          src={newframe}
          alt="Frame Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center">
          <div className="text-white text-4xl md:text-5xl font-semibold md:font-bold ">
            <div>"Together,</div>
            <div className="ml-6">we shine"</div>
          </div>
          <div className="text-white mt-3 md:mt-5 text-xs md:text-sm">
            We help you grow along with us
          </div>
          <button
            className="text-white text-xs py-2 px-5 mt-3 rounded-full flex justify-center items-center gap-1"
            style={{
              background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
            }}
            onClick={handleButtonClick}
          >
            <div>Know More</div>
            <div>
              <IoIosArrowDown size={13} />
            </div>
          </button>
        </div>
      </section>

      {/* bottom text */}
      <div className="w-full h-[10vh] text-center text-gray-300 font-semibold text-[40px] md:text-[90px] 2xl:text-[120px] -mt-[25px] md:-mt-[50px] 2xl:-mt-[65px] mb-[30px] md:mb-[70px]">
        WORK AT XYMA
      </div>

      <div className="md:h-[90vh] flex items-center">
        <div className="w-full flex flex-col items-center">
          <div>
            <img className="h-[50px] w-[65px]" src={framevector} alt="quote" />
          </div>

          <div className="text-[#60646C] font-semibold text-base md:text-2xl w-[90%] md:w-[80%] text-center mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </div>

          <div>
            <img className="h-[90px] w-[90px]" src={photo} alt="photo" />
          </div>
          <div className="text-[#1C2024] font-semibold">Dr. Nishanth Raja</div>
          <div className="text-[#60646C] text-xs">C.E.O. and Co-founder</div>
        </div>
      </div>

      <section ref={sectionRef}>
        <div className="mt-10 md:mt-0 text-center flex justify-center">
          <div className="text-[#1C2024] text-3xl font-semibold flex flex-col w-[200px]">
            <div>Opportunities</div>
            <img className="object-cover" src={uline} />
          </div>
        </div>
        <div
          className="mt-8 font-semibold flex gap-2 md:gap-4 md:justify-center overflow-auto text-xs md:text-base mx-2 md:mx-0"
          style={{ scrollbarWidth: "none" }}
        >
          <Badge2
            text="All"
            selected={selectedBadge === 0}
            onClick={() => handleBadgeClick(0)}
          />
          <Badge2
            text="Department&nbsp;Name"
            selected={selectedBadge === 1}
            onClick={() => handleBadgeClick(1)}
          />
          <Badge2
            text="Department&nbsp;Name"
            selected={selectedBadge === 2}
            onClick={() => handleBadgeClick(2)}
          />
          <Badge2
            text="Department&nbsp;Name"
            selected={selectedBadge === 3}
            onClick={() => handleBadgeClick(3)}
          />
          <Badge2
            text="Department&nbsp;Name"
            selected={selectedBadge === 4}
            onClick={() => handleBadgeClick(4)}
          />
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-4 md:mt-12 border border-gray-200 p-4 rounded-xl w-[85%]">
            <div className="text-[#60646C] text-sm md:text-base">
              Department Name
            </div>
            <div className="text-xl md:text-2xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-4 border border-gray-200 p-4 rounded-xl w-[85%]">
            <div className="text-[#60646C] text-sm md:text-base">
              Department Name
            </div>
            <div className="text-xl md:text-2xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-4 border border-gray-200 p-4 rounded-xl w-[85%]">
            <div className="text-[#60646C] text-sm md:text-base">
              Department Name
            </div>
            <div className="text-xl md:text-2xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-4 border border-gray-200 p-4 rounded-xl w-[85%]">
            <div className="text-[#60646C] text-sm md:text-base">
              Department Name
            </div>
            <div className="text-xl md:text-2xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-4 border border-gray-200 p-4 rounded-xl w-[85%]">
            <div className="text-[#60646C] text-sm md:text-base">
              Department Name
            </div>
            <div className="text-xl md:text-2xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-4 border border-gray-200 p-4 rounded-xl w-[85%]">
            <div className="text-[#60646C] text-sm md:text-base">
              Department Name
            </div>
            <div className="text-xl md:text-2xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-4 border border-gray-200 p-4 rounded-xl w-[85%]">
            <div className="text-[#60646C] text-sm md:text-base">
              Department Name
            </div>
            <div className="text-xl md:text-2xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-4 w-full flex justify-center">
        <p className="text-[#60646C] md:font-semibold w-[80%] text-xl md:text-2xl text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </div>
    </div>
  ); 
}

export default Career
