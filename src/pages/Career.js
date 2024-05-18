import React, { useState,useRef  } from 'react';
import { useNavigate } from 'react-router-dom';
import frame from '../Assets/frame2.png'
import framevector from '../Assets/framevector.png'
import photo from '../Assets/photo.png'
import uline from '../Assets/uline.png'

const Badge2 = ({ text, selected, onClick }) => {
  const badgeStyle = {
    backgroundColor: selected ? '#01285C' : '#EEF6FF',
    color: selected ? '#ffffff' : '#013872',
    padding: '5px 14px',
    borderRadius: '15px',
    fontSize: '1em',
    border: `1px solid ${selected ? '#01285C' : '#B4CEEC'}`, 
    marginRight: '12px' 
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

  const handleButtonClick = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate();
  const handleContactClick =()=>{
    navigate ('/contact');
  }

  return (
    <div>
      <div className='h-[10vh]'>

      </div>
      <section className='w-full'>
          <img src={frame} alt="Frame Image" className='h-[80vh] w-full object-cover object-top' />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center border border-white">
            <h1 className="text-white text-5xl font-bold mt-4 sm:mt-24">
              "Together,
              <br />
              we shine"
            </h1>
            <p className="text-white mt-2 sm:mt-5 text-sm">
              We help you grow along with us
            </p>
            <button
              className=" text-white text-xs py-2 px-5 mt-3 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
              onClick={handleButtonClick}
            >
              Know More
            </button>
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
              fontSize: "25px",
              textAlign: "center",
              marginTop: "5.5%",
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
            style={{ marginTop: "13%" }}
            src={photo}
            alt="Photo"
          />
        </div>

        <div className="text-[#1C2024] font-semibold mt-2">
          Dr. Nishanth Raja
        </div>
        <div className="text-[#60646C] text-xs">C.E.O. and Co-founder</div>
      </section>
      <section ref={sectionRef}>
        <div style={{ marginTop: "10%", textAlign: "center" }}>
          <div className="text-[#1C2024] text-3xl font-semibold">
            Opportunities
            <img style={{ marginLeft: "44.5%", width: "11.5%" }} src={uline} />
          </div>
          <div className="mt-8 font-semibold">
            <Badge2
              text="All"
              selected={selectedBadge === 0}
              onClick={() => handleBadgeClick(0)}
            />
            <Badge2
              text="Department Name"
              selected={selectedBadge === 1}
              onClick={() => handleBadgeClick(1)}
            />
            <Badge2
              text="Department Name"
              selected={selectedBadge === 2}
              onClick={() => handleBadgeClick(2)}
            />
            <Badge2
              text="Department Name"
              selected={selectedBadge === 3}
              onClick={() => handleBadgeClick(3)}
            />
            <Badge2
              text="Department Name"
              selected={selectedBadge === 4}
              onClick={() => handleBadgeClick(4)}
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="mt-12 border border-gray-200 p-4"
            style={{ width: "88%", borderRadius: "10px" }}
          >
            <div className="text-[#60646C]"> Department Name</div>
            <div className="text-2xl font-semibold">Sr. UI/UX Designer</div>
            <div className="text-[#60646C]">
              Lorem ipsum dolor sit amet consectetur. Integer ultrices id
              lobortis et in lorem. Metus arcu hac placerat sagittis velit
              pellentesque velit sed diam. Nascetur duis nec ipsum viverra
              pharetra. Ultricies id gravida in ultricies donec scelerisque
              tincidunt vulputate viverra. Egestas integer ligula faucibus sem
              mauris. In pellentesque lectus integer sagittis mauris cursus.
              Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin
              nunc id a ornare mattis quis vitae amet dolor.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="mt-6 border border-gray-200 p-4"
            style={{ width: "88%", borderRadius: "10px" }}
          >
            <div className="text-[#60646C]"> Department Name</div>
            <div className="text-2xl font-semibold">Sr. UI/UX Designer</div>
            <div className="text-[#60646C]">
              Lorem ipsum dolor sit amet consectetur. Integer ultrices id
              lobortis et in lorem. Metus arcu hac placerat sagittis velit
              pellentesque velit sed diam. Nascetur duis nec ipsum viverra
              pharetra. Ultricies id gravida in ultricies donec scelerisque
              tincidunt vulputate viverra. Egestas integer ligula faucibus sem
              mauris. In pellentesque lectus integer sagittis mauris cursus.
              Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin
              nunc id a ornare mattis quis vitae amet dolor.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="mt-6 border border-gray-200 p-4"
            style={{ width: "88%", borderRadius: "10px" }}
          >
            <div className="text-[#60646C]"> Department Name</div>
            <div className="text-2xl font-semibold">Sr. UI/UX Designer</div>
            <div className="text-[#60646C]">
              Lorem ipsum dolor sit amet consectetur. Integer ultrices id
              lobortis et in lorem. Metus arcu hac placerat sagittis velit
              pellentesque velit sed diam. Nascetur duis nec ipsum viverra
              pharetra. Ultricies id gravida in ultricies donec scelerisque
              tincidunt vulputate viverra. Egestas integer ligula faucibus sem
              mauris. In pellentesque lectus integer sagittis mauris cursus.
              Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin
              nunc id a ornare mattis quis vitae amet dolor.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="mt-6 border border-gray-200 p-4"
            style={{ width: "88%", borderRadius: "10px" }}
          >
            <div className="text-[#60646C]"> Department Name</div>
            <div className="text-2xl font-semibold">Sr. UI/UX Designer</div>
            <div className="text-[#60646C]">
              Lorem ipsum dolor sit amet consectetur. Integer ultrices id
              lobortis et in lorem. Metus arcu hac placerat sagittis velit
              pellentesque velit sed diam. Nascetur duis nec ipsum viverra
              pharetra. Ultricies id gravida in ultricies donec scelerisque
              tincidunt vulputate viverra. Egestas integer ligula faucibus sem
              mauris. In pellentesque lectus integer sagittis mauris cursus.
              Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin
              nunc id a ornare mattis quis vitae amet dolor.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="mt-6 border border-gray-200 p-4"
            style={{ width: "88%", borderRadius: "10px" }}
          >
            <div className="text-[#60646C]"> Department Name</div>
            <div className="text-2xl font-semibold">Sr. UI/UX Designer</div>
            <div className="text-[#60646C]">
              Lorem ipsum dolor sit amet consectetur. Integer ultrices id
              lobortis et in lorem. Metus arcu hac placerat sagittis velit
              pellentesque velit sed diam. Nascetur duis nec ipsum viverra
              pharetra. Ultricies id gravida in ultricies donec scelerisque
              tincidunt vulputate viverra. Egestas integer ligula faucibus sem
              mauris. In pellentesque lectus integer sagittis mauris cursus.
              Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin
              nunc id a ornare mattis quis vitae amet dolor.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="mt-6 border border-gray-200 p-4"
            style={{ width: "88%", borderRadius: "10px" }}
          >
            <div className="text-[#60646C]"> Department Name</div>
            <div className="text-2xl font-semibold">Sr. UI/UX Designer</div>
            <div className="text-[#60646C]">
              Lorem ipsum dolor sit amet consectetur. Integer ultrices id
              lobortis et in lorem. Metus arcu hac placerat sagittis velit
              pellentesque velit sed diam. Nascetur duis nec ipsum viverra
              pharetra. Ultricies id gravida in ultricies donec scelerisque
              tincidunt vulputate viverra. Egestas integer ligula faucibus sem
              mauris. In pellentesque lectus integer sagittis mauris cursus.
              Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin
              nunc id a ornare mattis quis vitae amet dolor.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="mt-6 border border-gray-200 p-4"
            style={{ width: "88%", borderRadius: "10px" }}
          >
            <div className="text-[#60646C]"> Department Name</div>
            <div className="text-2xl font-semibold">Sr. UI/UX Designer</div>
            <div className="text-[#60646C]">
              Lorem ipsum dolor sit amet consectetur. Integer ultrices id
              lobortis et in lorem. Metus arcu hac placerat sagittis velit
              pellentesque velit sed diam. Nascetur duis nec ipsum viverra
              pharetra. Ultricies id gravida in ultricies donec scelerisque
              tincidunt vulputate viverra. Egestas integer ligula faucibus sem
              mauris. In pellentesque lectus integer sagittis mauris cursus.
              Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin
              nunc id a ornare mattis quis vitae amet dolor.
            </div>
          </div>
        </div>
      </section>
      <center style={{ marginTop: "15%" }}>
        <p
          className="text-[#60646C] font-semibold"
          style={{
            width: "66%",
            fontSize: "25px",
            marginTop: "5.5%",
            textAlign: "center",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </center>
    </div>
  ); 
}

export default Career
