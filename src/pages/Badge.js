import React from 'react';
import './Sb.css'; 

function Badge({ text, color, imageUrl, hoverText, hoverImageUrl, hoverHeading }) {
  const badgeStyle = {
    backgroundColor: color,
  };

  return (
    <div className="badge-container" style={badgeStyle}>
      <img src={imageUrl} alt="Badge Image" className="badge-image" />
      <span className="badge" >
        {text}
      </span>
      <span className="hover-text">
        <div className='grid grid-cols-2'>
        <img src={hoverImageUrl} alt="Hover Image" className="hover-image" />
        <div>
          <h6 className='text-xl text-semibold'>{hoverHeading}</h6>
          <p className='text-xs'>{hoverText}</p>
        </div>
        </div>
      </span>
    </div>
  );
}

export default Badge;
