import React from 'react';
import './Slider.css'; 

function VerticalLoopSlider({ images }) {
  return (
    <div className='slider-wrapper'>
      <div className='slider-track'>
        {images.map((image, index) => (
          <img key={index} className='slider-image' src={image} alt={`Image ${index + 1}`} />
        ))}

        {images.map((image, index) => (
          <img key={index} className='slider-image' src={image} alt={`Image ${index + 1}`} />
        ))}

        {images.map((image, index) => (
          <img key={index} className='slider-image' src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default VerticalLoopSlider;
