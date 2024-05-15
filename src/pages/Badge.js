import React from 'react';
import './Sb.css'; 

function Badge({ text, color, imageUrl, hoverText, hoverImageUrl, hoverHeading }) {
  const badgeStyle = {
    backgroundColor: color,
  };

  return (
    <div className="badge-container" style={badgeStyle}>
      <img src={imageUrl} alt="Badge Image" className="badge-image" />
      <span className="badge">{text}</span>
      <div className="hover-text">
        <div className="grid grid-cols-2 border border-black h-[200px] w-[450px] bg-white rounded-md">
          <div className="p-2">
            <img
              src={hoverImageUrl}
              alt="Hover Image"
              className="w-[200px] h-[185px] rounded-md bg-black"
            />
          </div>
          <div className="p-2">
            <h6 className="text-lg font-semibold">{hoverHeading}</h6>
            <p className="text-xs font-light">{hoverText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Badge;
